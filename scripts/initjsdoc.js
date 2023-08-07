const openApi = require('../src/api/basketball-v2/openapi.json');
const _ = require('lodash');

const lastFromRef = ($ref) => _.last($ref.split('/'));

const buildParamType = (paramName) => paramName.split('_').map(_.capitalize).join('');

const typeAlias = {
    integer: 'number',
};

const initSDKFromOpenApi = () => {
    let output = '';

    for (const [path, methods] of Object.entries(openApi.paths)) {
        if (methods.get) {
            const pathData = methods.get;
            const params = pathData.parameters.map(({$ref}) => lastFromRef($ref));
            const pathNormalized = path.replace(/{/g, '${');
            const methodDescription = pathData.description?.replace(/\n/g, '');
            const methodParams = params.filter(param => !path.includes(`{${param}}`)).join(', ')
            output += `
            /**
            @desc ${methodDescription}
            ${params.map((param) => `@param {${buildParamType(param)}} ${param}`).join('\n')}
            @return Promise.<${buildParamType(lastFromRef(pathData.responses['200']['$ref']))}>
              */
            async ${pathData.operationId} ({ ${params.join(', ')} }) {
               try {
               const { data } = await this.client.get(\`${pathNormalized}\`, {
                params: { ${methodParams} }
               });
               return data;
               } catch(e) {
                    this.onRequestError(e);
               }
            }
          
        `;
        }
    }

    return output;
};

const initJSDocTypesFromOpenApi = () => {
    let output = '';
    const {schemas, responses} = openApi.components;

    const dynamicTypes = new Map();

    const buildEnumType = (schema, typeName) => {
        return `
			/**
			@typedef {'${schema.enum?.join("'|'").replace('"', "/'").replace('"', "/'")}'} ${typeName}
	        */`;
    };

    const buildJsdoc = (schema, typeName, nested = false) => {
        if (schema.type === 'string') {
            return buildEnumType(schema, typeName);
        } else if (schema.type === 'object') {
            let output = `/**
			 @typedef {Object} ${typeName}
			 `;

            for (const [propertyName, propertySchema] of Object.entries(schema.properties)) {
                const type = buildParamType(propertyName);
                console.log(type);
                if (propertySchema.type === 'string' && propertySchema.enum) {
                    dynamicTypes.set(type, buildEnumType(propertySchema, type));
                    output += `@property {${type}} ${propertyName} \n`;
                    continue;
                }

                if (propertySchema.type === 'object') {
                    const propertyDoc = buildJsdoc(propertySchema, type, true);
                    if (nested) {
                        dynamicTypes.set(type, propertyDoc);
                    }
                    output += `@property {${type}} ${propertyName} \n`;
                    continue;
                }
                if (propertySchema.type === 'array') {
                    if (propertySchema.items['$ref']) {
                        output += `@property {${buildParamType(
                            lastFromRef(propertySchema.items['$ref']),
                        )}[]} ${propertyName} \n`;
                    } else {
                        dynamicTypes.set(type, buildJsdoc(propertySchema.items, type, true));
                        output += `@property {${type}[]} ${propertyName} \n`;
                    }
                    continue;
                }

                if (propertySchema['$ref']) {
                    const typeFromRef = buildParamType(lastFromRef(propertySchema['$ref']));
                    output += `@property {${typeFromRef}} ${propertyName} \n`;
                    continue;
                }

                output += `@property {${_.capitalize(
                    typeAlias[propertySchema.type] || propertySchema.type,
                )}} ${propertyName} \n`;
            }
            output += '*/';
            return output;
        }
        if (schema['$ref']) {
            // handle type alias
            return `/**
			@typedef {${buildParamType(lastFromRef(schema['$ref']))}} ${typeName}
			*/`;
        }
        if (schema.oneOf) {
            return buildEnumType(
                {
                    enum: schema.oneOf.map(({$ref}) => lastFromRef($ref)),
                },
                typeName,
            );
        }
        return '';
    };

    output += '// Types // \n';
    for (const [schemaKey, schema] of Object.entries(schemas)) {
        const type = buildParamType(schemaKey);
        const jsdoc = buildJsdoc(schema, type);
        output += jsdoc + '\n';
    }

    output += '// Responses // \n';
    for (const [responseKey, responseSchema] of Object.entries(responses)) {
        const type = buildParamType(responseKey) + 'Response';
        const jsdoc = buildJsdoc(responseSchema.content['application/json'].schema, type);
        output += jsdoc + '\n';
    }

    return [...dynamicTypes.values()].join('\n') + '\n' + output;
};


require('fs').writeFileSync('./jsdoc-types.js', initJSDocTypesFromOpenApi());
require('fs').writeFileSync('./sport-sdk.txt', initSDKFromOpenApi());
