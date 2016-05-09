# ReactJS-Starter-Boilerplate

## Features

* [React](https://github.com/facebook/react) (`^15.0.1`)
  * Using the latest React Version.
* [react-router](https://github.com/rackt/react-router) (`^2.2.4`)
* [Webpack](https://github.com/webpack/webpack)
  * Stylus with React CSS modules
  * PostCSS Plugins included: RucksackCSS, Sorting.
  * BrowserSync included.
  * CSS extraction and Uglify on Production build.
  * Supports Component Styling ie: `styleName="awesome"` using CSSModules.
* [ESLint](http://eslint.org)
  * Extends Standard and Standard-React. More information at: https://github.com/feross/eslint-config-standard-react
* [StyleLint](https://github.com/stylelint/stylelint)
  * Using stylelint-config-standard as our starting point linter. Feel free to add additional rules!
  * More information about the current extension used here: https://github.com/stylelint/stylelint-config-standard

## To Do List
ReactJS, Webpack, PostCSS, Stylus, ESLint, StyleLint, ES6, Modern Front End Starter Boilerplate

Things planned for this boilerplate:
- [x] Add ES6 Support with .babelrc
- [x] Webpack Configuartions in ES6
- [x] ReactJS
- [x] ESLint
- [x] StyleLint for linting css/stylus
- [x] PostCSS
- [x] Add Plugins for PostCSS (CSSNext which includes autoprefixer, RucksackCSS, Sorting, Mixins, and Short)
- [x] Added support for CSS Modules
- [x] React Router
- [x] Mobx
- [ ] Mobx DevTools
- [ ] Set up Mobx Example Structure and Design Pattern for large scalability
- [ ] Develop a design pattern and file structure on server side with Koa and Node.js
- [ ] Add Flow, a new static type checker for JavaScript
- [ ] Decide on Database to use (MongoDB, PostgreSQL, RethinkDB, GraphQL)
- [ ] Testing (Mocha -Recommended by Redux, Enzyme - By Airbnb)

MobX (https://github.com/mobxjs/mobx) also formerly known as Mobservable is gaining a lot of attention and can be scaled for large applications. It makes it helps with state management and isn't opinionated on the type of design pattern we use.

Suggestions are welcome!

## Installation

Download this by entering this command in your terminal:
```
$ git clone https://github.com/tonytainguyen/Modern-ReactJS-Starter-Boilerplate.git
```
## Usage

Navigate in the project and run the good ol' npm install and start to boot up the localhost. Feel free to change the port anytime in /webpack/config.js
```
npm install
npm start
```

Browser Sync will start up and open your browser to the current hosted port.

There are more commands to which I have included in the package.json file which include the following:
- `npm start` starts up localhost with browserSync and hot reloading
- `npm run compile` compiles project and puts them in the /dist folder.
- `npm run deploy` removes the dist folder and compiles afterwards.
- `npm run clean` removes the dist folder and clears npm cache.
- `npm run lint` lints all .js, .jsx, and .styl files and displayed in console.
- `npm run lint:jsx` lints only jsx files located in the /src directory.
- `npm run lint:js` lints only js files located in the /src directory.
- `npm run lint:node` lints everything that except what is in /src directory
- `npm run lint:css` lints all stylesheets located in /src directory.

## Contributing

1. Fork this!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request!
6. It will be reviewed and appreciated! :smile:

## History

Just put this all together for myself and what I believe are best practices and saves me time and maybe you can benefit off it too! I love using tools that would increase my productivity. I had also structured my webpack to what I believe is pretty organized and not repeating a lot of code like those other boilerplates. My goal was to make webpack easy to understand as much as possible and hopefully I have done that. I will be constantly updating this project! All ideas/suggestions/pull requests are welcome!

## License

Copyright (c) 2015-2016 Tony Tai Nguyen

MIT (http://opensource.org/licenses/mit-license.php)
