# Gamelounge

This project was created as a code test for the company Game Lounge.
You can read the task description in [task_description.md](https://github.com/phek/game-lounge-task/blob/master/task_description.md).

The application is created with only pure AngularJS, HTML and CSS3. No additional dependencies were added.

Instead of using Bootstrap for icons such as the hamburger and arrows I created them myself with pure CSS3. I generally don't like using Bootstrap since I feel like it limiting my design process, I feel comfortable enough with normal CSS to create the same solutions in the same amount of time.

Instead of using SASS/LESS for templating I used CSS3 variables. See (src/assets/css/variables/theme.css).

All animations are created by using CSS3 transitions and Angular class data-binding.

**If SASS/LESS is a requirement I can create another version using this too.**

View the website by installing [NPM](https://nodejs.org/en/) and then running the following commands in a command-prompt of the project root:  
**npm install** *- To install dependencies such as Angular*  
**npm start** *- To start the dev server, accessed through (http://localhost:4200)*

## Angular CLI

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.
