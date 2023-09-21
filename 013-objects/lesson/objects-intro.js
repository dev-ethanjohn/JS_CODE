// OBJECTS
/*
    const person = {
        id: 42,
        name: "Alex",
        age: 19
    };

    id: 42 -> Property
    name: -> Key
    19 -> Value

    NOTE: Keys by default are strings (under OBJECTS);
          Values can be any data type;
          OBJECTS doesnt create another copy of itself, rather, each change in values for the same key onlychanges the value but the key remains in memory (no duplicates or multiple copies)
*/

// ACCESS values in OBJECT
// (1) Using brackets
// person["id"] 44;

//(2) Using dot notation
// person.name = 'Ezra';
// NOTE: dont use this if there is space in your Key names. or the word is more than 1

const animal = {
  id: 42,
  name: "rawr",
  type: "dog",
};

console.log(animal); // { id: 42, name: 'rawr', type: 'dog' }

animal["name"] = "moo";
console.log(animal); // { id: 42, name: 'moo', type: 'dog' }  //  new name was made, no history, the original was modified

animal.type = "cow";
console.log(animal); // { id: 42, name: 'moo', type: 'cow' }

// Use camelCase for more than 1 word key name, e.g., instead of "num leg" -> numLeg

// DELETE
delete animal.type;
console.log(animal); // { id: 42, name: 'moo' }

delete animal["id"];
console.log(animal); // { name: 'moo' }

// check if property
console.log("name" in animal); // true
