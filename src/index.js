const API_SPORT_REGISTRY = {
	football: require('./api/soccer-v4/sportradar.api').SportradarSoccerV4Api,
	volleyball: require('./api/voleyball-v2/sportradar.api').SportradarVolleyballV2Api,
	basketball: require('./api/basketball-v2/sportradar.api').SportradarBasketballV2Api,
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
};
