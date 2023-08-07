const axios = require('axios');

class SportradarApiBase {
	constructor({ apiKey, baseUrl }) {
		this.client = axios.create({
			baseURL: baseUrl,
		});

		this.client.interceptors.request.use((config) => {
			if (!config.params) {
				config.params = {};
			}
			config.params.api_key = apiKey;
			return config;
		});
		this.client.interceptors.response.use((res) => res, this.onRequestError.bind(this));
	}

	/**
	 * @param {import('axios').AxiosError} err
	 * */
	onRequestError(err) {
		const params = err.config.params;
		// mask api key
		const apiKey = [...(params.api_key || '')];
		apiKey.splice(2, 5, '*', '*', '*', '*', '*');
		params.api_key = apiKey.join('');

		return Promise.reject(err);
	}
}

module.exports = {
	SportradarApiBase: SportradarApiBase,
};

/**
 * @module Sportradar
 * */

/**
 * @typedef {'en'|'aa'|'aze'|'bg'|'br'|'bs'|'cs'|'da'|'de'|'el'|'es'|'et'|'fi'|'fr'|'heb'|'hr'|'hu'|'id'|'it'|'ja'|'ka'|'ko'|'lt'|'lv'|'me'|'mk'|'nl'|'no'|'pl'|'pt'|'ro'|'ru'|'se'|'sk'|'sl'|'sqi'|'sr'|'srl'|'th'|'tr'|'ukr'|'vi'|'zh'|'zht'} SportradarLocale
 *
 * @typedef {String} UrnDate
 * @example 2022-12-24
 *
 * @typedef {Object} Attendance
 * @property {Number} count
 *
 * @typedef {Object} Ground
 * @property {Boolean} neutral
 */
/**
 @typedef {'U23'|'U22'|'U21'|'U20'|'U19'|'U18'|'U17'|'U16'|'U15'|'U14'|'U13'|'U12'|'U11'|'Y10'|'Juniors'|'Youth'|'Unconfirmed'} AgeGroup
 */

/**
 @typedef {'right'|'left'|'both'} PreferredFoot
 */

/**
 @typedef {'total'|'home'|'away'|'first_half_total'|'first_half_home'|'first_half_away'|'second_half_total'|'second_half_home'|'second_half_away'} StandingType
 */

/**
 @typedef {'live'|'post'|'false'} Standings
 */

/**
 @typedef {'pre'|'post'} LineupsAvailability
 */

/**
 @typedef {'live'|'post'} Scores
 */

/**
 @typedef {'goalkeeper'|'right_back'|'central_defender'|'left_back'|'right_winger'|'central_midfielder'|'left_winger'|'striker'|'fullback'} Position
 */

/**
 @typedef {'home_team_winner'|'away_team_winner'|'draw'} Name
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
 @property {String} form
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {String} other_season_id
 @property {SportEventPlayerStatistics[]} players
 @property {EnumCompetitorQualifier} qualifier
 @property {Statistics} statistics
 @property {Boolean} virtual
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
 @typedef {Object} BallLocation
 @property {Number} order
 @property {EnumCompetitorQualifier} qualifier
 @property {Number} x
 @property {Number} y
 */
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
 @typedef {Object} BaseLineupCompetitor
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
 @typedef {Object} BaseLineupPlayer
 @property {String} country_code
 @property {String} date_of_birth
 @property {EnumGender} gender
 @property {Number} height
 @property {String} id
 @property {Number} jersey_number
 @property {String} name
 @property {String} nationality
 @property {String} nickname
 @property {String} place_of_birth
 @property {Boolean} played
 @property {PreferredFoot} preferred_foot
 @property {Boolean} starter
 @property {EnumPlayerType} type
 @property {Number} weight
 */
/**
 @typedef {Object} BaseManager
 @property {String} country_code
 @property {String} date_of_birth
 @property {EnumGender} gender
 @property {String} id
 @property {String} name
 @property {String} nationality
 @property {String} nickname
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
 @typedef {Object} BaseSeasonCompetitor
 @property {String} abbreviation
 @property {String} id
 @property {String} name
 @property {String} short_name
 @property {Boolean} virtual
 */
/**
 @typedef {Object} BaseSeasonStageGroup
 @property {Competitor[]} competitors
 @property {String} group_name
 @property {String} id
 @property {Number} max_rounds
 @property {String} name
 @property {String} parent_group_id
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
 @typedef {Object} BaseStandingCompetitor
 @property {Number} change
 @property {StandingCompetitorComment[]} comments
 @property {Competitor} competitor
 @property {String} current_outcome
 @property {Number} draw
 @property {Number} goals_against
 @property {Number} goals_diff
 @property {Number} goals_for
 @property {Number} loss
 @property {Number} played
 @property {Number} points
 @property {Number} rank
 @property {Number} win
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
 @property {String} stoppage_time_announced
 @property {String} stoppage_time_played
 */
/**
 @typedef {Object} Commentary
 @property {String} text
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
 @property {String} form
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {String} other_season_id
 @property {EnumCompetitorQualifier} qualifier
 @property {Boolean} virtual
 */
/**
 @typedef {Object} CompetitorBasics
 @property {String} abbreviation
 @property {String} id
 @property {String} name
 */
/**
 @typedef {Object} CompetitorMissingPlayer
 @property {String} abbreviation
 @property {String} id
 @property {String} name
 @property {MissingPlayer[]} players
 */
/**
 @typedef {Object} CompetitorOverUnder
 @property {String} age_group
 @property {OverUnderStatisticsList[]} competitor_over_under_statistics
 @property {String} id
 @property {String} name
 */
/**
 @typedef {Object} Coverage
 @property {CoverageCompetitionProperties} competition_properties
 @property {CoverageGroupProperties} group_properties
 @property {CoverageSportEventProperties} sport_event_properties
 @property {StandingType} type
 */
/**
 @typedef {Object} CoverageCompetitionProperties
 @property {Boolean} brackets
 @property {Boolean} missing_players
 @property {Boolean} player_transfer_history
 @property {Boolean} schedules
 @property {Boolean} season_player_statistics
 @property {Boolean} season_probabilities
 @property {Boolean} season_stats_leaders
 @property {Boolean} season_team_statistics
 @property {Standings} standings
 @property {Boolean} team_squads
 */
/**
 @typedef {Object} CoverageGroupProperties
 @property {Boolean} brackets
 @property {Boolean} cup
 @property {Boolean} group_stage
 @property {Boolean} league
 @property {Boolean} missing_players
 @property {Boolean} qualification
 @property {Boolean} results
 @property {Boolean} schedules
 @property {Standings} standings
 */
/**
 @typedef {Object} CoverageSportEventProperties
 @property {Boolean} ballspotting
 @property {Boolean} basic_play_by_play
 @property {Boolean} basic_player_stats
 @property {Boolean} basic_team_stats
 @property {Boolean} commentary
 @property {Boolean} deeper_play_by_play
 @property {Boolean} deeper_player_stats
 @property {Boolean} deeper_team_stats
 @property {Boolean} extended_player_stats
 @property {Boolean} extended_team_stats
 @property {Boolean} fun_facts
 @property {Boolean} game_clock
 @property {Boolean} goal_scorers
 @property {Boolean} lineups
 @property {LineupsAvailability} lineups_availability
 @property {Boolean} probabilities
 @property {Scores} scores
 */
/**
 @typedef {'pre_match'|'half_time'|'post_match'|'player_on_bench'|'first_half'|'second_half'|'during_penalty_shootout'} EnumCardDescription
 */
/**
 @typedef {'delayed'|'closed'|'completed'|'in_progress'|'scheduled'|'suspended'|'cancelled'|'rescheduled'|'postponed'} EnumCompetitionStatus
 */
/**
 @typedef {'home'|'away'} EnumCompetitorQualifier
 */
/**
 @typedef {'penalty'|'own_goal'|'header'|'shot'|'free_kick'} EnumEventMethod
 */
/**
 @typedef {'scorer'|'assist'|'substituted_in'|'substituted_out'} EnumEventPlayerType
 */
/**
 @typedef {'match_started'|'match_ended'|'period_start'|'period_score'|'score_change'|'yellow_card'|'yellow_red_card'|'red_card'|'substitution'|'injury_time_shown'|'free_kick'|'goal_kick'|'throw_in'|'offside'|'corner_kick'|'shot_on_target'|'shot_off_target'|'save'|'injury'|'penalty_kick'|'player_back_from_injury'|'penalty_missed'|'penalty_shootout'|'decision_to_var'|'decision_to_var_over'|'possible_decision_to_var'|'canceled_decision_to_var'|'break_start'|'injury_return'|'video_assistant_referee'|'video_assistant_referee_over'|'penalty_awarded'|'shot_saved'|'possible_goal'} EnumEventType
 */
/**
 @typedef {'3-4-1-2'|'3-4-3'|'3-5-2'|'4-1-2-3'|'4-1-3-2'|'4-1-4-1'|'4-2-2-2'|'4-2-3-1'|'4-3-1-2'|'4-3-2-1'|'4-3-3'|'4-4-1-1'|'4-4-2'|'4-5-1'|'5-2-3'|'5-3-2'|'5-4-1'|'3-4-2-1'|'3-1-4-2'|'3-3-1-3'|'3-3-3-1'|'3-5-1-1'|'4-1-2-1-2'|'4-2-1-2-1'|'4-2-1-3'|'4-2-4'|'5-2-1-2'|'5-2-2-1'} EnumFormation
 */
/**
 @typedef {'female'|'male'} EnumGender
 */
/**
 @typedef {'goals'|'assists'|'red_cards'|'yellow_red_cards'|'yellow_cards'|'own_goals'} EnumLeaderListDatapointType
 */
/**
 @typedef {'points'|'goals'|'assists'|'red_cards'|'yellow_red_cards'|'yellow_cards'|'own_goals'|'shots_on_target'|'shots_off_target'|'goals_by_head'|'goals_by_penalty'|'minutes_played'} EnumLeaderListType
 */
/**
 @typedef {'safe'|'dangerous'|'attack'} EnumMatchSituation
 */
/**
 @typedef {'on_loan'|'injured'|'suspended'|'other'} EnumMissingPlayerReason
 */
/**
 @typedef {'missing'|'doubtful'|'other'} EnumMissingPlayerStatus
 */
/**
 @typedef {'missed'|'scored'|'not_taken_yet'} EnumPenaltyShootoutStatus
 */
/**
 @typedef {'regular_period'|'overtime'|'penalties'|'pause'|'awaiting_extra'|'extra_time_halftime'|'interrupted'} EnumPeriodType
 */
/**
 @typedef {'stage_1_playoff'|'1st_part_of_season_1st_leg'|'2nd_part_of_season_2nd_leg'|'3rd_round'|'champions_round'|'conference'|'division'|'final_eight'|'final_four'|'final_phase'|'final_round'|'final_stage'|'grand_final'|'grand_finals'|'group_phase_1'|'group_phase_2'|'knockout_stage'|'main_round_1'|'main_round_2'|'none'|'placement_matches'|'placement_matches_13_to_16'|'placement_matches_5_to_8'|'placement_matches_9_to_12'|'placement_matches_9_to_16'|'playoffs'|'playout'|'pre-season'|'preliminary_round'|'president_cup'|'promotion_playoffs'|'promotion_round'|'qualification'|'qualification_playoffs'|'qualification_to_allsvenskan'|'regular season'|'relegation_playoffs'|'relegation_promotion'|'relegation_promotion_round'|'relegation_round'|'stage_1 no_stats'|'stage_2 no_stats'|'stage_1'|'stage_2'|'stage_3'|'uefa_europa_league_playoffs'|'stage_2_placement_matches'} EnumPhase
 */
/**
 @typedef {'player'|'manager'|'on_loan'|'unemployed'|'other'} EnumPlayerRoleType
 */
/**
 @typedef {'goalkeeper'|'defender'|'midfielder'|'forward'} EnumPlayerType
 */
/**
 @typedef {'first_assistant_referee'|'second_assistant_referee'|'fourth_official'|'video_assistant_referee'|'first_additional_assistant'|'second_additional_assistant'|'main_referee'} EnumRefereeType
 */
/**
 @typedef {'miss'|'post'|'bar'} EnumShotOutcome
 */
/**
 @typedef {'not_started'|'started'|'1st_half'|'halftime'|'2nd_half'|'aet'|'ap'|'ended'|'postponed'|'cancelled'|'awaiting_extra_time'|'awaiting_penalties'|'abandoned'|'1st_extra'|'2nd_extra'|'extra_time_halftime'|'penalties'|'interrupted'|'overtime'|'start_delayed'} EnumSportEventMatchStatus
 */
/**
 @typedef {'not_started'|'started'|'postponed'|'suspended'|'cancelled'|'delayed'|'live'|'interrupted'|'ended'|'closed'} EnumSportEventStatus
 */
/**
 @typedef {'cup'|'league'} EnumStageType
 */
/**
 @typedef {'goal'|'penalty'|'red_card'|'call_stands'|'call_overturned'|'no_goal'|'no_penalty'|'no_red_card'} EnumVarDescription
 */
/**
 @typedef {'good'|'medium'|'bad'|'indoor'|'extreme'} EnumWeatherOverallConditions
 */
/**
 @typedef {'good'|'medium'|'bad'} EnumWeatherPitchConditions
 */
/**
 @typedef {Object} EventPlayer
 @property {String} id
 @property {String} name
 @property {EnumEventPlayerType} type
 */
/**
 @typedef {Object} SportEventFunFact
 @property {String} statement
 */
/**
 @typedef {Object} Formation
 @property {EnumFormation} type
 */
/**
 @typedef {Object} GenericEvent
 @property {Number} away_score
 @property {String} break_name
 @property {EnumCardDescription} card_description
 @property {Commentary[]} commentaries
 @property {EnumCompetitorQualifier} competitor
 @property {EnumVarDescription} description
 @property {Number} home_score
 @property {Number} id
 @property {Number} injury_time_announced
 @property {String} match_clock
 @property {Number} match_time
 @property {EnumEventMethod} method
 @property {EnumShotOutcome} outcome
 @property {Number} period
 @property {String} period_name
 @property {EnumPeriodType} period_type
 @property {EventPlayer[]} players
 @property {Number} shootout_away_score
 @property {Number} shootout_home_score
 @property {EnumPenaltyShootoutStatus} status
 @property {Number} stoppage_time
 @property {String} stoppage_time_clock
 @property {String} time
 @property {EnumEventType} type
 @property {Number} x
 @property {Number} y
 */
/**
 @typedef {Object} Info
 @property {EnumCompetitionStatus} competition_status
 @property {Boolean} venue_reduced_capacity
 @property {Number} venue_reduced_capacity_max
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
 @typedef {Object} Leader
 @property {LeaderPlayer[]} players
 @property {Number} rank
 */
/**
 @typedef {Object} LeaderPlayer
 @property {LeaderPlayerCompetitor[]} competitors
 @property {String} id
 @property {Boolean} multiple_competitors
 @property {String} name
 */
/**
 @typedef {Object} LeaderPlayerCompetitor
 @property {String} abbreviation
 @property {LeaderPlayerCompetitorDatapoint[]} datapoints
 @property {String} id
 @property {String} name
 */
/**
 @typedef {Object} LeaderPlayerCompetitorDatapoint
 @property {EnumLeaderListDatapointType} type
 @property {Number} value
 */
/**
 @typedef {Object} Leaders
 @property {Leader[]} leaders
 @property {EnumLeaderListType} type
 */
/**
 @typedef {Object} LineupCompetitor
 @property {String} abbreviation
 @property {AgeGroup} age_group
 @property {String} country
 @property {String} country_code
 @property {Formation} formation
 @property {String} gender
 @property {String} id
 @property {Jersey} jersey
 @property {Manager} manager
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
 @property {Number} order
 @property {String} place_of_birth
 @property {Boolean} played
 @property {Position} position
 @property {PreferredFoot} preferred_foot
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
 @property {String} place_of_birth
 @property {PreferredFoot} preferred_foot
 */
/**
 @typedef {Object} Mapping
 @property {String} external_id
 @property {String} id
 @property {String} merged_id
 @property {String} retained_id
 */
/**
 @typedef {Object} MatchSituation
 @property {EnumCompetitorQualifier} qualifier
 @property {EnumMatchSituation} status
 @property {String} updated_at
 */
/**
 @typedef {Object} MergeMapping
 @property {String} merged_id
 @property {String} name
 @property {String} retained_id
 */
/**
 @typedef {Object} MissingPlayer
 @property {String} id
 @property {String} name
 @property {EnumMissingPlayerReason} reason
 @property {String} start_date
 @property {EnumMissingPlayerStatus} status
 */
/**
 @typedef {Object} OverUnderStatistic
 @property {Number} goals
 @property {Number} over
 @property {Number} under
 */
/**
 @typedef {Object} OverUnderStatisticsList
 @property {OverUnderStatistic[]} statistics
 @property {String} type
 */
/**
 @typedef {Object} PeriodScore
 @property {Number} away_score
 @property {Number} home_score
 @property {Number} number
 @property {EnumPeriodType} type
 */
/**
 @typedef {Object} SportradarCompetitorPlayer
 @property {String} country_code
 @property {String} date_of_birth
 @property {EnumGender} gender
 @property {Number} height
 @property {String} id
 @property {Number} jersey_number
 @property {String} name
 @property {String} nationality
 @property {String} nickname
 @property {String} place_of_birth
 @property {PreferredFoot} preferred_foot
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
 @typedef {Object} Referee
 @property {String} country_code
 @property {String} id
 @property {String} name
 @property {String} nationality
 @property {EnumRefereeType} type
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
 @property {StandingType} type
 */
/**
 @typedef {Object} SeasonBracketsCupRoundSportEvent
 @property {String} id
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
 @typedef {Object} SeasonCompetitorPlayers
 @property {String} abbreviation
 @property {String} id
 @property {String} name
 @property {SportradarCompetitorPlayer[]} players
 @property {String} short_name
 @property {Boolean} virtual
 */
/**
 @typedef {Object} SeasonCompetitorStatistics
 @property {String} abbreviation
 @property {String} country
 @property {String} country_code
 @property {String} gender
 @property {String} id
 @property {String} name
 @property {SeasonPlayerStatistics[]} players
 @property {Statistics} statistics
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
 @property {Boolean} starter
 @property {Statistics} statistics
 */
/**
 @typedef {Object} SeasonSchedules
 @property {SportEventBasic} sport_event
 @property {SimpleSportEventStatus} sport_event_status
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
 @property {Coverage} coverage
 @property {String} group_name
 @property {String} id
 @property {Number} max_rounds
 @property {String} name
 @property {String} parent_group_id
 */
/**
 @typedef {Object} SimpleSportEventStatus
 @property {Number} aggregate_away_score
 @property {Number} aggregate_home_score
 @property {String} aggregate_winner_id
 @property {Number} away_normaltime_score
 @property {Number} away_overtime_score
 @property {Number} away_score
 @property {BallLocation[]} ball_locations
 @property {Clock} clock
 @property {Boolean} decided_by_fed
 @property {Number} home_normaltime_score
 @property {Number} home_overtime_score
 @property {Number} home_score
 @property {MatchSituation} match_situation
 @property {EnumSportEventMatchStatus} match_status
 @property {Boolean} match_tie
 @property {PeriodScore[]} period_scores
 @property {Boolean} scout_abandoned
 @property {EnumSportEventStatus} status
 @property {String} winner_id
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
 @typedef {Object} SportEventBasic
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
 @typedef {Object} SportEventChannels
 @property {String} country
 @property {String} country_code
 @property {String} name
 @property {String} url
 */
/**
 @typedef {Object} SportEventCompetitorOfficialStatistics
 @property {SportEventPlayerOfficialStatistics[]} players
 @property {Statistics} statistics
 */
/**
 @typedef {Object} SportEventCompetitorStatistics
 @property {SportEventPlayerStatistics[]} players
 @property {Statistics} statistics
 */
/**
 @typedef {Object} SportEventConditions
 @property {Attendance} attendance
 @property {Comment} comment
 @property {Ground} ground
 @property {Referee[]} referees
 @property {Weather} weather
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
 @property {String} other_sport_event_id
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
 @typedef {Coverage} SportEventCoverage
 */
/**
 @typedef {Object} SportEventLineups
 @property {Lineups} lineups
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 */
/**
 @typedef {Object} SportEventOfficialStatistics
 @property {Competitors[]} competitors
 */
/**
 @typedef {Object} SportEventPlayerOfficialStatistics
 @property {String} id
 @property {String} name
 @property {Boolean} starter
 @property {Statistics} statistics
 */
/**
 @typedef {Object} SportEventPlayerStatistics
 @property {String} id
 @property {String} name
 @property {Boolean} starter
 @property {Statistics} statistics
 */
/**
 @typedef {Object} SportEventProbability
 @property {ProbabilityMarketTwoThreeWay[]} markets
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 */
/**
 @typedef {Object} SportEventStatistics
 @property {SportEventStatisticsPeriod[]} periods
 @property {SportEventStatisticsTotals} totals
 */
/**
 @typedef {Object} SportEventStatisticsPeriod
 @property {Competitors[]} competitors
 @property {Number} number
 */
/**
 @typedef {Object} SportEventStatisticsTotals
 @property {Competitors[]} competitors
 */
/**
 @typedef {Object} SportEventStatus
 @property {Number} aggregate_away_score
 @property {Number} aggregate_home_score
 @property {String} aggregate_winner_id
 @property {Number} away_normaltime_score
 @property {Number} away_overtime_score
 @property {Number} away_score
 @property {BallLocation[]} ball_locations
 @property {Clock} clock
 @property {Boolean} decided_by_fed
 @property {Number} home_normaltime_score
 @property {Number} home_overtime_score
 @property {Number} home_score
 @property {MatchSituation} match_situation
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
 @property {Number} points_draw
 @property {Number} points_loss
 @property {Number} points_win
 @property {Number} round
 @property {String} tie_break_rule
 @property {StandingType} type
 */
/**
 @typedef {Object} StandingCompetitor
 @property {Number} change
 @property {StandingCompetitorComment[]} comments
 @property {Competitor} competitor
 @property {String} current_outcome
 @property {Number} draw
 @property {Number} goals_against
 @property {Number} goals_diff
 @property {Number} goals_for
 @property {Number} loss
 @property {Number} played
 @property {Number} points
 @property {Number} points_per_game
 @property {Number} rank
 @property {Number} win
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
 */
/**
 @typedef {Object} StreamStatisticsXml
 @property {String} generated_at
 @property {StreamMetadata} metadata
 */
/**
 @typedef {Object} Summary
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 @property {SportEventStatistics} statistics
 */
/**
 @typedef {Object} Transfer
 @property {Competitor[]} competitors
 @property {String} from_competitor
 @property {SportradarCompetitorPlayer} player
 @property {String} role_type
 @property {String} to_competitor
 @property {String} transfer_date
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
 */
/**
 @typedef {Object} Weather
 @property {EnumWeatherOverallConditions} overall_conditions
 @property {EnumWeatherPitchConditions} pitch_conditions
 */
/**
 * @typedef {Object} Lineups
 * @property {LineupCompetitor[]} competitors
 * */
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
 @property {Jersey[]} jerseys
 @property {Manager} manager
 @property {SportradarCompetitorPlayer[]} players
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
 @property {SportradarCompetitorPlayer} player
 @property {PlayerRole[]} roles
 */
/**
 @typedef {Object} PlayerSummariesResponse
 @property {String} generated_at
 @property {Summary[]} summaries
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
 @typedef {Object} SeasonCompetitorPlayersResponse
 @property {String} generated_at
 @property {SeasonCompetitorPlayers[]} season_competitor_players
 */
/**
 @typedef {Object} SeasonCompetitorStatisticsResponse
 @property {SeasonCompetitorStatistics} competitor
 @property {String} generated_at
 @property {SeasonExtended} season
 */
/**
 @typedef {Object} SeasonCompetitorsResponse
 @property {String} generated_at
 @property {SeasonCompetitor[]} season_competitors
 */
/**
 @typedef {Object} SeasonInfoResponse
 @property {Coverage} coverage
 @property {String} generated_at
 @property {SeasonExtended} season
 @property {SeasonStage[]} stages
 */
/**
 @typedef {Object} SeasonLeadersResponse
 @property {String} generated_at
 @property {Leaders[]} lists
 */
/**
 @typedef {Object} SeasonLineupsResponse
 @property {String} generated_at
 @property {SportEventLineups[]} lineups
 */
/**
 @typedef {Object} SeasonMissingPlayersResponse
 @property {CompetitorMissingPlayer[]} competitors
 @property {String} generated_at
 */
/**
 @typedef {Object} SeasonOverUnderStatisticsResponse
 @property {CompetitorOverUnder[]} competitors
 @property {String} generated_at
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
 @typedef {Object} SeasonSchedulesResponse
 @property {String} generated_at
 @property {SeasonSchedules[]} schedules
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
 @typedef {Object} SeasonTransfersResponse
 @property {String} generated_at
 @property {Transfer[]} transfers
 */
/**
 @typedef {Object} SeasonsResponse
 @property {String} generated_at
 @property {Season[]} seasons
 */
/**
 @typedef {Object} SportEventFunFactsResponse
 @property {SportEventFunFact[]} facts
 @property {String} generated_at
 */
/**
 @typedef {Object} SportEventLeagueTimelineResponse
 @property {String} generated_at
 @property {GenericEvent[]} league_timeline
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 @property {SportEventOfficialStatistics} statistics
 */
/**
 @typedef {Object} SportEventLineupsResponse
 @property {String} generated_at
 @property {Lineups} lineups
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 */
/**
 @typedef {Object} SportEventSummaryResponse
 @property {String} generated_at
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 @property {SportEventStatistics} statistics
 */
/**
 @typedef {Object} SportEventTimelineResponse
 @property {String} generated_at
 @property {SportEvent} sport_event
 @property {SportEventStatus} sport_event_status
 @property {SportEventStatistics} statistics
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
