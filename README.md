<p style="text-align: center; font-size:24pt; font-weight: bold; color: red">Bootstrap5 builder</p>
<p style="text-align: center; font-size:16pt; font-weight: normal; color: orange">Template-Site used to manage a custom <u>bootstrap 5</u> project</p>
<hr />

##   Summary
* The `/builder/` folder is the root and holds project and build related files.   
* The `/dist/` folder contains all site related files.  
* The `/dist/` folders contents are what will be deployed to the stage or production servers web site.  
* The `/dist/css` folder contains compiled css. DO NOT EDIT these files.    
* The `/dist/js` folder contains compiled javascript. DO NOT EDIT these files.  
* The `/node_modules/` folder contain all vender source files. You will NOT edit these files. You will reference them.  
* The `/src/` folder will contain all custom source files. You WILL edit the `scss` and `javascript` in these files.  
* Includes `theming.html` to help visualize changes as a whole.  

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
* nodemon  
* npm-run-all  
  
* webpack
* webpack-cli
* webpack-dev-server  
* babel  
  
* sass  
  
## Dependencies
* Bootstrap  
* Bootstrap-icons  
  
# Folder and File List
`builder/`  
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
 
`dist/`  
css/style.css  
css/style.css.map  
img/  
js/bundle.blab.js  
js/bundle.blab.js.LICENSE.txt  
js/bundle.min.js  
js/bundle.min.js.LICENSE.txt  
js/bundle.js  
js/bundle.js.LICENSE.txt  
index.html  

`src/`  
assets/  
fonts/  
fonts/Montserrat/  
fonts/Montserrat/Montserrat-VariableFont_wght.ttf  
js/  
js/main.js  
js/mymodule.js  
sass/  
sass/_custom.scss  
sass/_icon-list.scss  
sass/style.scss   


# Steps to Implement
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
## Git initial commit
## Git push to git-hub

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
> npm i -D sass
> npm i -D @babel/core @babel/preset-env babel-loader
```
## package.json 

### scripts
| Scripts | Command | Description |
| --- | --- | --- |
| SASS |  |  |
| `watch:sass`:  | sass --watch scss:css |transpile contents of src/sass folder into dist/css folder, every time you save sass. Ctrl-C to end. |
| `compile:sass`:| sass scss:css" |transpile contents of src/sass folder into dist/css folder, once. Run each time you need to. |
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

## Credits
<p> This project follows several examples of similar projects, approached from my own point of view. I believe most of these projects are based on the original (npm-starter) git-hub project created by @mdo, an original creator of bootstrap itself. All credit can go to him and get shared with the many brilliant people who taught me how to do, what I present to you here.</p>

<p> The following are YouTube educators that I wish to express a bit of gratitude towards. Thanks to their providing hundreds of hours of quality, valuable AND FREE educational resources. There are a lot of people that can do these things (maybe better) but these people have a great way of explaining the trade. Thanks! 
<ul>
  <li>Brad - Traversy Media</li>
  <li>Kyle - Web Dev Simplified</li>
  <li>Mosh - df with Mosh</li>
  <li>Kevin - </li>
  <li>Tim - Tech with Tim</li>
</ul>
</p>

## Copyright
&copy; Dan McDonald 2022-2023 and licensed MIT.