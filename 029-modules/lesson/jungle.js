// // when doing import rename, for with default export code, you can rename in import once DIRECTLY; no extra working like _ as _. You do the _as_ on Named import/export but not on default
// import PM, { monkey as Monkey } from "./monkey.js"; // es module
// // const printMonkey = require("monkey.js"); // commonjs

// // can renamed once with default export code
// PM(); // Abu
// Monkey; // { name: 'Abu', species: 'Capuchin', hobbies: [ 'stealing' ] }

//jungle.js
// import PM, { monkey, tiger } from "./monkey.js";
// import printMonkey, * as Everything from "./monkey.js";

import { monkeyAwait } from "./monkey.js";

// console.log(monkey);
// PM();
// console.log(monkey);
// console.log(tiger);

// console.log(Everything);
console.log("Welcome!");
// monkeyAwait();
console.log(monkeyAwait);

/*
[Module: null prototype] {
  default: [Function: printMonkey],
  monkey: {
    name: 'Abu',
    species: 'Capuchin',
    hobbies: [ 'stealing' ],
    age: 10
  }
}
*/

// Everything.default();
// console.log(Everything.monkey);
/*
{ name: 'Abu',
  species: 'Capuchin',
  hobbies: [ 'stealing' ],
  age: 11 }
*/
