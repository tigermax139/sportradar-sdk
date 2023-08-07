const { SportradarApiBase } = require('../base.api');
const { SPORTRADAR_DEFAULT_LIST_LIMIT } = require('../../constants');

class SportradarSoccerV4Api extends SportradarApiBase {
	/**
	 * @constructor
	 * @param {string} apiKey
	 * @param {'trial'|'production'} accessLevel
	 * @param {SportradarLocale=} locale
	 * */
	constructor({ accessLevel = 'production', locale = 'en', apiKey }) {
		super({
			apiKey,
			baseUrl: `https://api.sportradar.com/soccer/${accessLevel}/v4`,
		});
		this.locale = locale;
	}

	/**
     @desc Get a list of all competitions.
     @param {SportradarLocale=} locale
     @return Promise.<CompetitionsResponse>
	 */
	async getCompetitions({ locale = this.locale }) {
		const { data } = await this.client.get(`/${locale}/competitions.json`);
		return data;
	}

	/**
     @desc info for a competition
     @param {string} urn_competition
     @param {SportradarLocale=} locale
     @return Promise.<CompetitionInfoResponse>
	 */
	async getCompetitionInfo({ urn_competition, locale = this.locale }) {
		const { data } = await this.client.get(`/${locale}/competitions/${urn_competition}/info.json`);
		return data;
	}

	/**
     @desc Get a list of all seasons for a competition.
     @param {string} urn_competition
     @param {SportradarLocale=} locale
     @return Promise.<CompetitionSeasonsResponse>
	 */
	async getCompetitionSeasons({ urn_competition, locale = this.locale }) {
		const { data } = await this.client.get(`/${locale}/competitions/${urn_competition}/seasons.json`);
		return data;
	}

	/**
     @desc Get information and players for the given urn.
     @param {string} urn_competitor
     @param {SportradarLocale=} locale
     @return Promise.<CompetitorProfileResponse>
	 */
	async getCompetitorProfile({ urn_competitor, locale = this.locale }) {
		const { data } = await this.client.get(`/${locale}/competitors/${urn_competitor}/profile.json`);
		return data;
	}

	/**
     @desc List last 30 summaries for a competitor, and all upcoming scheduled sport events.
     @param {string} urn_competitor
     @param {SportradarLocale=} locale
     @return Promise.<CompetitorSummariesResponse>
	 */
	async getCompetitorSummaries({ urn_competitor, locale = this.locale }) {
		const { data } = await this.client.get(`/${locale}/competitors/${urn_competitor}/summaries.json`);
		return data;
	}

	/**
     @desc List last 10 results and the next 10 schedules for a competitor against another competitor.
     @param {SportradarLocale=} locale
     @param {string} urn_competitor
     @param {string} urn_competitor2
     @return Promise.<CompetitorVersusSummariesResponse>
	 */
	async getCompetitorVersusSummaries({ locale = this.locale, urn_competitor, urn_competitor2 }) {
		const { data } = await this.client.get(
			`/${locale}/competitors/${urn_competitor}/versus/${urn_competitor2}/summaries.json`,
		);
		return data;
	}

	/**
     @desc undefined
     @param {SportradarLocale=} locale
     @param {number=} offset
     @param {number=} start
     @param {number=} limit
     @return Promise.<CompetitorMappingsResponse>
	 */
	async getCompetitorMappings({ locale = this.locale, offset, start, limit }) {
		const { data } = await this.client.get(`/${locale}/competitors/mappings.json`, {
			params: {
				offset,
				limit,
				start,
			},
		});
		return data;
	}

	/**
     @desc Get old and new IDs of players that have been merged
     @param {SportradarLocale=} locale
     @return Promise.<CompetitorMergeMappingsResponse>
	 */
	async getCompetitorMergeMappings({ locale = this.locale }) {
		const { data } = await this.client.get(`/${locale}/competitors/merge_mappings.json`);
		return data;
	}

	/**
     @desc Get the player profile for the given urn.
     @param {SportradarLocale=} locale
     @param {string} urn_player
     @return Promise.<PlayerProfileResponse>
	 */
	async getPlayerProfile({ locale = this.locale, urn_player }) {
		const { data } = await this.client.get(`/${locale}/players/${urn_player}/profile.json`);
		return data;
	}

	/**
     @desc Get a list of last 10 sport event summaries which the player was a part of.
     @param {SportradarLocale=} locale
     @param {string} urn_player
     @return Promise.<PlayerSummariesResponse>
	 */
	async getPlayerSummaries({ locale = this.locale, urn_player }) {
		const { data } = await this.client.get(`/${locale}/players/${urn_player}/summaries.json`);
		return data;
	}

	/**
     @desc undefined
     @param {SportradarLocale=} locale
     @param {number=} offset
     @param {number=} start
     @param {number=} limit
     @return Promise.<PlayerMappingsResponse>
	 */
	async getPlayerMappings({ locale = this.locale, offset, start, limit }) {
		const { data } = await this.client.get(`/${locale}/players/mappings.json`, {
			params: {
				start,
				limit,
				offset,
			},
		});
		return data;
	}

	/**
     @desc Get old and new IDs of players that have been merged
     @param {SportradarLocale=} locale
     @return Promise.<PlayerMergeMappingsResponse>
	 */
	async getPlayerMergeMappings({ locale = this.locale }) {
		const { data } = await this.client.get(`/${locale}/players/merge_mappings.json`);
		return data;
	}

	/**
     @desc Get a list of summaries for all sport events in a day (any status).
     @param {SportradarLocale=} locale
     @param {UrnDate} urn_date
     @param {number=} offset
     @param {number=} limit
     @return Promise.<ScheduleSummariesResponse>
	 */
	async getScheduleSummaries({ locale = this.locale, urn_date, offset, limit }) {
		const { data } = await this.client.get(`/${locale}/schedules/${urn_date}/summaries.json`, {
			params: {
				limit,
				offset,
			},
		});
		return data;
	}

	/**
     @desc Get a list of summaries for sport events which are live right now. Sport events appear in the feed 10 minutes before the scheduled start time and are removed 10 minutes after the sport event is ended.
     @param {SportradarLocale=} locale
     @return Promise.<ScheduleLiveSummariesResponse>
	 */
	async getScheduleLiveSummaries({ locale = this.locale } = {}) {
		const { data } = await this.client.get(`/${locale}/schedules/live/summaries.json`);
		return data;
	}

	/**
     @desc Get a list of timelines for sport events which are live right now. Sport events appear in the feed 10 minutes before the scheduled start time and are removed 10 minutes after the sport event is ended.
     @param {SportradarLocale=} locale
     @return Promise.<ScheduleLiveTimelinesResponse>
	 */
	async getLiveTimelines({ locale = this.locale } = {}) {
		const { data } = await this.client.get(`/${locale}/schedules/live/timelines.json`);
		return data;
	}

	/**
     @desc Get the summary and timelines for all sport events where something happened the last 10 seconds, with only the events of the last 10 seconds
     @param {SportradarLocale=} locale
     @return Promise.<ScheduleLiveTimelinesDeltaResponse>
	 */
	async getLiveTimelinesDelta({ locale = this.locale } = {}) {
		const { data } = await this.client.get(`/${locale}/schedules/live/timelines_delta.json`);
		return data;
	}

	/**
     @desc Get a list of all seasons.
     @param {SportradarLocale=} locale
     @return Promise.<SeasonsResponse>
	 */
	async getSeasons({ locale = this.locale } = {}) {
		const { data } = await this.client.get(`/${locale}/seasons.json`);
		return data;
	}

	/**
     @desc Get a list of competitors and their players in a season
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @param {number=} offset
     @param {number=} limit
     @return Promise.<SeasonCompetitorPlayersResponse>
	 */
	async getSeasonCompetitorPlayers({ locale = this.locale, urn_season, offset, limit }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/competitor_players.json`, {
			params: {
				offset,
				limit,
			},
		});
		return data;
	}

	/**
     @desc Get a list of competitors in a season
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @param {number=} offset
     @param {number=} limit
     @return Promise.<SeasonCompetitorsResponse>
	 */
	async getSeasonCompetitors({ locale = this.locale, urn_season, offset, limit }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/competitors.json`, {
			params: {
				offset,
				limit,
			},
		});
		return data;
	}

	/**
     @desc List competitor and player season statistics for a given season
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @param {string} urn_competitor
     @return Promise.<SeasonCompetitorStatisticsResponse>
	 */
	async getSeasonCompetitorStatistics({ locale = this.locale, urn_season, urn_competitor }) {
		const { data } = await this.client.get(
			`/${locale}/seasons/${urn_season}/competitors/${urn_competitor}/statistics.json`,
		);
		return data;
	}

	/**
     @desc Get information about season and competitors.
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @return Promise.<SeasonInfoResponse>
	 */
	async getSeasonInfo({ locale = this.locale, urn_season }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/info.json`);
		return data;
	}

	/**
     @desc Show season leader lists. Each list type is limited to the 10 top positions.
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @return Promise.<SeasonLeadersResponse>
	 */
	async getSeasonLeaders({ locale = this.locale, urn_season }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/leaders.json`);
		return data;
	}

	/**
     @desc Show sport events, including lineups for a season.
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @param {number=} offset
     @param {number=} start
     @param {number=} limit
     @return Promise.<SeasonLineupsResponse>
	 */
	async getSeasonLineups({ locale = this.locale, urn_season, offset, start, limit }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/lineups.json`, {
			params: {
				start,
				offset,
				limit,
			},
		});
		return data;
	}

	/**
     @desc undefined
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @return Promise.<SeasonMissingPlayersResponse>
	 */
	async getSeasonMissingPlayers({ locale = this.locale, urn_season }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/missing_players.json`);
		return data;
	}

	/**
     @desc Show over under statistics for all teams in a season
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @return Promise.<SeasonOverUnderStatisticsResponse>
	 */
	async getSeasonOverUnderStatistics({ locale = this.locale, urn_season }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/over_under_statistics.json`);
		return data;
	}

	/**
     @desc Get a list of players in a season
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @param {number=} offset
     @param {number=} limit
     @param {number=} start
     @return Promise.<SeasonPlayersResponse>
	 */
	async getSeasonPlayers({ locale = this.locale, urn_season, offset, limit, start }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/players.json`, {
			params: {
				offset,
				limit,
				start,
			},
		});
		return data;
	}

	/**
     @desc Show a probabilities for all sport events in a season.
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @return Promise.<SeasonProbabilitiesResponse>
	 */
	async getSeasonProbabilities({ locale = this.locale, urn_season }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/probabilities.json`);
		return data;
	}

	/**
     @desc Show schedule for a full season.
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @return Promise.<SeasonSchedulesResponse>
	 */
	async getSeasonSchedules({ locale = this.locale, urn_season }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/schedules.json`);
		return data;
	}

	/**
     @desc Get information about season stages, groups and cup rounds (brackets).
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @return Promise.<SeasonBracketsResponse>
	 */
	async getSeasonStagesGroupsCupRounds({ locale = this.locale, urn_season }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/stages_groups_cup_rounds.json`);
		return data;
	}

	/**
     @desc Get the standings for a season.
     @param {SportradarLocale=} locale
     @param {number=} round
     @param {string} urn_season
     @return Promise.<SeasonStandingsResponse>
	 */
	async getSeasonStandings({ locale = this.locale, round, urn_season }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/standings.json`, {
			params: {
				round,
			},
		});
		return data;
	}

	/**
     @desc Get a list of summaries for all sport events in a season (any status).
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @param {number=} offset
     @param {number=} limit
     @return Promise.<SeasonSummariesResponse>
	 */
	async getSeasonSummaries({ locale = this.locale, urn_season, offset = 0, limit = SPORTRADAR_DEFAULT_LIST_LIMIT }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/summaries.json`, {
			params: {
				offset,
				limit,
			},
		});
		return data;
	}

	/**
     @desc Show season transfers lists.
     @param {SportradarLocale=} locale
     @param {string} urn_season
     @return Promise.<SeasonTransfersResponse>
	 */
	async getSeasonTransfers({ locale = this.locale, urn_season }) {
		const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/transfers.json`);
		return data;
	}

	/**
     @desc Show fun facts for sport event.
     @param {string} urn_sport_event
     @param {SportradarLocale=} locale
     @return Promise.<SportEventFunFactsResponse>
	 */
	async getSportEventFunFacts({ urn_sport_event, locale = this.locale }) {
		const { data } = await this.client.get(`/${locale}/sport_events/${urn_sport_event}/fun_facts.json`);
		return data;
	}

	/**
     @desc Show a summary and timeline for one sport event, including data from official sources.
     @param {SportradarLocale=} locale
     @param {string} urn_sport_event
     @return Promise.<SportEventLeagueTimelineResponse>
	 */
	async getSportEventLeagueTimeline({ locale = this.locale, urn_sport_event }) {
		const { data } = await this.client.get(`/${locale}/sport_events/${urn_sport_event}/league_timeline.json`);
		return data;
	}

	/**
     @desc Show a sport event, including lineups.
     @param {SportradarLocale=} locale
     @param {string} urn_sport_event
     @return Promise.<SportEventLineupsResponse>
	 */
	async getSportEventLineups({ locale = this.locale, urn_sport_event }) {
		const { data } = await this.client.get(`/${locale}/sport_events/${urn_sport_event}/lineups.json`);
		return data;
	}

	/**
     @desc Show a summary for one sport event, including results.
     @param {SportradarLocale=} locale
     @param {string} urn_sport_event
     @return Promise.<SportEventSummaryResponse>
	 */
	async getSportEventSummary({ locale = this.locale, urn_sport_event }) {
		const { data } = await this.client.get(`/${locale}/sport_events/${urn_sport_event}/summary.json`);
		return data;
	}

	/**
     @desc Show a summary and timeline for one sport event, including results.
     @param {SportradarLocale=} locale
     @param {string} urn_sport_event
     @return Promise.<SportEventTimelineResponse>
	 */
	async getSportEventTimeline({ locale = this.locale, urn_sport_event }) {
		const { data } = await this.client.get(`/${locale}/sport_events/${urn_sport_event}/timeline.json`);
		return data;
	}

	/**
     @desc Lists sport events which has been created the last 24 hours
     @param {SportradarLocale=} locale
     @param {number=} offset
     @param {number=} limit
     @return Promise.<SportEventsCreatedResponse>
	 */
	async getSportEventsCreated({ locale = this.locale, offset, limit }) {
		const { data } = await this.client.get(`/${locale}/sport_events/created.json`, {
			params: {
				offset,
				limit,
			},
		});
		return data;
	}

	/**
     @desc Lists sport events which has been removed or disabled.
     @param {SportradarLocale=} locale
     @param {number=} offset
     @param {number=} limit
     @return Promise.<SportEventsRemovedResponse>
	 */
	async getSportEventsRemoved({ locale = this.locale, offset, limit }) {
		const { data } = await this.client.get(`/${locale}/sport_events/removed.json`, {
			params: {
				offset,
				limit,
			},
		});
		return data;
	}

	/**
     @desc Lists sport events which has been updated the last 24 hours
     @param {SportradarLocale=} locale
     @param {number=} offset
     @param {number=} limit
     @return Promise.<SportEventsUpdatedResponse>
	 */
	async getSportEventsUpdated({ locale = this.locale, offset, limit }) {
		const { data } = await this.client.get(`/${locale}/sport_events/updated.json`, {
			params: {
				offset,
				limit,
			},
		});
		return data;
	}

	/**
	 * @desc Real-time subscribe to live event
	 * */
	async subscribeToEvents({ competition_id, event_id, season_id, sport_event_id }) {
		const { data } = await this.client.get(`/stream/events/subscribe`, {
			params: {
				competition_id,
				event_id,
				season_id,
				sport_event_id,
			},
			responseType: 'stream',
		});
		return data;
	}

	/**
	 * @desc Real-time subscribe to live event(s) statistics
	 * */
	async subscribeToEventsStatistic({ competition_id, event_id, season_id, sport_event_id }) {
		const { data } = await this.client.get(`/stream/statistics/subscribe`, {
			params: {
				competition_id,
				event_id,
				season_id,
				sport_event_id,
			},
			responseType: 'stream',
		});
		return data;
	}
}

module.exports = {
	SportradarSoccerV4Api: SportradarSoccerV4Api,
};
