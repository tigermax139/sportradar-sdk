Simple wrapper over Sportradar API. Request/Response typed via JSDoc.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Overview

### Supported APIs

- Soccer v4
- Volleyball v2
- Basketball v2

## Usage
Detailed methods in [src folder](https://github.com/tigermax139/sportradar-sdk/blob/main/src/api/soccer-v4/sportradar.api.js)

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