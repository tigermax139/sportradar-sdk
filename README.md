[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# sportradar-sdk

Simple wrapper over Sportradar API. Request/Response Typed via JSDoc.

## Usage
```js
const api = new SportradarSoccerV4Api({
		apiKey: process.env[`SPORTRADAR_SOCCER_GAME_API_KEY`],
		locale: 'en',
	});

api.getCompetitions({}).then(conosle.log);
```

## TODOs

- Add typescript support
- Cover other sports (on request)