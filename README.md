Simple wrapper over Sportradar API. Request/Response typed via JSDoc.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Overview

### Supported APIs

- Soccer v4
- Volleyball v2
- Basketball v2
- Ice hockey global v2

## Usage
Detailed methods in [src folder](https://github.com/tigermax139/sportradar-sdk/blob/main/src/api/soccer-v4/sportradar.api.js)

```js
const api = new SportradarSoccerV4Api({
	apiKey: process.env[`SPORTRADAR_SOCCER_GAME_API_KEY`],
	locale: 'en',
});

const competition = await api.getCompetitionInfo({
    urn_competition: 'sr:competition:7', // UEFA Champions League
});
const seasons = await api.getCompetitionSeasons({
	urn_competition: 'sr:season:106479', // 23/24 years
});
const eventInfo = await api.getSportEventSummary({
	urn_sport_event: '',
});
```

## TODOs

- Add typescript support
- Cover other sports (on request)