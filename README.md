<!--
  Do NOT read this file directly.
  It is created in mark down and should be viewed in a previewer.
  right-click on the file and choose 'view in preview'
-->
<p style="text-align: center; font-size:24pt; font-weight: bold; color: red">Bootstrap5 builder</p>
<p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Template-Site used to manage a custom <u>bootstrap 5</u> project</p>
<p style="text-align: center; font-size:24pt; font-weight: bold; color: red">*** This project is considered incomplete until this warning is removed ***</p>

<br /><hr color="black" width="75%"/><br />

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
npm run compile:sass

# Bundle and Minimize Javascript
npm run pack:js

# Start Server
npm run server:basic
```

## 4) Open html pages in browser
#### * theses links only work if the setup scripts were run, and the server has started.

[cheatsheet: http://localhost:9000/cheatsheet.html](http://localhost:9000/cheatsheet.html)

[npm-starter: http://localhost:9000/npm-starter.html](http://localhost:9000/npm-starter.html)

[my-starter: http://localhost:9000/starter.html](http://localhost:9000/starter.html)

[theming-kit: http://localhost:9000/theming.html](http://localhost:9000/theming.html)

* Hit F12 or Ctrl-Shift-I (in Chrome or FireFox) to open up dev-tools



<br /><hr color="black" width="75%"/><br />

# Basic Usage

## 1) Edit `sass/scss` and compile to `css`.
## 2) Edit `Javascript` and bundle and/or minimize it.
## 3) Babel Javascript and bundle and/or minimize it.
## 4) Edit HTML
## 5) Create Custom Themes using `theming` to site
## 6) add fonts
## 7) add icons
## 8) Download and Complile `Bootswatches`
## 9) Download and Explore `Examples`
## 10) `Reset` the project or `Export` the project ready for deployment.




<br /><hr color="black" width="75%"/><br />

# Summary section

## Root Folders

| Root | Folder | subfolders  | Description |
| --- | --- | --- | --- |
| `builder/`          |   |   | The root folder that holds project and build related files. |
|  | `dist/`              |   | Contains all site related files. This folder can be deployed to a live site. |
|  |  | `css/`                | # |
|  |  | `img/`                | # |
|  |  | `js/`                 | # |
|  | `node_modules/`       |  | Contains all installed dependencies of the project <br /> `Do not edit these files` but you will link to or import some of them. |
|  |  | `bootstrap/`          | # |
|  |  | `bootstrap-icons/`    | # |
|  | `src/`                |  | Contain all custom source files. You `WILL edit some, but not all,` of the contents. <br /> Anything you download will be put into one of it's sub directories. <br /> This is the `working` folder. |
|  |  | `assets/`             | # |
|  |  | `fonts/`              | # |
|  |  | `js/`                 | # |
|  |  | `reset/`              | # |
|  |  | `sass/`               | # |
|  |  | `swatches/`           | # |
| # | # | # | # |


## `builder/` files
| File | Description |
| --- | --- |
| .browserslistrc | `Postcss` uses this to target browsers it will or won't support. <br /> `autoprefixer` will only prefix the code neede to support the listed browsers. `F... IE` |
| .editorconfig | Used to overide existing settings on 'editorconfig' aware editors and ide's. <br /> In VSCode install the extension `EditorConfig for VSCode`  |
| .gitignore | list of folders and files to be ignored (not watched) by `git`. |
| .stylelintignore | list of folders and files to be ignored (not watched) by `stylelint` |
| .stylelintrc | `stylelint` uses this file to load specific linters. This project uses the official Bootstrap5 linter. |
| LICENSE.md | standard license file |
| package-lock.json | system file you should ignore |
| package.json | main configuration file for npm, and your project |
| README.md | this file, the one you are reading |
| webpack.config.js | configuration file for `webpack` |

## `dist/` files
| File | Description |
| --- | --- |
| cheatsheet.html | XXX |
| npm-starter.html| XXX |
| starter.html    | XXX |
| theming.html    | XXX |
| `dist/css`        |
| cheatsheet.css  | XXX |
| `dist/img`        |
| bs-logo-wht.svg | XXX |
| `dist/js`         |
| cheatsheet.js   | XXX |

## NPM Scripts

| Tested | Scripts | Command | Description |
| --- | --- | --- | --- |
| Y | Sass / Scss  |  |  |
| Y | `watch:sass`:   | sass --watch src/scss:dist/css |transpile contents of src/sass folder into dist/css, every time you save sass. Ctrl-C to end. |
| Y | `compile:sass`: | sass src/scss:dist/css" |transpile contents of src/sass folder into dist/css, once. Run when you need it. |
| Y | `swatch:sass`:  | sass src/swatches:dist/css" |transpile contents of src/swatches folder into dist/css, once. Run when you need it. |
| . | css          |  |  |
| X | `lint:css`:  | stylelint ./src/sass/ | Lints sass/scss/css with BS5 default linting sheet. Lint before transpiling.|
| N | `prefix:css`:| postcss --replace ./style.css --use autoprefixer | prefixes any style:rule it finds that needs it. Prefix after transpiling |
| . | Reset        |  |  |
| N | `reset:all`  |  |  |
| N | `reset:html` |  |  |
| N | `reset:scss` |  |  |
| N | `reset:js`   |  |  |
| Y | Javascript   |  |  |
| Y | `bundle:js`:    | webpack --config-name bundle |compile content of src/js folder into dist/js folder, creating bundle.js |
| Y | `pack:js`:      | webpack --config-name pack |compile content of src/js folder into dist/js folder, and minify it, creating bundle.min.js |
| Y | `blable:js`:    | webpack --config-name blable |compiles, minifize and downgrades ES6+ code to ES5, creating bundle.blable.js|
| . | Server       |  |  |
| Y | `server:basic`: | webpack-dev-server | runs a local webserver at http://localhost:9000, uses dist/ as root |
| N | `server:dev`:   | webpack-dev-server --config-name bundle | runs local server and updates project at each save.|
| Y | Project      |  |  |
| Y | `project:build` | npm-run-all compile:sass blable:js | runs both compile sass and blabble javascript |
| Y | Test         |  |  |
| Y | `test:simple`   | "echo Test" | no tests yet |

<br /><hr color="black" width="75%"/><br />

# <p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Technology List</p>

|                                           |                   |                                |                                        |
| ---                                       | ---               | ---                            |  ---                                   |
| [VS Code](https://code.visualstudio.com/) |                   |                                |                                        |
|                                           | open in default browser | Markdown All in One            | Editorconfig for VSCode                |
| Bootstrap5 & FA Snippets                  | npm               | color highlighter              | CSS Peak                               |
|                                           | npm intellisense  |                                |                                        |
| Javascript Snippet Pack                   | beautify          | auto close tag                 |                                        |
| Javascript(ES6) Code snippets             | emmet             | auto rename tag                | SVG                                    |
|                                           |                   |                                |                                        |
| [Git](https://git-scm.com/)               | git-Bash          | [git-Hub](https://github.com/) | [SSH](https://www.ssh.com/academy/ssh) |
| [npm](https://www.npmjs.com/)             | npm-run-all       | node.js                        | nodemon *not yet                       |
|                                           |                   |                                |                                        |
| [Bootstrap](https://www.getbootstrap.com/)|                   |                                |                                        |
| [Bootstrap icons](https://icons.getbootstrap.com/)      |     |                                |                                        |
| [Bootswatch](https://www.bootswatch.com)  |                   |                                |                                        |
| [BS5-Examples](https://getbootstrap.com/docs/5.1/examples/)   |         |                      |                                        |
|                                           |                   |                                |                                        |
| WebPack                                   | webpack-cli       | webpack-dev-server             |                                        |
| Babel                                     |                   |                                |                                        |
| Sass                                      | autoprefixer      | postcss                        | stylelint                              |

* [CDN finder](https://cdnjs.com)
* [Google fonts](https://fonts.google.com)
* [FontAwesome CDN](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css)
* [W3Schools Bootstrap tutorial](https://www.w3schools.com/bootstrap5/index.php)



<br /><hr color="black" width="75%"/><br />

# <p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Recreate this project</p>

## Create folder structure
```shell
> md project_folder
> cd project_folder
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
``` shell
webpack.config.js contents...
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
# <p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Credits</p>

<p> This github follows several YouTube tutorials, pulling my favorite parts from each. I believe most are based on the original (npm-starter) git-hub project created by @mdo, creator of bootstrap itself. All credit can go to him and the many brilliant people who taught me how to do, what I present to you here.
</p>

<p> The following are YouTube educators that I wish to express a bit of gratitude towards. Thanks to them for providing hundreds of hours of quality, valuable AND FREE educational resources. There are a lot of people who can do these things for themselves (maybe better). Then there are those who can explain these complex subjects in a simple to understand way.
<br /> Here are a few of them:
</p>
<ul>
  <li>Beau - freeCodeCamp.org</li>
  <li>Brad - Traversy Media</li>
  <li>Kevin - Kevin Powell</li>
  <li>Kyle - Web Dev Simplified</li>
  <li>Mosh - Programming with Mosh</li>
  <li>Tim - Tech with Tim</li>
</ul>


## Copyright
&copy; Dan McDonald 2022-2023 and licensed MIT.
