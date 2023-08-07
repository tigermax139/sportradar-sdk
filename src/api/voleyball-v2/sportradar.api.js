const { SportradarApiBase } = require('../base.api');

class SportradarVolleyballV2Api extends SportradarApiBase {
	/**
	 * @constructor
	 * @param {string} apiKey
	 * @param {'trial'|'production'} accessLevel
	 * @param {SportradarLocale=} locale
	 * */
	constructor({ accessLevel = 'production', locale = 'en', apiKey }) {
		super({
			apiKey,
			baseUrl: `https://api.sportradar.com/volleyball/${accessLevel}/v2`,
		});
		this.locale = locale;
	}
}

module.exports = {
	SportradarVolleyballV2Api,
};
