Product App
=======================

Introduction
------------
- This application was on build based on React.
- SASS is also have been used
- It's frontend runs on top of [Scandiweb backend](https://github.com/yakob-abada/scandiweb).
- Github pipeline for testsing and deploying to AWS S3.

Installation
------------
- Copy .env_eample to .env file `cp .env_exmple .env` and update it with the backend domain url.
- Run `npm install`.
- Run `npm start`.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Tests
-----
- Codeceptjs: `npm run codeceptjs`.
- jest: `npm run test`.

What to improve
---------------
- Introduce structured logs for better debugging.
- Use functional component instead of class components.
- Increase jest code testing coverage.
- Add linting.
