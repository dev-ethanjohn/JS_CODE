const myMap = new Map();

console.log(myMap); // Map(0) {}

// Create value pair
myMap.set("name", "Ethan");
console.log(myMap); // Map(1) { 'name' => 'Ethan' }
myMap.set("age", 10);
console.log(myMap); // Map(2) { 'name' => 'Ethan', 'age' => 10 }

// Access inside the map
const age = myMap.get("age");
console.log(age); // 10

// reassign
myMap.set("age", 11);
console.log(myMap.get("age")); // 11

// Does my map have the key "name" in it?
console.log(myMap.has("name")); // true
console.log(myMap.has("last name")); // false

// Check the size or quantity of value pairs inside the map
console.log(myMap.size); // 2

// delete myMap.age;     only works on Objects
myMap.delete("age");
console.log(myMap); // Map(1) { 'name' => 'Ethan' }

// NOTE: for storing info, it is recommended to use maps instead of object
