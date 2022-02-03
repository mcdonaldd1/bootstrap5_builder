// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import _ from 'lodash';
import compClickMe from './modules/component'

const css = require('../css/style.css').toString();
// const css = require('../css/bootstrap.css').toString();

document.body.appendChild(compClickMe());

let callLog = () => console.log('hair row function');
callLog();
