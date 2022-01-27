import { vfunc } from "./mymodule.js";

// Import Jquery before Bootstrap if you are going to use it
// import { $ } from "./vendors/jquery ";

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// The first line of this file, shows the import of a custom module, mymodule.js
console.log(vfunc()); // this line tests that the imported function works

// The second line of this file, shows the import of the full bootstrap.bundle.min.js file
// multiple import statements can be used instead, to only import the needed parts of bootstrap
// ..for example
// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";
