## Curation FE task

This project is a react-based project setup from scratch using webpack(v4).

Project structure has a main `src/` folder containing the business logic of the application.
#### Running The Code
* Clone project into any directory
* Make sure you have [nodejs](https://nodejs.org) installed in your local machine
* Run `npm install` in project root directory to install dependencies
* After installing dependencies, run `npm run dev` in project root directory to start up the webpack-dev-server, a mini web server by webpack to serve applications
* For tests, a basic unit test which checks if components are rendered properly is implemented with jest/enzyme, run `npm test`

#### Deployment
In case of deployment, the package.json file's `prestart` hook bundles the application into a `build/` folder
and ready to be statically served by the express server.

#### Assumptions/Decisions/Tooling
* I used `reactstrap` in the frontend to add some bootstrap styling
* Babel to transpile es6+ codes
* Webpack for bundling
* eslint for code linting
