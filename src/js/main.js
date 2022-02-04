import _ from 'lodash';
import compClickMe from './modules/compClickMe'

const css = require('../css/style.css').toString();
// const css = require('../css/bootstrap.css').toString();

document.addEventListener('load', () => {
  console.log('document loaded');
})

document.body.appendChild(compClickMe());

let es6Syntax = () => console.log('es6 baby; babel will change let to var and arrow to function');
es6Syntax();
