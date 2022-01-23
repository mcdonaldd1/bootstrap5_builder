<!-- Do NOT read this file directly. It is created in mark down and should be viewed in a previewer. right-click on the file and choose 'view in preview' -->

# Bootstrap5 builder
## Template-Site used to manage a custom `Bootstrap5` project
## *** This project is considered incomplete until this warning is removed ***
<br /><hr style="color: grey; width: 50%; text-size: 1rem"/><br />


# Setup Bootstrap5 Builder

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

# Basic Usage and Ideas to try

### 01) Edit `sass/scss` and `transpile` to `css`.
### 02) Add a `_module.scss` to the sass workflow. Lookup `7-1 Sass architecture`.
### 02) Edit `Javascript` and `bundle` / `minimize` it.
### 03) `Babel` Javascript down to ES5 standards.
### 04) Edit `HTML`.
### 05) Create Custom Themes using `theming` page.
### 06) Use `Google fonts`
### 07) Use `Bootstrap Icons`
### 08) Add `FontAwesome Icons`
### 09) Add `JQuery` library
### 10) Add `animation.css` library
### 11) Add `d3.js` library
### 12) Download and Complile `Bootswatches`. There are not many of them, try them all.
### 13) Download and Explore `Examples`. Use the `example-index.html` page to browse them.
### 14) `Reset` the project or `Export` the project ready for deployment.
### 15) Use the `load-style-sheet` selector tool. Add it to any page.
### 16) Use `CDNs` to deliver most content. No bootstrap local imports. Only custom code.
### 17) Use `partials` and `modules` to only import the parts of Bootstrap5 you need. Run it lean.
### 18) Load up a heavy site. One that is over developed and super functional. You'll never deploy it. Just have fun.


<br /><hr color="black" width="75%"/><br />


# Folders and files

## Root Folders
| Root       | Folder          | subfolders         | Description                                                                  |
| ---------- | --------------- | ------------------ |----------------------------------------------------------------------------- |
| `builder/` |                 |                    | The root folder that holds project and build related files.                  |
|            | `dist/`         |                    | Contains all site related files.                                             |
|            |                 | `css/`             | #                                                                            |
|            |                 | `img/`             | #                                                                            |
|            |                 | `js/`              | #                                                                            |
|            | `node_modules/` |                    | Contains all installed dependencies of the project.                          |
|            |                 | `bootstrap/`       | #                                                                            |
|            |                 | `bootstrap-icons/` | #                                                                            |
|            | `src/`          |                    | Contain all custom source files.                                             |
|            |                 | `assets/`          | #                                                                            |
|            |                 | `fonts/`           | #                                                                            |
|            |                 | `js/`              | #                                                                            |
|            |                 | `reset/`           | #                                                                            |
|            |                 | `sass/`            | #                                                                            |
|            |                 | `swatches/`        | #                                                                            |


## `builder/` files
| File              | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| .browserslistrc   | `Postcss` and `autoprefixer` use this to target browsers it will or won't support.          |
| .editorconfig     | Used to overide existing settings on 'editorconfig' aware editors and ide's.                |
| .gitignore        | list of folders and files to be ignored (not watched) by `git`.                             |
| .stylelintignore  | list of folders and files to be ignored (not watched) by `stylelint`                        |
| .stylelintrc      | `stylelint` uses this file to load specific linters.                                        |
| babel.config.json | config file for babel                                                                       |
| LICENSE.md        | standard icense                                                                             |
| package-lock.json | system file you should ignore                                                               |
| package.json      | main configuration file for npm, and your project                                           |
| README.md         | this file, the one you are reading                                                          |
| webpack.config.js | configuration file for `webpack`                                                            |

## test table
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |
|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|


## `dist/` files
| File                  | Description                          |
| --------------------- | ------------------------------------ |
| _load-style-sheet.htm | example of css-stylesheet-loader     |
| cheatsheet.html       | XXX                                  |
| npm-starter.html      | XXX                                  |
| starter.html          | XXX                                  |
| theming.html          | XXX                                  |
| `dist/css`            |
| cheatsheet.css        | XXX                                  |
| `dist/img`            |
| bs-logo-wht.svg       | XXX                                  |
| `dist/js`             |
| cheatsheet.js         | XXX                                  |
| cssselector.js        | javascript for css-stylesheet-loader |

## `src/` files
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
* Bootstrap5 Snippets
* open in default browser
* EditorConfig for VSCode
* npm
* npm intellisense
* css peak
* color highlighter
* Beautify
* Auto-close tags
* Auto-rename tags
* Emmet (built-in)
* Javascript Snippet Pack
* Javascript(ES6) Code snippets
* svg

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
