const { SportradarSoccerV4Api } = require('./src/api/soccer-v4/sportradar.api');
const { SportradarVolleyballV2Api } = require('./src/api/voleyball-v2/sportradar.api');
const { SportradarBasketballV2Api } = require('./src/api/basketball-v2/sportradar.api');

const API_SPORT_REGISTRY = {
	football: require('./src/api/soccer-v4/sportradar.api').SportradarSoccerV4Api,
	soccer: require('./src/api/soccer-v4/sportradar.api').SportradarSoccerV4Api,
	volleyball: require('./src/api/voleyball-v2/sportradar.api').SportradarVolleyballV2Api,
	basketball: require('./src/api/basketball-v2/sportradar.api').SportradarBasketballV2Api,
};

/**
 * @return SportradarBasketballV2Api. | SportradarSoccerV4Api.
 * */
const getApiBySportName = (sportName = '') => {
	return API_SPORT_REGISTRY[sportName.toLowerCase()];
};

const getApiKeyBySportName = (sportName = '', accessLevel = 'production') => {
	return process.env[`SPORTRADAR_${sportName.toUpperCase()}_${accessLevel.toUpperCase()}_API_KEY`];
};

module.exports = {
	getApiBySportName: getApiBySportName,
	getApiKeyBySportName: getApiKeyBySportName,

	// SDK
	SportradarSoccerV4Api,
	SportradarVolleyballV2Api,
	SportradarBasketballV2Api,
};
