const mySet = new Set();
mySet.add("Batman");
mySet.add("Superman");
mySet.add("Spiderman");
mySet.add("Batman");

console.log(mySet); // Set(3) { 'Batman', 'Superman', 'Spiderman' }

// using SPREAD on sets convert a set into an Array
const mySetCopy = ["Robin", ...mySet, "Batman"];
console.log(mySetCopy); // [ 'Robin', 'Batman', 'Superman', 'Spiderman', 'Batman' ]
