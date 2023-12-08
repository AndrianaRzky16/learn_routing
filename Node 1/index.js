// const myModule = require("./myModule");
// console.log(myModule.greet("John"));

//module'myMath.js'

// //Memgubah Module
// const myMath = require("./myMath");
// console.log(myMath.addNumbers(5, 3));
// console.log(myMath.subtractNumbers(10, 4)); //

//Module'formatter.js

// const formatter = require("./formatter");
// console.log(formatter.moneyFormat(1000.5));
// console.log(formatter.dateFormat(new Date()));

import * as formatter from "./formatter-es.js";
console.log(formatter.moneyFormat(1000.5));
console.log(formatter.dateFormat(new Date()));
