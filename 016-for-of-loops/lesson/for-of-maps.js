const myMap = new Map();

myMap.set("name", "Ethan");
myMap.set("age", 20);
myMap.set("friend", "Mr. John");

console.log(myMap); // Map(3) { 'name' => 'Ethan', 'age' => 20, 'friend' => 'Mr. John' }

for (const [key, value] of myMap) {
  console.log(key, value);
}
/*
name Ethan
age 20
friend Mr. John
*/

// Normally invidual  key value pairs in maps are returned as arrays
// for (const item of myMap) {
//   console.log(item);
// }
/*
[ 'name', 'Ethan' ]
[ 'age', 20 ]
[ 'friend', 'Mr. John' ]
*/

// CAN DO THIS ALSO
// for (const item of myMap) {
//   console.log(item[0], item[1]);
// }
