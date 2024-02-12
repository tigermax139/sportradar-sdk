const { SportradarApiBase } = require('../base.api');

class SportradarBasketballV2Api extends SportradarApiBase {
	/**
	 * @constructor
	 * @param {string} apiKey
	 * @param {'trial'|'production'} accessLevel
	 * @param {SportradarLocale=} locale
	 * */
	constructor({ accessLevel = 'production', locale = 'en', apiKey }) {
		super({
			apiKey,
			baseUrl: `https://api.sportradar.com/basketball/${accessLevel}/v2`,
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
	async getCompetitions({ locale = this.locale } = {}) {
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
     @param {string} urn_competitor
     @param {SportradarLocale=} locale
     @return Promise.<CompetitorProfileResponse>
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
     @param {string} urn_competitor
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
     @param {string} urn_competitor
     @param {string} urn_competitor2
     @return Promise.<CompetitorVersusSummaries>
     */
	async getCompetitorVersusSummaries({ locale = this.locale, urn_competitor, urn_competitor2 }) {
		try {
			const { data } = await this.client.get(
				`/${locale}/competitors/${urn_competitor}/versus/${urn_competitor2}/summaries.json`,
				{
					params: {},
				},
			);
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
	async getCompetitorMergeMappings({ locale = this.locale } = {}) {
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
	async getPlayerMergeMappings({ locale = this.locale } = {}) {
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
     @return Promise.<ScheduleLiveSummariesResponse>
     */
	async getScheduleLiveSummaries({ locale = this.locale } = {}) {
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
     @return Promise.<ScheduleLiveTimelinesResponse>
     */
	async getLiveTimelines({ locale = this.locale } = {}) {
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
	async getLiveTimelinesDelta({ locale = this.locale } = {}) {
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
	async getSeasons({ locale = this.locale } = {}) {
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
     @param {string} urn_competitor
     @return Promise.<SeasonCompetitorStatistics>
     */
	async getSeasonCompetitorStatistics({ locale = this.locale, urn_season, urn_competitor }) {
		try {
			const { data } = await this.client.get(
				`/${locale}/seasons/${urn_season}/competitors/${urn_competitor}/statistics.json`,
				{
					params: {},
				},
			);
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
     @return Promise.<SeasonStandingsResponse>
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
     @return Promise.<SeasonSummariesResponse>
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
     @return Promise.<SportEventLineupsResponse>
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
     @return Promise.<SportEventSummaryResponse>
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
     @param {number=} created_endpoints_limit
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
     @desc Get sport event mapping
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
     @param {number=} updated_removed_endpoints_limit
     @return Promise.<SportEventsRemovedResponse>
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
     @param {number=} updated_removed_endpoints_limit
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
     @param {StreamFormat} stream_format
     @param {StreamEventId} stream_event_id
     @param {StreamCompetitionId} stream_competition_id
     @param {StreamSeasonId} stream_season_id
     @param {StreamSportId} stream_sport_id
     @param {StreamSportEventId} stream_sport_event_id
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
			const { data } = await this.client.get(`/stream/events/subscribe`, {
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
     @param {StreamFormat} stream_format
     @param {StreamEventId} stream_event_id
     @param {StreamCompetitionId} stream_competition_id
     @param {StreamSeasonId} stream_season_id
     @param {StreamSportId} stream_sport_id
     @param {StreamSportEventId} stream_sport_event_id
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
			const { data } = await this.client.get(`/stream/statistics/subscribe`, {
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
	SportradarBasketballV2Api,
};

/**
 @typedef {'U23'|'U22'|'U21'|'U20'|'U19'|'U18'|'U17'|'U16'|'U15'|'U14'|'U13'|'U12'|'U11'|'Y10'|'Juniors'|'Youth'|'Unconfirmed'} AgeGroup
 */

/**
 @typedef {'home_team_winner'|'away_team_winner'|'draw'|'home_team_next_goal'|'away_team_next_goal'|'none'} Name
 */

/**
 @typedef {'total'|'home'|'away'|'first_half_total'|'first_half_home'|'first_half_away'|'second_half_total'|'second_half_home'|'second_half_away'} Type
 */
/**
 @typedef {Object} Statistics
 @property {Competitors[]} competitors
 */
/**
 @typedef {Object} Competitors
 @property {String} abbreviation
 @property {AgeGroup} age_group
 @property {String} country
 @property {String} country_code
 @property {Number} division
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {SportEventPlayerStatistics[]} players
 @property {EnumCompetitorQualifier} qualifier
 @property {String} state
 @property {Statistics} statistics
 @property {Boolean} virtual
 */
/**
 @typedef {Object} Jersey
 @property {String} base
 @property {Boolean} horizontal_stripes
 @property {String} horizontal_stripes_color
 @property {String} number
 @property {String} shirt_type
 @property {String} sleeve
 @property {String} sleeve_detail
 @property {Boolean} split
 @property {String} split_color
 @property {Boolean} squares
 @property {String} squares_color
 @property {Boolean} stripes
 @property {String} stripes_color
 @property {String} type
 */
/**
 @typedef {Object} Jerseys
 @property {Jersey} jersey
 */
/**
 @typedef {Object} SportEventTimelineDeltas
 @property {SportEventTimelineDelta} sport_event_timeline
 */
/**
 @typedef {Object} SportEventsCreated
 @property {String} created_at
 @property {String} id
 */
/**
 @typedef {Object} SportEventsRemoved
 @property {String} id
 @property {String} replaced_by
 */
/**
 @typedef {Object} SportEventsUpdated
 @property {String} id
 @property {String} updated_at
 */
// Types //
/**
 @typedef {Object} BaseCompetition
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {String} parent_id
 @property {String} type
 */
/**
 @typedef {Object} BaseCompetitor
 @property {String} abbreviation
 @property {AgeGroup} age_group
 @property {String} country
 @property {String} country_code
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {EnumCompetitorQualifier} qualifier
 @property {Boolean} virtual
 */
/**
 @typedef {Object} BaseGenericEvent
 @property {GenericEventPlayer[]} assists
 @property {Number} away_score
 @property {String} break_name
 @property {EnumCompetitorQualifier} competitor
 @property {Number} home_score
 @property {Number} id
 @property {String} match_clock
 @property {Number} match_time
 @property {String} method
 @property {String} period
 @property {String} period_name
 @property {EnumPeriodType} period_type
 @property {GenericEventPlayer} player
 @property {Scorer} scorer
 @property {EnumPenaltyShootoutStatus} status
 @property {String} time
 @property {EnumEventType} type
 @property {Boolean} updated
 @property {String} updated_time
 */
/**
 @typedef {Object} BasePlayer
 @property {String} country_code
 @property {String} date_of_birth
 @property {EnumGender} gender
 @property {Number} height
 @property {String} id
 @property {Number} jersey_number
 @property {String} name
 @property {String} nationality
 @property {String} nickname
 @property {EnumPlayerType} type
 @property {Number} weight
 */
/**
 @typedef {Object} BaseSportEvent
 @property {SportEventChannels[]} channels
 @property {Competitor[]} competitors
 @property {SportEventCoverage} coverage
 @property {String} id
 @property {String} replaced_by
 @property {String} resume_time
 @property {SportEventContext} sport_event_context
 @property {String} start_time
 @property {Boolean} start_time_confirmed
 @property {Venue} venue
 */
/**
 @typedef {Object} BaseSportEventContextRound
 @property {String} cup_round_id
 @property {String} name
 @property {Number} number
 */
/**
 @typedef {Object} BaseSportEventStatus
 @property {Number} away_normaltime_score
 @property {Number} away_overtime_score
 @property {Number} away_score
 @property {Boolean} decided_by_fed
 @property {Number} home_normaltime_score
 @property {Number} home_overtime_score
 @property {Number} home_score
 @property {EnumSportEventMatchStatus} match_status
 @property {Boolean} match_tie
 @property {PeriodScore[]} period_scores
 @property {Boolean} scout_abandoned
 @property {EnumSportEventStatus} status
 @property {String} winner_id
 */
/**
 @typedef {Object} BaseSummary
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 */
/**
 @typedef {Object} Category
 @property {String} country_code
 @property {String} id
 @property {String} name
 */
/**
 @typedef {Object} Clock
 @property {String} played
 @property {String} remaining
 */
/**
 @typedef {Object} Competition
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {String} parent_id
 @property {String} type
 */
/**
 @typedef {Object} CompetitionExtended
 @property {Competition[]} children
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {String} parent_id
 @property {String} type
 */
/**
 @typedef {Object} CompetitionWithCategory
 @property {Category} category
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {String} parent_id
 @property {String} type
 */
/**
 @typedef {Object} Competitor
 @property {String} abbreviation
 @property {AgeGroup} age_group
 @property {String} country
 @property {String} country_code
 @property {Number} division
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {EnumCompetitorQualifier} qualifier
 @property {String} state
 @property {Boolean} virtual
 */

/**
 @typedef {'delayed'|'closed'|'completed'|'in_progress'|'scheduled'|'suspended'|'cancelled'|'rescheduled'|'postponed'} EnumCompetitionStatus
 */

/**
 @typedef {'home'|'away'} EnumCompetitorQualifier
 */

/**
 @typedef {'boxscore'|'match_clock'|'stats_leaders'|'time_played_minutes_and_seconds'|'time_played_minutes_only'} EnumCoverageInfoType
 */

/**
 @typedef {'match_started'|'match_ended'|'steal'|'timeout'|'timeout_over'|'turnover'|'video_review'|'video_review_over'|'ball_block'|'foul'|'free_throws_awarded'|'won_jump_ball'|'attempt_missed'|'rebound'|'score_change'|'period_start'|'period_score'} EnumEventType
 */

/**
 @typedef {'female'|'male'} EnumGender
 */

/**
 @typedef {'missed'|'scored'|'not_taken_yet'} EnumPenaltyShootoutStatus
 */

/**
 @typedef {'regular_period'|'overtime'|'1st_quarter'|'2nd_quarter'|'3rd_quarter'|'4th_quarter'|'1st_half'|'2nd_half'|'penalties'|'1st_pause'|'2nd_pause'|'3rd_pause'|'awaiting_extra'|'awaiting_penalties'|'interrupted'|'1st_extra'|'2nd_extra'} EnumPeriodType
 */

/**
 @typedef {'1st_part_of_season_1st_leg'|'conference'|'division'|'final_phase'|'grand_finals'|'group_phase_1'|'knockout_stage'|'main_round_1'|'main_round_2'|'none'|'placement_matches'|'playoffs'|'promotion_playoffs'|'qualification'|'qualification_playoffs'|'regular season'|'relegation_playoffs'|'stage_1'|'stage_1_playoff'|'stage_2'|'stage_2_placement_matches'} EnumPhase
 */

/**
 @typedef {'player'} EnumPlayerRoleType
 */

/**
 @typedef {'NA'|'G'|'G-F'|'C'|'F-G'|'F-C'|'C-F'|'PF'|'PG'|'SF'|'SG'|'F'} EnumPlayerType
 */

/**
 @typedef {'1st_quarter'|'2nd_quarter'|'3rd_quarter'|'4th_quarter'|'1st_half'|'2nd_half'|'overtime'|'penalties'|'pause'|'awaiting_extra_time'|'awaiting_penalties'|'interrupted'|'not_started'|'aet'|'ended'|'postponed'|'cancelled'|'abandoned'|'start_delayed'|'started'} EnumSportEventMatchStatus
 */

/**
 @typedef {'not_started'|'started'|'postponed'|'suspended'|'cancelled'|'delayed'|'live'|'interrupted'|'ended'|'closed'} EnumSportEventStatus
 */

/**
 @typedef {'cup'|'league'} EnumStageType
 */
/**
 @typedef {Object} GenericEvent
 @property {GenericEventPlayer[]} assists
 @property {Number} away_score
 @property {String} break_name
 @property {EnumCompetitorQualifier} competitor
 @property {Number} home_score
 @property {Number} id
 @property {String} match_clock
 @property {Number} match_time
 @property {String} method
 @property {String} period
 @property {String} period_name
 @property {EnumPeriodType} period_type
 @property {GenericEventPlayer} player
 @property {Number} points
 @property {Scorer} scorer
 @property {EnumPenaltyShootoutStatus} status
 @property {Number} stoppage_time
 @property {Number} suspension_minutes
 @property {String} time
 @property {EnumEventType} type
 @property {Boolean} updated
 @property {String} updated_time
 @property {Number} x
 @property {Number} y
 */
/**
 @typedef {Object} GenericEventPlayer
 @property {String} id
 @property {String} name
 @property {String} type
 */
/**
 @typedef {Object} Info
 @property {EnumCompetitionStatus} competition_status
 @property {Boolean} venue_reduced_capacity
 @property {Number} venue_reduced_capacity_max
 */
/**
 @typedef {Object} InternalMapping
 @property {String} id
 @property {String} name
 */
/**
 @typedef {Object} Jersey
 @property {String} base
 @property {Boolean} horizontal_stripes
 @property {String} horizontal_stripes_color
 @property {String} number
 @property {String} shirt_type
 @property {String} sleeve
 @property {String} sleeve_detail
 @property {Boolean} split
 @property {String} split_color
 @property {Boolean} squares
 @property {String} squares_color
 @property {Boolean} stripes
 @property {String} stripes_color
 @property {String} type
 */
/**
 @typedef {Object} LineupCompetitor
 @property {String} abbreviation
 @property {AgeGroup} age_group
 @property {String} country
 @property {String} country_code
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {LineupPlayer[]} players
 @property {String} qualifier
 @property {Boolean} virtual
 */
/**
 @typedef {Object} LineupPlayer
 @property {String} country_code
 @property {String} date_of_birth
 @property {EnumGender} gender
 @property {Number} height
 @property {String} id
 @property {Number} jersey_number
 @property {String} name
 @property {String} nationality
 @property {String} nickname
 @property {Boolean} played
 @property {Boolean} starter
 @property {EnumPlayerType} type
 @property {Number} weight
 */
/**
 @typedef {Object} Manager
 @property {String} country_code
 @property {String} date_of_birth
 @property {EnumGender} gender
 @property {String} id
 @property {String} name
 @property {String} nationality
 @property {String} nickname
 */
/**
 @typedef {Object} Mapping
 @property {String} external_id
 @property {String} id
 @property {String} merged_id
 @property {String} retained_id
 */
/**
 @typedef {Object} MergeMapping
 @property {String} merged_id
 @property {String} name
 @property {String} retained_id
 */
/**
 @typedef {Object} PeriodScore
 @property {Number} away_score
 @property {Number} home_score
 @property {Number} number
 @property {EnumPeriodType} type
 */
/**
 @typedef {Object} Player
 @property {String} country_code
 @property {String} date_of_birth
 @property {EnumGender} gender
 @property {Number} height
 @property {String} id
 @property {Number} jersey_number
 @property {String} name
 @property {String} nationality
 @property {String} nickname
 @property {EnumPlayerType} type
 @property {Number} weight
 */
/**
 @typedef {Object} PlayerBasics
 @property {String} id
 @property {String} name
 */
/**
 @typedef {Object} PlayerRole
 @property {Boolean} active
 @property {Competitor} competitor
 @property {String} end_date
 @property {Number} jersey_number
 @property {String} start_date
 @property {EnumPlayerRoleType} type
 */
/**
 @typedef {Object} ProbabilityMarketTwoThreeWay
 @property {Number} away_score
 @property {Number} home_score
 @property {String} last_updated
 @property {Boolean} live
 @property {String} match_time
 @property {Name} name
 @property {ProbabilityOutcomeTwoThreeWay[]} outcomes
 @property {String} remaining_time
 @property {String} remaining_time_in_period
 */
/**
 @typedef {Object} ProbabilityOutcomeTwoThreeWay
 @property {Name} name
 @property {Number} probability
 */
/**
 @typedef {Object} Season
 @property {String} competition_id
 @property {Boolean} disabled
 @property {String} end_date
 @property {String} id
 @property {String} name
 @property {String} start_date
 @property {String} year
 */
/**
 @typedef {Object} SeasonBracketsCupRound
 @property {String} id
 @property {SeasonBracketsCupRoundLinked[]} linked_cup_rounds
 @property {String} name
 @property {SeasonBracketsCupRoundSportEvent[]} sport_events
 */
/**
 @typedef {Object} SeasonBracketsCupRoundLinked
 @property {String} id
 @property {String} name
 @property {Type} type
 */
/**
 @typedef {Object} SeasonBracketsCupRoundSportEvent
 @property {String} id
 @property {String} replaced_by
 @property {String} resume_time
 @property {String} start_time
 @property {Boolean} start_time_confirmed
 */
/**
 @typedef {Object} SeasonBracketsGroup
 @property {SeasonBracketsCupRound[]} cup_rounds
 @property {String} group_name
 @property {String} id
 */
/**
 @typedef {Object} SeasonBracketsStage
 @property {String} end_date
 @property {SeasonBracketsGroup[]} groups
 @property {Number} order
 @property {EnumPhase} phase
 @property {String} start_date
 @property {EnumStageType} type
 @property {String} year
 */
/**
 @typedef {Object} SeasonCompetitor
 @property {String} abbreviation
 @property {String} id
 @property {String} name
 @property {String} short_name
 @property {Boolean} virtual
 */
/**
 @typedef {Object} SeasonCompetitorStatistics
 @property {Number} field_goals_made
 @property {String} minutes
 @property {SeasonPlayerStatistics[]} players
 */
/**
 @typedef {Object} SeasonExtended
 @property {Category} category
 @property {Competition} competition
 @property {String} competition_id
 @property {Boolean} disabled
 @property {String} end_date
 @property {String} id
 @property {Info} info
 @property {String} name
 @property {Sport} sport
 @property {String} start_date
 @property {String} year
 */
/**
 @typedef {Object} SeasonPlayer
 @property {String} country_code
 @property {String} date_of_birth
 @property {String} display_first_name
 @property {String} display_last_name
 @property {String} first_name
 @property {EnumGender} gender
 @property {Number} height
 @property {String} id
 @property {Number} jersey_number
 @property {String} last_name
 @property {String} name
 @property {String} nationality
 @property {String} nickname
 @property {EnumPlayerType} type
 @property {Number} weight
 */
/**
 @typedef {Object} SeasonPlayerStatistics
 @property {String} id
 @property {String} name
 */
/**
 @typedef {Object} SeasonStage
 @property {String} end_date
 @property {SeasonStageGroup[]} groups
 @property {Number} order
 @property {EnumPhase} phase
 @property {String} start_date
 @property {EnumStageType} type
 @property {String} year
 */
/**
 @typedef {Object} SeasonStageGroup
 @property {Competitor[]} competitors
 @property {String} group_name
 @property {String} id
 @property {Number} max_rounds
 @property {String} name
 @property {String} parent_group_id
 */
/**
 @typedef {Object} SimpleSeasonStageGroup
 @property {String} id
 @property {InternalMapping[]} mappings
 @property {String} name
 */
/**
 @typedef {Object} SimpleTeamMapping
 @property {Number} division
 @property {String} id
 @property {InternalMapping[]} mappings
 @property {String} name
 @property {String} state
 @property {Boolean} virtual
 */
/**
 @typedef {Object} SimpleTournamentMapping
 @property {SimpleSeasonStageGroup[]} groups
 @property {String} id
 @property {String} name
 @property {String} parent_id
 @property {String} type
 */
/**
 @typedef {Object} Sport
 @property {String} id
 @property {String} name
 */
/**
 @typedef {Object} SportEvent
 @property {SportEventChannels[]} channels
 @property {Competitor[]} competitors
 @property {SportEventCoverage} coverage
 @property {String} id
 @property {String} replaced_by
 @property {String} resume_time
 @property {SportEventConditions} sport_event_conditions
 @property {SportEventContext} sport_event_context
 @property {String} start_time
 @property {Boolean} start_time_confirmed
 @property {Venue} venue
 */
/**
 @typedef {Object} SportEventChannels
 @property {String} country
 @property {String} country_code
 @property {String} name
 @property {String} url
 */
/**
 @typedef {Object} SportEventCompetitorStatistics
 @property {SportEventPlayerStatistics[]} players
 @property {Statistics} statistics
 */
/**
 @typedef {Object} SportEventConditions
 @property {Ground} ground
 */
/**
 @typedef {Object} SportEventContext
 @property {Category} category
 @property {Competition} competition
 @property {SportEventContextGroup[]} groups
 @property {SportEventContextRound} round
 @property {Season} season
 @property {Sport} sport
 @property {SportEventContextStage} stage
 */
/**
 @typedef {Object} SportEventContextGroup
 @property {String} group_name
 @property {String} id
 @property {String} name
 */
/**
 @typedef {Object} SportEventContextRound
 @property {String} cup_round_id
 @property {Number} cup_round_number_of_sport_events
 @property {Number} cup_round_sport_event_number
 @property {String} name
 @property {Number} number
 */
/**
 @typedef {Object} SportEventContextStage
 @property {String} end_date
 @property {Number} order
 @property {EnumPhase} phase
 @property {String} start_date
 @property {EnumStageType} type
 @property {String} year
 */
/**
 @typedef {Object} SportEventCoverage
 @property {Boolean} live
 @property {SportEventCoverageInfo[]} properties
 */
/**
 @typedef {Object} SportEventCoverageInfo
 @property {EnumCoverageInfoType} type
 @property {Boolean} value
 */
/**
 @typedef {Object} SportEventLineups
 @property {Lineups} lineups
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 */
/**
 @typedef {Object} SportEventPlayerStatistics
 @property {String} id
 @property {String} name
 @property {Statistics} statistics
 */
/**
 @typedef {Object} SportEventProbability
 @property {ProbabilityMarketTwoThreeWay[]} markets
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 */
/**
 @typedef {Object} SportEventStatisticsTotals
 @property {Competitors[]} competitors
 */
/**
 @typedef {Object} SportEventStatus
 @property {Number} away_normaltime_score
 @property {Number} away_overtime_score
 @property {Number} away_score
 @property {Clock} clock
 @property {Boolean} decided_by_fed
 @property {Number} decided_overtime
 @property {Number} home_normaltime_score
 @property {Number} home_overtime_score
 @property {Number} home_score
 @property {EnumSportEventMatchStatus} match_status
 @property {Boolean} match_tie
 @property {PeriodScore[]} period_scores
 @property {Boolean} scout_abandoned
 @property {EnumSportEventStatus} status
 @property {String} winner_id
 */
/**
 @typedef {Object} SportEventTimeline
 @property {String} id
 @property {SportEventStatus} sport_event_status
 @property {String} start_time
 @property {GenericEvent[]} timeline
 */
/**
 @typedef {Object} SportEventTimelineDelta
 @property {String} id
 @property {SportEventStatus} sport_event_status
 @property {String} start_time
 @property {GenericEvent[]} timeline
 */
/**
 @typedef {Object} Standing
 @property {StandingGroup[]} groups
 @property {Number} round
 @property {String} tie_break_rule
 @property {Type} type
 */
/**
 @typedef {Object} StandingCompetitor
 @property {Number} change
 @property {StandingCompetitorComment[]} comments
 @property {Competitor} competitor
 @property {String} current_outcome
 @property {Number} draw
 @property {Number} games_behind
 @property {Number} last_ten_loss_record
 @property {Number} last_ten_win_record
 @property {Number} loss
 @property {Number} losses_conference
 @property {Number} losses_division
 @property {Number} played
 @property {Number} points
 @property {Number} points_against
 @property {Number} points_for
 @property {Number} rank
 @property {String} streak
 @property {Number} win
 @property {Number} wins_conference
 @property {Number} wins_division
 */
/**
 @typedef {Object} StandingCompetitorComment
 @property {String} text
 */
/**
 @typedef {Object} StandingGroup
 @property {StandingGroupComment[]} comments
 @property {String} group_name
 @property {String} id
 @property {Boolean} live
 @property {String} name
 @property {String} parent_group_id
 @property {SportEventContextStage} stage
 @property {StandingCompetitor[]} standings
 */
/**
 @typedef {Object} StandingGroupComment
 @property {String} text
 */
/**
 @typedef {Object} StreamEvents
 @property {String} generated_at
 @property {StreamMetadata} metadata
 @property {Payload} payload
 */
/**
 @typedef {Object} StreamHeartbeat
 @property {Number} from
 @property {String} package
 @property {Number} to
 @property {String} type
 */
/**
 @typedef {Object} StreamMetadata
 @property {String} channel
 @property {String} competition_id
 @property {String} event_id
 @property {String} format
 @property {String} season_id
 @property {String} sport_event_id
 @property {String} sport_id
 */
/**
 @typedef {Object} StreamStatisticsJson
 @property {String} generated_at
 @property {StreamMetadata} metadata
 @property {Payload} payload
 */
/**
 @typedef {Object} StreamStatisticsXml
 @property {String} generated_at
 @property {StreamMetadata} metadata
 @property {Payload} payload
 */
/**
 @typedef {Object} Summary
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 @property {Statistics} statistics
 */
/**
 @typedef {Object} SummaryWithTimeline
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 @property {Statistics} statistics
 @property {GenericEvent[]} timeline
 */
/**
 @typedef {Object} Venue
 @property {Number} capacity
 @property {Boolean} changed
 @property {String} city_name
 @property {String} country_code
 @property {String} country_name
 @property {String} id
 @property {String} map_coordinates
 @property {String} name
 @property {Boolean} reduced_capacity
 @property {Number} reduced_capacity_max
 @property {String} timezone
 */
// Responses //
/**
 @typedef {Object} CompetitionInfoResponse
 @property {CompetitionExtended} competition
 @property {String} generated_at
 @property {Info} info
 */
/**
 @typedef {Object} CompetitionSeasonsResponse
 @property {String} generated_at
 @property {Season[]} seasons
 */
/**
 @typedef {Object} CompetitionsResponse
 @property {CompetitionWithCategory[]} competitions
 @property {String} generated_at
 */
/**
 @typedef {Object} CompetitorMappingsResponse
 @property {String} generated_at
 @property {Mapping[]} mappings
 */
/**
 @typedef {Object} CompetitorMergeMappingsResponse
 @property {String} generated_at
 @property {MergeMapping[]} mappings
 */
/**
 @typedef {Object} CompetitorProfileResponse
 @property {Category} category
 @property {Competitor} competitor
 @property {String} generated_at
 @property {Jerseys[]} jerseys
 @property {Manager} manager
 @property {Player[]} players
 @property {Sport} sport
 @property {Venue} venue
 */
/**
 @typedef {Object} CompetitorSummariesResponse
 @property {String} generated_at
 @property {Summary[]} summaries
 */
/**
 @typedef {Object} CompetitorVersusSummariesResponse
 @property {Competitor[]} competitors
 @property {String} generated_at
 @property {Summary[]} last_meetings
 @property {Summary[]} next_meetings
 */
/**
 @typedef {Object} PlayerMappingsResponse
 @property {String} generated_at
 @property {Mapping[]} mappings
 */
/**
 @typedef {Object} PlayerMergeMappingsResponse
 @property {String} generated_at
 @property {MergeMapping[]} mappings
 */
/**
 @typedef {Object} PlayerProfileResponse
 @property {Competitor[]} competitors
 @property {String} generated_at
 @property {Player} player
 @property {PlayerRole[]} roles
 */
/**
 @typedef {Object} ScheduleLiveSummariesResponse
 @property {String} generated_at
 @property {Summary[]} summaries
 */
/**
 @typedef {Object} ScheduleLiveTimelinesResponse
 @property {String} generated_at
 @property {SportEventTimeline[]} sport_event_timelines
 */
/**
 @typedef {Object} ScheduleLiveTimelinesDeltaResponse
 @property {String} generated_at
 @property {SportEventTimelineDeltas[]} sport_event_timeline_deltas
 */
/**
 @typedef {Object} ScheduleSummariesResponse
 @property {String} generated_at
 @property {Summary[]} summaries
 */
/**
 @typedef {Object} SeasonBracketsResponse
 @property {String} generated_at
 @property {SeasonBracketsStage[]} stages
 */
/**
 @typedef {Object} SeasonCompetitorStatisticsResponse
 @property {Competitor} competitor
 @property {String} generated_at
 @property {SeasonExtended} season
 @property {SeasonCompetitorStatistics} statistics
 */
/**
 @typedef {Object} SeasonCompetitorsResponse
 @property {String} generated_at
 @property {SeasonCompetitor[]} season_competitors
 */
/**
 @typedef {Object} SeasonInfoResponse
 @property {String} generated_at
 @property {SeasonExtended} season
 @property {SeasonStage[]} stages
 */
/**
 @typedef {Object} SeasonLineupsResponse
 @property {String} generated_at
 @property {SportEventLineups[]} lineups
 */
/**
 @typedef {Object} SeasonMappingsResponse
 @property {String} generated_at
 @property {Mapping[]} mappings
 */
/**
 @typedef {Object} SeasonPlayersResponse
 @property {String} generated_at
 @property {SeasonPlayer[]} season_players
 */
/**
 @typedef {Object} SeasonProbabilitiesResponse
 @property {String} generated_at
 @property {SportEventProbability[]} sport_event_probabilities
 */
/**
 @typedef {Object} SeasonSimpleTeamMappingsResponse
 @property {String} generated_at
 @property {SimpleTeamMapping[]} simple_team_mappings
 */
/**
 @typedef {Object} SeasonSimpleTournamentMappingsResponse
 @property {String} generated_at
 @property {SimpleTournamentMapping[]} simple_tournament_mappings
 */
/**
 @typedef {Object} SeasonStandingsResponse
 @property {String} generated_at
 @property {Standing[]} standings
 */
/**
 @typedef {Object} SeasonSummariesResponse
 @property {String} generated_at
 @property {Summary[]} summaries
 */
/**
 @typedef {Object} SeasonsResponse
 @property {String} generated_at
 @property {Season[]} seasons
 */
/**
 @typedef {Object} SportEventLineupsResponse
 @property {String} generated_at
 @property {Lineups} lineups
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 */
/**
 @typedef {Object} SportEventMappingsResponse
 @property {String} generated_at
 @property {Mapping[]} mappings
 */
/**
 @typedef {Object} SportEventSummaryResponse
 @property {String} generated_at
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 @property {Statistics} statistics
 */
/**
 @typedef {Object} SportEventTimelineResponse
 @property {String} generated_at
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 @property {Statistics} statistics
 @property {GenericEvent[]} timeline
 */
/**
 @typedef {Object} SportEventsCreatedResponse
 @property {String} generated_at
 @property {SportEventsCreated[]} sport_events_created
 */
/**
 @typedef {Object} SportEventsRemovedResponse
 @property {String} generated_at
 @property {SportEventsRemoved[]} sport_events_removed
 */
/**
 @typedef {Object} SportEventsUpdatedResponse
 @property {String} generated_at
 @property {SportEventsUpdated[]} sport_events_updated
 */

/**
 @typedef {'stream_events'|'stream_heartbeat'} StreamEventsResponse
 */

/**
 @typedef {'stream_statistics_json'|'stream_heartbeat'} StreamStatisticsResponse
 */
