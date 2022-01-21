<!-- 
  Do NOT read this file directly.
  It is created in mark down and should be viewed in a previewer.
  right-click on the file and choose 'view in preview'
-->
<p style="text-align: center; font-size:24pt; font-weight: bold; color: red">Bootstrap5 builder</p>
<p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Template-Site used to manage a custom <u>bootstrap 5</u> project</p>

<br /><hr color="black" width="75%"/><br />

<p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Summary</p>  

* The `/builder/` folder is the root and holds project and build related files.   
* The `/dist/` folder contains all site related files.  
* The `/dist/` folders contents are what will be deployed to the stage or production servers web site.  
* The `/dist/css` folder contains compiled css. DO NOT EDIT these files.    
* The `/dist/js` folder contains compiled javascript. DO NOT EDIT these files.  
* The `/node_modules/` folder contain all vender source files. You will NOT edit these files. You will reference them.  
* The `/src/` folder will contain all custom source files. You WILL edit the `scss` and `javascript` in these files.  
* Includes `theming.html` to help visualize changes as a whole.  

<br /><hr color="black" width="75%"/><br />

# Technology List
## Developer
* VSCode
* VSC extensions:
* - beautify
* - emmet
* - bs5 snippets

* Git
* Git bash
* Git-Hub
* SSH
  
* Node.js
* NPM
  
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
"scripts": {
    "watch:sass": "sass --watch ./src/sass:./dist/css",
    "compile:sass": "sass ./src/sass:./dist/css",
    
    "lint:css": "stylelint ./src/sass/",
    "prefix:css": "postcss --replace dist/css/style.css --use autoprefixer --map",

    "bundle:js": "webpack --config-name bundle",
    "pack:js": "webpack --config-name pack",
    "blable:js": "webpack --config-name blable",

    "build:project": "npm-run-all compile:sass blable:js",
    "server:basic": "webpack-dev-server",
    "server:development": "webpack-dev-server --config-name blable"
  }
```

<br /><hr color="black" width="75%"/><br />

# Folder and File List
## `builder/`  
* .gitignore  
* LICENSE.md  
* package-lock.json  
* package.json  
* README.md  
* theming.html  
* webpack.config.js  

`builder/dist/`  
`builder/node_modules/`  
`builder/src/`  
 
## `dist/`  
index.html  
`css/`  
css/style.css  
css/style.css.map  
`img/`  
`js/`  
js/bundle.blab.js  
js/bundle.blab.js.LICENSE.txt  
js/bundle.min.js  
js/bundle.min.js.LICENSE.txt  
js/bundle.js  
js/bundle.js.LICENSE.txt  

## `src/`  
`assets/`  
`fonts/`  
fonts/Montserrat/  
fonts/Montserrat/Montserrat-VariableFont_wght.ttf  
`js/`  
js/main.js  
js/mymodule.js  
`sass/`  
sass/_custom.scss  
sass/_icon-list.scss  
sass/style.scss   

<br /><hr color="black" width="75%"/><br />

# Steps to Manually Implement
## Install base technology
## Create Folder and File Structure
## Copy over ANY needed files
## Create Git-hub repository  
## Git init and .gitignore
## NPM init and Package.json
## Install dev-dependencies
## Install dependencies
## Configure files to point correctly
## NPM scripts
## Test setup

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
```
## package.json 

<!--"purgecss": "^4.0.2",
    "serve": "^11.3.2",
-->

### scripts
| Scripts | Command | Description |
| --- | --- | --- |
| SASS |  |  |
| `watch:sass`:  | sass --watch src/scss:dist/css |transpile contents of src/sass folder into dist/css, every time you save sass. Ctrl-C to end. |
| `compile:sass`:| sass src/scss:dist/css" |transpile contents of src/sass folder into dist/css, once. Run when you need it. |
| CSS |  |  |
| `lint:css`:  | stylelint ./src/sass/ | Lints sass/scss/css with bootstraps default linting sheet. Lint before transpiling.|
| `prefix:css`:| postcss --replace ./style.css --use autoprefixer --map | prefixes any style:rule it finds that needs it. Prefix after transpiling |
| Javascript |  |  |
| `bundle:js`:   | webpack --config-name bundle |compile content of src/js folder into dist/js folder, creating bundle.js |
| `pack:js`:     | webpack --config-name pack |compile content of src/js folder into dist/js folder, and minify it, creating bundle.min.js |
| `blable:js`:   | webpack --config-name blable |compiles, minifize and downgrades ES6+ code to ES5, creating bundle.blable.js|
| Server | --- | --- |
| `build:project` | npm-run-all compile:sass blable:js | runs both compile sass and blabble javascript |
| `server:basic`:  | webpack-dev-server | runs a local webserver at http://localhost:9000, uses dist/ as root |
| `server:development`:  | webpack-dev-server --config-name bundle | runs local server and updates project at each save.|

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
<p> This project follows several examples of similar projects, approached from my own point of view. I believe most of these projects are based on the original (npm-starter) git-hub project created by @mdo, an original creator of bootstrap itself. All credit can go to him and get shared with the many brilliant people who taught me how to do, what I present to you here.</p>

<p> The following are YouTube educators that I wish to express a bit of gratitude towards. Thanks to their providing hundreds of hours of quality, valuable AND FREE educational resources. There are a lot of people that can do these things (maybe better) but these people have a great way of explaining the trade. Thanks! 
<ul>
  <li>Brad - Traversy Media</li>
  <li>Kyle - Web Dev Simplified</li>
  <li>Mosh - Programming with Mosh</li>
  <li>Kevin - Kevin Powell</li>
  <li>Tim - Tech with Tim</li>
</ul>
</p>

## Copyright
&copy; Dan McDonald 2022-2023 and licensed MIT.