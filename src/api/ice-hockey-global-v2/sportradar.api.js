const { SportradarApiBase } = require('../base.api');

class SportradarIceHockeyV2GlobalApi extends SportradarApiBase {
	/**
	 * @constructor
	 * @param {string} apiKey
	 * @param {'trial'|'production'} accessLevel
	 * @param {SportradarLocale=} locale
	 * */
	constructor({ accessLevel = 'production', locale = 'en', apiKey }) {
		super({
			apiKey,
			baseUrl: `https://api.sportradar.com/icehockey/${accessLevel}/v2`,
		});

		this.locale = locale;
	}

	async getSeasonSchedules({}) {
		// TODO temporary mock
		return { schedules: [] };
	}


	/**
            @desc Get a list of all competitions.
            @param {SportradarLocale=} locale
            @return Promise.<Competitions>
	 */
	async getCompetitions({ locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/competitions.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc info for a competition
            @param {string} urn_competition
@param {SportradarLocale=} locale
            @return Promise.<CompetitionInfo>
	 */
	async getCompetitionInfo({ urn_competition, locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/competitions/${urn_competition}/info.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of all seasons for a competition.
            @param {string} urn_competition
@param {SportradarLocale=} locale
            @return Promise.<CompetitionSeasons>
	 */
	async getCompetitionSeasons({ urn_competition, locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/competitions/${urn_competition}/seasons.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get information and players for the given urn.
            @param {string=} urn_competitor
@param {SportradarLocale=} locale
            @return Promise.<CompetitorProfile>
	 */
	async getCompetitorProfile({ urn_competitor, locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/competitors/${urn_competitor}/profile.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc List last 30 summaries for a competitor, and all upcoming scheduled sport events.
            @param {string=} urn_competitor
@param {SportradarLocale=} locale
            @return Promise.<CompetitorSummaries>
	 */
	async getCompetitorSummaries({ urn_competitor, locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/competitors/${urn_competitor}/summaries.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc List last 10 results and the next 10 schedules for a competitor against another competitor.
            @param {SportradarLocale=} locale
@param {string=} urn_competitor
@param {string} urn_competitor2
            @return Promise.<CompetitorVersusSummaries>
	 */
	async getCompetitorVersusSummaries({ locale = this.locale, urn_competitor, urn_competitor2 }) {
		try {
			const { data } = await this.client.get(`/${locale}/competitors/${urn_competitor}/versus/${urn_competitor2}/summaries.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc undefined
            @param {SportradarLocale=} locale
@param {number=} offset
@param {number=} start
@param {number=} limit
            @return Promise.<CompetitorMappings>
	 */
	async getCompetitorMappings({ locale = this.locale, offset, start, limit }) {
		try {
			const { data } = await this.client.get(`/${locale}/competitors/mappings.json`, {
				params: { offset, start, limit },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get old and new IDs of players that have been merged
            @param {SportradarLocale=} locale
            @return Promise.<CompetitorMergeMappings>
	 */
	async getCompetitorMergeMappings({ locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/competitors/merge_mappings.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get the player profile for the given urn.
            @param {SportradarLocale=} locale
@param {string} urn_player
            @return Promise.<PlayerProfile>
	 */
	async getPlayerProfile({ locale = this.locale, urn_player }) {
		try {
			const { data } = await this.client.get(`/${locale}/players/${urn_player}/profile.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of last 10 sport event summaries which the player was a part of.
            @param {SportradarLocale=} locale
@param {string} urn_player
            @return Promise.<PlayerSummaries>
	 */
	async getPlayerSummaries({ locale = this.locale, urn_player }) {
		try {
			const { data } = await this.client.get(`/${locale}/players/${urn_player}/summaries.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc undefined
            @param {SportradarLocale=} locale
@param {number=} offset
@param {number=} start
@param {number=} limit
            @return Promise.<PlayerMappings>
	 */
	async getPlayerMappings({ locale = this.locale, offset, start, limit }) {
		try {
			const { data } = await this.client.get(`/${locale}/players/mappings.json`, {
				params: { offset, start, limit },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get old and new IDs of players that have been merged
            @param {SportradarLocale=} locale
            @return Promise.<PlayerMergeMappings>
	 */
	async getPlayerMergeMappings({ locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/players/merge_mappings.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of summaries for all sport events in a day (any status).
            @param {SportradarLocale=} locale
@param {UrnDate} urn_date
@param {number=} offset
@param {number=} limit
            @return Promise.<ScheduleSummaries>
	 */
	async getScheduleSummaries({ locale = this.locale, urn_date, offset, limit }) {
		try {
			const { data } = await this.client.get(`/${locale}/schedules/${urn_date}/summaries.json`, {
				params: { offset, limit },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of summaries for sport events which are live right now. Sport events appear in the feed 10 minutes before the scheduled start time and are removed 10 minutes after the sport event is ended.
            @param {SportradarLocale=} locale
            @return Promise.<ScheduleLiveSummaries>
	 */
	async getScheduleLiveSummaries({ locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/schedules/live/summaries.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of timelines for sport events which are live right now. Sport events appear in the feed 10 minutes before the scheduled start time and are removed 10 minutes after the sport event is ended.
            @param {SportradarLocale=} locale
            @return Promise.<ScheduleLiveTimelines>
	 */
	async getLiveTimelines({ locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/schedules/live/timelines.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get the summary and timelines for all sport events where something happened the last 10 seconds, with only the events of the last 10 seconds
            @param {SportradarLocale=} locale
            @return Promise.<ScheduleLiveTimelinesDelta>
	 */
	async getLiveTimelinesDelta({ locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/schedules/live/timelines_delta.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of all seasons.
            @param {SportradarLocale=} locale
            @return Promise.<Seasons>
	 */
	async getSeasons({ locale = this.locale }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of competitors in a season
            @param {SportradarLocale=} locale
@param {string} urn_season
@param {number=} offset
@param {number=} limit
@param {number=} start
            @return Promise.<SeasonCompetitors>
	 */
	async getSeasonCompetitors({ locale = this.locale, urn_season, offset, limit, start }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/competitors.json`, {
				params: { offset, limit, start },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc List competitor and player season statistics for a given season
            @param {SportradarLocale=} locale
@param {string} urn_season
@param {string=} urn_competitor
            @return Promise.<SeasonCompetitorStatistics>
	 */
	async getSeasonCompetitorStatistics({ locale = this.locale, urn_season, urn_competitor }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/competitors/${urn_competitor}/statistics.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get information about season and competitors.
            @param {SportradarLocale=} locale
@param {string} urn_season
            @return Promise.<SeasonInfo>
	 */
	async getSeasonInfo({ locale = this.locale, urn_season }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/info.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Show season leader lists.
            @param {SportradarLocale=} locale
@param {string} urn_season
            @return Promise.<SeasonLeaders>
	 */
	async getSeasonLeaders({ locale = this.locale, urn_season }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/leaders.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Show sport events, including lineups for a season.
            @param {SportradarLocale=} locale
@param {string} urn_season
@param {number=} offset
@param {number=} start
@param {number=} limit
            @return Promise.<SeasonLineups>
	 */
	async getSeasonLineups({ locale = this.locale, urn_season, offset, start, limit }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/lineups.json`, {
				params: { offset, start, limit },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of players in a season
            @param {SportradarLocale=} locale
@param {string} urn_season
@param {number=} offset
@param {number=} limit
@param {number=} start
            @return Promise.<SeasonPlayers>
	 */
	async getSeasonPlayers({ locale = this.locale, urn_season, offset, limit, start }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/players.json`, {
				params: { offset, limit, start },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Show a probabilities for all sport events in a season.
            @param {SportradarLocale=} locale
@param {string} urn_season
            @return Promise.<SeasonProbabilities>
	 */
	async getSeasonProbabilities({ locale = this.locale, urn_season }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/probabilities.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of simple team mappings in a season
            @param {SportradarLocale=} locale
@param {string} urn_season
            @return Promise.<SeasonSimpleTeamMappings>
	 */
	async getSeasonSimpleTeamMappings({ locale = this.locale, urn_season }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/simple_team_mappings.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of simple tournament mappings in a season
            @param {SportradarLocale=} locale
@param {string} urn_season
            @return Promise.<SeasonSimpleTournamentMappings>
	 */
	async getSeasonSimpleTournamentMappings({ locale = this.locale, urn_season }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/simple_tournament_mappings.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get information about season stages, groups and cup rounds (brackets).
            @param {SportradarLocale=} locale
@param {string} urn_season
            @return Promise.<SeasonBrackets>
	 */
	async getSeasonStagesGroupsCupRounds({ locale = this.locale, urn_season }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/stages_groups_cup_rounds.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get the standings for a season.
            @param {SportradarLocale=} locale
@param {number=} round
@param {string} urn_season
@param {boolean=} live
            @return Promise.<SeasonStandings>
	 */
	async getSeasonStandings({ locale = this.locale, round, urn_season, live }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/standings.json`, {
				params: { round, live },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Get a list of summaries for all sport events in a season (any status).
            @param {SportradarLocale=} locale
@param {string} urn_season
@param {number=} offset
@param {number=} limit
@param {number=} start
            @return Promise.<SeasonSummaries>
	 */
	async getSeasonSummaries({ locale = this.locale, urn_season, offset, limit, start }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/${urn_season}/summaries.json`, {
				params: { offset, limit, start },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc undefined
            @param {SportradarLocale=} locale
@param {number=} offset
@param {number=} start
@param {number=} limit
            @return Promise.<SeasonMappings>
	 */
	async getSeasonMappings({ locale = this.locale, offset, start, limit }) {
		try {
			const { data } = await this.client.get(`/${locale}/seasons/mappings.json`, {
				params: { offset, start, limit },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Show a sport event, including lineups.
            @param {SportradarLocale=} locale
@param {string} urn_sport_event
            @return Promise.<SportEventLineups>
	 */
	async getSportEventLineups({ locale = this.locale, urn_sport_event }) {
		try {
			const { data } = await this.client.get(`/${locale}/sport_events/${urn_sport_event}/lineups.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Show a summary for one sport event, including results.
            @param {SportradarLocale=} locale
@param {string} urn_sport_event
            @return Promise.<SportEventSummary>
	 */
	async getSportEventSummary({ locale = this.locale, urn_sport_event }) {
		try {
			const { data } = await this.client.get(`/${locale}/sport_events/${urn_sport_event}/summary.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Show a summary and timeline for one sport event, including results.
            @param {SportradarLocale=} locale
@param {string} urn_sport_event
            @return Promise.<SportEventTimeline>
	 */
	async getSportEventTimeline({ locale = this.locale, urn_sport_event }) {
		try {
			const { data } = await this.client.get(`/${locale}/sport_events/${urn_sport_event}/timeline.json`, {
				params: {},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Lists sport events which has been created the last 24 hours
            @param {SportradarLocale=} locale
@param {number=} offset
@param {number=} start
@param {number} created_endpoints_limit
            @return Promise.<SportEventsCreated>
	 */
	async getSportEventsCreated({ locale = this.locale, offset, start, created_endpoints_limit }) {
		try {
			const { data } = await this.client.get(`/${locale}/sport_events/created.json`, {
				params: { offset, start, created_endpoints_limit },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc undefined
            @param {SportradarLocale=} locale
@param {number=} offset
@param {number=} start
@param {number=} limit
            @return Promise.<SportEventMappings>
	 */
	async getSportEventMappings({ locale = this.locale, offset, start, limit }) {
		try {
			const { data } = await this.client.get(`/${locale}/sport_events/mappings.json`, {
				params: { offset, start, limit },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Lists sport events which has been removed or disabled.
            @param {SportradarLocale=} locale
@param {number=} offset
@param {number=} start
@param {number} updated_removed_endpoints_limit
            @return Promise.<SportEventsRemoved>
	 */
	async getSportEventsRemoved({ locale = this.locale, offset, start, updated_removed_endpoints_limit }) {
		try {
			const { data } = await this.client.get(`/${locale}/sport_events/removed.json`, {
				params: { offset, start, updated_removed_endpoints_limit },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc Lists sport events which has been updated the last 24 hours
            @param {SportradarLocale=} locale
@param {number=} offset
@param {number=} start
@param {number} updated_removed_endpoints_limit
            @return Promise.<SportEventsUpdated>
	 */
	async getSportEventsUpdated({ locale = this.locale, offset, start, updated_removed_endpoints_limit }) {
		try {
			const { data } = await this.client.get(`/${locale}/sport_events/updated.json`, {
				params: { offset, start, updated_removed_endpoints_limit },
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc undefined
            @param {string} stream_format
@param {string} stream_event_id
@param {string} stream_competition_id
@param {string} stream_season_id
@param {string} stream_sport_id
@param {string} stream_sport_event_id
            @return Promise.<StreamEvents>
	 */
	async getStreamEvents({
							  stream_format,
							  stream_event_id,
							  stream_competition_id,
							  stream_season_id,
							  stream_sport_id,
							  stream_sport_event_id,
						  }) {
		try {
			const { data } = await this.client.get(`/stream/events/subscribe.json`, {
				params: {
					stream_format,
					stream_event_id,
					stream_competition_id,
					stream_season_id,
					stream_sport_id,
					stream_sport_event_id,
				},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}


	/**
            @desc undefined
            @param {string} stream_format
@param {string} stream_event_id
@param {string} stream_competition_id
@param {string} stream_season_id
@param {string} stream_sport_id
@param {string} stream_sport_event_id
            @return Promise.<StreamStatistics>
	 */
	async getStreamStatistics({
								  stream_format,
								  stream_event_id,
								  stream_competition_id,
								  stream_season_id,
								  stream_sport_id,
								  stream_sport_event_id,
							  }) {
		try {
			const { data } = await this.client.get(`/stream/statistics/subscribe.json`, {
				params: {
					stream_format,
					stream_event_id,
					stream_competition_id,
					stream_season_id,
					stream_sport_id,
					stream_sport_event_id,
				},
			});
			return data;
		} catch (e) {
			this.onRequestError(e);
		}
	}
}

module.exports = {
	SportradarIceHockeyV2GlobalApi: SportradarIceHockeyV2GlobalApi,
};