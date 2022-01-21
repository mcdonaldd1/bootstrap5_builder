<!-- 
  Do NOT read this file directly.
  It is created in mark down and should be viewed in a previewer.
  right-click on the file and choose 'view in preview'
-->
<p style="text-align: center; font-size:24pt; font-weight: bold; color: red">Bootstrap5 builder</p>
<p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Template-Site used to manage a custom <u>bootstrap 5</u> project</p>
<p style="text-align: center; font-size:24pt; font-weight: bold; color: red">*** This project is considered incomplete until this warning is removed ***</p>

<br /><hr color="black" width="75%"/><br />

<p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Summary</p>  

| Folder | Description |
| --- | --- |
|`/builder/` | The root folder that holds project and build related files. <br /> You `will not generally have to edit` these files but you may come up with a reason. |
|`/dist/` | Contains all site related files. This folder can be deployed to a live site. <br /> `Only edit the index.html` in this folder. All other files are auto generated.  |
|`/node_modules/` | Contains all installed dependencies of the project <br /> `Do not edit these files` but you will link to or import some of them. |
|`/src/` | Contain all custom source files. You `WILL edit some, but not all,` of the contents. <br /> Anything you download will be put into one of it's sub directories. <br /> This is the `working` folder. | 
|`package.json` | File with all the scripts. Uses `webpack.config.js` to do the projects automation work. | 

<br /><hr color="black" width="75%"/><br />

<p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Technology List</p>
  
## Developer tools
 
|                   |                   |                           |       | 
| ---               | ---               | ---                       |  ---  |
| VS Code / extensions |                |                           |       |
| beautify          | auto close tag    | open in default browser   |       |  
| emmet             | auto rename tag   | npm intellisense          |       |  
| bs5 snippets      | color highlighter |                           |       |  
|                   |                   |                           |       |
| Git               | Git bash          | Git hub                   | ssh   |
| NPM               | node.js           |                           |       |
|                   |                   |                           |       |
| Bootstrap         | Bootstrap icons   | [Bootswatch](https://www.bootswatch.com) |       |
|                   |                   |                           |       |
| WebPack           |                   |                           |       |
|                   |                   |                           |       |
|                   |                   |                           |       |
|                   |                   |                           |       |
|                   |                   |                           |       |
| [Google fonts](https://fonts.google.com) |          |             |       |
|                   |                   |                           |       |
| [CDN finder](https://cdnjs.com) |     |                           |       |
  
## Dev-Dependencies
``` shell
  "devDependencies": {
    "@babel/core": "^7.16.10",
    "@babel/preset-env": "^7.16.11",
    "autoprefixer": "^10.4.2",
    "babel-loader": "^8.2.3",
    "nodemon": "^2.0.15",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.5",
    "postcss-cli": "^9.1.0",
    "sass": "^1.49.0",
    "stylelint": "^14.2.0",
    "stylelint-config-twbs-bootstrap": "^3.0.1",
    "webpack": "^5.66.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.7.3"
  }
``` 
## Dependencies
``` shell
  "dependencies": {
    "bootstrap": "^5.1.3",
    "bootstrap-icons": "^1.7.2"
  }
``` 

## Scripts
``` shell
"scripts" : {
    "watch:sass"      : "sass --watch ./src/sass:./dist/css",
    "compile:sass"    : "sass ./src/sass:./dist/css",
    "swatch:sass"     : "sass ./src/swatches:./dist/css",
    
    "lint:css"        : "stylelint ./src/sass/",
    "prefix:css"      : "postcss --replace dist/css/style.css --use autoprefixer --map",

    "bundle:js"       : "webpack --config-name bundle",
    "pack:js"         : "webpack --config-name pack",
    "blable:js"       : "webpack --config-name blable",

    "reset:all"       : "npm-run-all reset:html reset:scss reset:js",
    "reset:html"      : "echo Reset html",
    "reset:scss"      : "echo Reset scss",
    "reset:js"        : "echo Reset js",
    
    "project:build"   : "npm-run-all compile:sass blable:js",
    "server:basic"    : "webpack-dev-server",
    "server:dev"      : "webpack-dev-server --config-name blable",

    "test:simple"     : "echo Test"
  }
```

<br /><hr color="black" width="75%"/><br />

<p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Folder and File List</p>
  
## `builder/`
* .gitignore
* .stylelintignore
* .stylelintrc
* LICENSE.md
* package-lock.json
* package.json
* README.md
* webpack.config.js
  
`builder/dist/`  
`builder/node_modules/`  
`builder/src/`  
 
## `dist/`  
template files with correct script and link tags: 
* index.html
* theming.html
  
### `css/`  
empty to start - the rest will be generated - DO NOT EDIT 
* style.css  
* style.css.map  
* swatch-theme.css  
* swatch-theme.css.map  
  
### `img/`  
empty to start  
  
### `js/`  
empty to start - the rest will be generated - DO NOT EDIT
* bundle.blab.js  
* bundle.blab.js.LICENSE.txt  
* bundle.min.js  
* bundle.min.js.LICENSE.txt  
* bundle.js  
* bundle.js.LICENSE.txt  
  
## `src/`  
### `assets/`  
### `fonts/`  
`fonts/Montserrat/`  
* Montserrat-Italic-VariableFont_wght.ttf 
* Montserrat-VariableFont_wght.ttf  
  
### `js/`  
* main.js  
* mymodule.js  
  
### `reset`  
* _custom.scss
* _icon-list.scss  
* style.scss  
* index.html  
* theming.html  
* main.js  
* mymodule.js  
  
### `sass/`  
* _custom.scss  
* _icon-list.scss  
* style.scss   
  
### `swatches/`  
  * _theme_variables.scss  
  * _theme_bootswatch.scss
  * swatch-theme.scss  
    
<br /><hr color="black" width="75%"/><br />

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

<!--"purgecss": "^4.0.2",
    "serve": "^11.3.2",
-->

### scripts
| Scripts | Command | Description |
| --- | --- | --- |
| Sass / Scss |  |  |
| `watch:sass`:  | sass --watch src/scss:dist/css |transpile contents of src/sass folder into dist/css, every time you save sass. Ctrl-C to end. |
| `compile:sass`:| sass src/scss:dist/css" |transpile contents of src/sass folder into dist/css, once. Run when you need it. |
| `swatch:sass`:| sass src/swatches:dist/css" |transpile contents of src/swatches folder into dist/css, once. Run when you need it. |
| css |  |  |
| `lint:css`:  | stylelint ./src/sass/ | Lints sass/scss/css with bootstraps default linting sheet. Lint before transpiling.|
| `prefix:css`:| postcss --replace ./style.css --use autoprefixer | prefixes any style:rule it finds that needs it. Prefix after transpiling |
| Reset |  |  |
| `reset:all`  |  |  |
| `reset:html` |  |  |
| `reset:scss` |  |  |
| `reset:js`   |  |  |
| Javascript |  |  |
| `bundle:js`:   | webpack --config-name bundle |compile content of src/js folder into dist/js folder, creating bundle.js |
| `pack:js`:     | webpack --config-name pack |compile content of src/js folder into dist/js folder, and minify it, creating bundle.min.js |
| `blable:js`:   | webpack --config-name blable |compiles, minifize and downgrades ES6+ code to ES5, creating bundle.blable.js|
| Server | --- | --- |
| `project:build` | npm-run-all compile:sass blable:js | runs both compile sass and blabble javascript |
| `server:basic`:  | webpack-dev-server | runs a local webserver at http://localhost:9000, uses dist/ as root |
| `server:dev`:  | webpack-dev-server --config-name bundle | runs local server and updates project at each save.|
| Test | --- | --- |
| `test:simple` | "echo Test" | no tests yet |
 
    "reset:all"       : "npm-run-all reset:html reset:scss reset:js",
    "reset:html"      : "echo Reset html",
    "reset:scss"      : "echo Reset scss",
    "reset:js"        : "echo Reset js",

## webpack.config.js entries
bundle  
pack  
blable  
devServer  
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

## Credits
<p> This github follows several similar projects, pulling my favorite parts from each. I believe most are based on the original (npm-starter) git-hub project created by @mdo, creator of bootstrap itself. All credit can go to him and the many brilliant people who taught me how to do, what I present to you here.
</p>

<p> The following are YouTube educators that I wish to express a bit of gratitude towards. Thanks to them for providing hundreds of hours of quality, valuable AND FREE educational resources. There are a lot of people that can do these things for themselves (maybe better), but there are others who also have a great way of explaining the trade. 
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