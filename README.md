<!-- Do NOT read this file directly. It is created in mark down and should be viewed in a previewer. right-click on the file and choose 'view in preview' -->

# Bootstrap5 builder
## Template-Site used to manage a custom `Bootstrap5` project
### *** This project is considered incomplete until this warning is removed ***
<br /><hr style="color: grey; width: 50%; text-size: 1rem"/><br />

# Summary

# Setup

## 1) Clone the repository
```shell
> git clone https://github.com/mcdonaldd1/bootstrap5_builder.git
```
## 2) Install the dependencies
```shell
> cd bootstrap5_builder
> npm i
```
## 3) Run setup scripts
```shell
# Compile Sass
> npm run compile:sass

# Bundle and Minimize Javascript
> npm run pack:js

# Start Server
> npm run server:basic
```

## 4) Open html pages in browser
#### * theses links only work if the setup scripts were run, and the server has started.

[cheatsheet: http://localhost:9000/cheatsheet.html](http://localhost:9000/cheatsheet.html)

[npm-starter: http://localhost:9000/npm-starter.html](http://localhost:9000/npm-starter.html)

[starter: http://localhost:9000/starter.html](http://localhost:9000/starter.html)

[theming-kit: http://localhost:9000/theming.html](http://localhost:9000/theming.html)

* Hit F12 or Ctrl-Shift-I (in Chrome or FireFox) to open up dev-tools

<br /><hr color="black" width="75%"/><br />


# Basic Usage

## Fonts and Icons
### `Google fonts`
* google-fonts-readme.md

### `Bootstrap Icons`
* google-fonts-readme.md

## Theming
### `Theming page`
*

### `Bootswatch`
*

### `load-style-sheet selector tool`
*

## Practice and Learn HTML, CSS and Javascript
### Edit `HTML`.
### Edit `sass/scss` and `transpile` to `css`.
### Add a `_module.scss` to the sass workflow. Lookup `7-1 Sass architecture`.
### Edit `Javascript` and `bundle` / `minimize` it.
### `Babel` Javascript down to ES5 standards.

## Practice and Learn Bootstrap5
### Download and Explore `Examples`. Use the `example-index.html` page to browse them.


## Build a site
### `CDNs`
### `local`
### `Custom-Normal`
### `Custom-Light`
### `Custom-Heavy`


## Add Animation
### Add `JQuery` library
### Add `animation.css` library
### Add `d3.js` library

## Servers
### Webpack-dev-server (9000)
### Node.js server (8523)
### LAMP server (80)
### Express server (tbd)

<br /><hr color="black" width="75%"/><br />


# Ideas to Try

# Folders and Files

## Root Folders

| Folder          | subfolders          | Description                                                               |
| --------------- | ------------------- |-------------------------------------------------------------------------- |
| `builder/`      | `all other folders` | The root folder that holds project and build related files.               |
|                 |                     |                                                                           |
| `dist/`         |                     | Contains all site related files.                                          |
|                 | `css/`              | #                                                                         |
|                 | `img/`              | #                                                                         |
|                 | `fonts/`            | #                                                                         |
|                 | `js/`               | #                                                                         |
| `node_modules/` |                     | Contains all installed dependencies of the project.                       |
|                 | `bootstrap/`        | #                                                                         |
|                 | `bootstrap-icons/`  | #                                                                         |
| `src/`          |                     | Contain all custom source files.                                          |
|                 | `bs5_core/`         | #                                                                         |
|                 | `bs5_examples/`     | #                                                                         |
|                 | `bs5_icons/`        | #                                                                         |
|                 | `bs5_swatch/`       | #                                                                         |
|                 | `crud/`             | #                                                                         |
|                 | `fonts_google/`     | Will contain all `Google fonts`, after they are `downloaded`.             |
|                 | `html/`             | #                                                                         |
|                 | `icons_feather/`    | #                                                                         |
|                 | `img/`              | Contains backups of all starter files. Start over witout reinstalling     |
|                 | `js/`               | #                                                                         |
|                 | `sass/`             | #                                                                         |
|                 | `scss/`             | Will contain all `Bootswatch` files , after they are `downloaded`.        |


## `builder/` files
| File                | Description                                                                                 |
| -----------------   | ------------------------------------------------------------------------------------------- |
| .browserslistrc     | `Postcss` uses this to target browsers it will or won't support.                            |
|                     | `autoprefixer` will only prefix the code needed to support these browsers.                  |
| .editorconfig       | Used to overide existing settings on 'editorconfig' aware editors and ide's.                |
|                     | in VSCode install the extension: `EditorConfig for VSCode`                                  |
| .gitignore          | list of folders and files to be ignored (not watched) by `git`.                             |
| .stylelintignore    | list of folders and files to be ignored (not watched) by `stylelint`                        |
| .stylelintrc        | `stylelint` uses this to load specific linters.                                             |
| babel.config.json   | `babel` uses this  to load specific presets                                                 |
| LICENSE.md          | standard icense                                                                             |
| package-lock.json   | system file you should ignore                                                               |
| package.json        | main configuration file for npm, and your project                                           |
| postcss.config.js   |                                                                                             |
| purgecss.config.js  |                                                                                             |
| README.md           | this file, the one you are reading                                                          |
| server_express.js   |                                                                                             |
| server_lamp.sh      |                                                                                             |
| server_node.js      |                                                                                             |
| webpack.config.js   | configuration file for `webpack`                                                            |


## `dist/` folders and files
| File                              | Description                                     |
| ---------------------             | ------------------------------------            |
| `dist/`                           |                                                 |
| _examples-index.html              | XXX                                             |
| _load-style-sheet.htm             | example of css-stylesheet-loader                |
| starter-bootstrap-icons.html      | XXX                                             |
| starter-cdn.html                  | XXX                                             |
| starter-cheatsheet.html           | XXX                                             |
| starter-my.html                   | XXX                                             |
| starter-npm.html                  | XXX                                             |
| starter-theming.html              | XXX                                             |
| `dist/css`                        |
| bootstrap-icons.css               | Bootstrap5 icons                                |
| bootstrap.min.css                 | Bootstrap5 minified                             |
| cheatsheet.css                    | examples/cheatsheet                             |
| darkly-swatch.css                 | bootswatch example                              |
| style.css                         | custom stylesheet                               |
| `dist/fonts`                      |
| bootstrap-icons.woff              | Bootstrap5 icons                                |
| bootstrap-icons.woff2             | Bootstrap5 icons                                |
| `dist/img`                        |
| bs-logo-wht.svg                   | XXX                                             |
| `dist/js`                         |
| cheatsheet.js                     | examples/cheatsheet                             |
| cssselector.js                    | javascript for css-stylesheet-loader            |
| bootstrap.bundle.min.js           | Bootstrap5 javascript bundle minified           |


## `src/` folder and files
### `assets/`
### `fonts/`
### `js/`
### `reset/`
### `sass/`
### `swatches/`
### `assets/`
*


# NPM Scripts

| Tested | Scripts         | Command                                          | Description                                                                                   |
| ------ | --------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Y      | Sass / Scss     |                                                  |                                                                                               |
| Y      | `watch:sass`:   | sass --watch src/scss:dist/css                   | transpile contents of src/sass folder into dist/css, every time you save sass. Ctrl-C to end. |
| Y      | `compile:sass`: | sass src/scss:dist/css"                          | transpile contents of src/sass folder into dist/css, once. Run when you need it.              |
| Y      | `swatch:sass`:  | sass src/swatches:dist/css"                      | transpile contents of src/swatches folder into dist/css, once. Run when you need it.          |
| .      | css             |                                                  |                                                                                               |
| X      | `lint:css`:     | stylelint ./src/sass/                            | Lints sass/scss/css with BS5 default linting sheet. Lint before transpiling.                  |
| N      | `prefix:css`:   | postcss --replace ./style.css --use autoprefixer | prefixes any style:rule it finds that needs it. Prefix after transpiling                      |
| .      | Reset           |                                                  |                                                                                               |
| N      | `reset:all`     |                                                  |                                                                                               |
| N      | `reset:html`    |                                                  |                                                                                               |
| N      | `reset:scss`    |                                                  |                                                                                               |
| N      | `reset:js`      |                                                  |                                                                                               |
| Y      | Javascript      |                                                  |                                                                                               |
| Y      | `bundle:js`:    | webpack --config-name bundle                     | compile content of src/js folder into dist/js folder, creating bundle.js                      |
| Y      | `pack:js`:      | webpack --config-name pack                       | compile content of src/js folder into dist/js folder, and minify it, creating bundle.min.js   |
| Y      | `blable:js`:    | webpack --config-name blable                     | compiles, minifize and downgrades ES6+ code to ES5, creating bundle.blable.js                 |
| .      | Server          |                                                  |                                                                                               |
| Y      | `server:basic`: | webpack-dev-server                               | runs a local webserver at http://localhost:9000, uses dist/ as root                           |
| N      | `server:dev`:   | webpack-dev-server --config-name bundle          | runs local server and updates project at each save.                                           |
| Y      | Project         |                                                  |                                                                                               |
| Y      | `project:build` | npm-run-all compile:sass blable:js               | runs both compile sass and blabble javascript                                                 |
| Y      | Test            |                                                  |                                                                                               |
| Y      | `test:simple`   | "echo Test"                                      | no tests yet                                                                                  |

<br /><hr color="black" width="75%"/><br />

# Technology List

## [VS Code](https://code.visualstudio.com/)
* Auto-close tags
* Auto-rename tags
* Beautify
* Bootstrap5 Snippets
* color highlighter
* css peak
* EditorConfig for VSCode
* Javascript Snippet Pack
* Javascript(ES6) Code snippets
* Material Theme Icons
* npm
* npm intellisense
* open in default browser
* svg
* TODO Highlighter
* Emmet (built-in)

## Git
* [Git](https://git-scm.com/)
* [git-Hub](https://github.com/)
* git-bash
* [SSH](https://www.ssh.com/academy/ssh)

## Bootstrap
* [Bootstrap](https://www.getbootstrap.com/)
* [Bootstrap icons](https://icons.getbootstrap.com/)
* [BS5-Examples](https://getbootstrap.com/docs/5.1/examples/)
* [Bootswatch](https://www.bootswatch.com)

## Node
* [npm](https://www.npmjs.com/)
* nodemon (not implemented)

## NPM packages, loaders, etc.
* npm-run-all
* babel
* sass
* postcss
* autoprefixer
* stylelint

## Webpack
* webpack
* webpack-dev-server
* webpack-cli

## Web based tools
* [CDN finder](https://cdnjs.com)
* [Google fonts](https://fonts.google.com)
* [FontAwesome CDN](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css)
* [W3Schools Bootstrap tutorial](https://www.w3schools.com/bootstrap5/index.php)
* [Can I Use](https://caniuse.com)

<br /><hr color="black" width="75%"/><br />


# Recreate this project

## Create folder structure
```shell
> mkdir builder
> cd builder
```
## Create files and copy templates
```shell
> touch .gitignore
> touch readme.md
> touch license.md
> touch ...
```
## NPM Initialization
```shell
> npm init
> npm i --save bootstrap bootstrap-icons
> npm i -D webpack webpack-cli webpack-dev-server
> npm i -D sass autoprefixer
> npm i -D stylelint stylelint-config-twbs-bootstrap
> npm i -D postcss postcss-cli
> npm i -D @babel/core @babel/preset-env babel-loader
> npm i -D copy-webpack-plugin
```
## package.json
``` shell
  package.json contents...
```

## webpack.config.js entries

### webpack-dev-server config entries
``` shell
devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
```

## Git-hub setup
```
1 create git-hub account
2 add ssh keys to git-hub
3 create a new repository
4 copy ssh_url, for git configuration
* don't create any files via git-hub. Push it via git.
* for detailed instructions, refer to git-hub.
```

## Git init, first commit and first push
```
> git init
> git branch -m main
> git add .
> git commit -m "initial commit"
> git remote add origin <ssh_url>
> git push -u origin main
```
<br /><hr color="black" width="75%"/><br />


# Credits
<p> This github follows several YouTube tutorials, pulling my favorite parts from each. I believe most are based on the original (npm-starter) git-hub project created by @mdo, creator of bootstrap itself. All credit can go to him and the many brilliant people who taught me how to do, what I present to you here.
</p>
<p> The following are YouTube educators that I wish to express a bit of gratitude towards. Thanks to them for providing hundreds of hours of quality, valuable AND FREE educational resources. There are a lot of people who can do these things for themselves (maybe better). Then there are those who can explain these complex subjects in a simple to understand way.

<ul> Thank you to the following:
  <li>Beau - freeCodeCamp.org</li>
  <li>Brad - Traversy Media</li>
  <li>Kevin - Kevin Powell</li>
  <li>Kyle - Web Dev Simplified</li>
  <li>Mosh - Programming with Mosh</li>
  <li>Tim - Tech with Tim</li>
</ul>
</p>

## Copyright
&copy; Dan McDonald 2022-2023 and licensed MIT.
