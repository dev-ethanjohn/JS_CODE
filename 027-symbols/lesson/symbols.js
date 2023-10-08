const character = {
  name: "Rick Axley",
  class: "Axe Wieldfer",
  quote: "I'' never let you down!",
  [Symbol("name")]: false,
  [Symbol("age")]: 10,
};

for (const key of Object.keys(character)) {
  console.log(key);
}

/*
name
class
quote
// name is hidden 
*/

// ACCESS symbols from the OBJECT
console.log(Object.getOwnPropertySymbols(character)); // [ Symbol(name), Symbol(age) ]
