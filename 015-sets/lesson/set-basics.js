const mySet = new Set();
mySet.add(25);
mySet.add("Hello");

console.log(mySet); // Set(2) { 25, 'Hello' };

mySet.add(25);
mySet.add(25);
mySet.add(25);

// Duplicates will be ignored
console.log(mySet);
/*
Set(2) { 25, 'Hello' }
Set(2) { 25, 'Hello' }
*/

// Delete
mySet.delete(25);
console.log(mySet); // Set(1) { 'Hello' }

// Check if an item is inside
console.log(mySet.has(25)); // false (25 was deleted)
console.log(mySet.has("Hello")); // true

// Size
console.log(mySet.size); // 1 ((Set(1) { 'Hello' })
