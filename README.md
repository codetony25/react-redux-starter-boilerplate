# ReactJS-Starter-Boilerplate

## Features

* [React](https://github.com/facebook/react)
* [React-router](https://github.com/rackt/react-router)
* [Babel](http://babeljs.io) for ES6 and ES7 transpiling
* [Webpack](https://github.com/webpack/webpack)
* [Koa Webpack Dev Middleware](https://github.com/yiminghe/koa-webpack-dev-middleware)
* [Koa Webpack Hot Middleware](https://github.com/dayAlone/koa-webpack-hot-middleware)
* [ESLint](http://eslint.org) uses airbnb linting preferences
* [StyleLint](https://github.com/stylelint/stylelint) includes style linter for our css/stylus code
* [Redux](https://github.com/rackt/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
* [React Router Redux](https://github.com/reactjs/react-router-redux) Redux/React Router bindings.

## To Do List
ReactJS, Redux, Webpack, PostCSS, Stylus, ESLint, StyleLint, ES6, Modern Front End Starter Boilerplate

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
- [x] Redux
- [x] Add Redux Example Counter
- [ ] Make it all Universal(Isomorphic) JavaScript!
- [ ] Set up Redux Example Structure and Design Pattern for large scalability
- [ ] Develop a design pattern and file structure on server side with Koa and Node.js
- [ ] Add Flow, a new static type checker for JavaScript
- [ ] Decide on Database to use (MongoDB, PostgreSQL, RethinkDB, GraphQL)
- [ ] Testing (Mocha -Recommended by Redux, Enzyme - By Airbnb)

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
There are more commands to which I have included in the package.json file which include the following:
- `npm start` starts up localhost with browserSync and hot reloading
- `npm run compile` compiles project and puts them in the /dist folder.
- `npm run deploy` removes the dist folder and compiles afterwards.
- `npm run clean` removes the dist folder and clears npm cache.

## Styles
  * Stylus with React CSS modules
  * PostCSS Plugins included: RucksackCSS, Sorting.
  * CSS extraction and Uglify on Production build.
  * Supports Component Styling ie: `styleName="awesome"` using CSSModules.

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
