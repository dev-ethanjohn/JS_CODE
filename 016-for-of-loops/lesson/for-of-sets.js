const mySet = new Set();

mySet.add("Hello");
mySet.add("Hello");
mySet.add("Hea");
mySet.add(12);
mySet.add(11);
mySet.add(true);

console.log(mySet); // Set(5) { 'Hello', 'Hea', 12, 11, true }

for (const item of mySet) {
  console.log(item);
}
/*
Hello
Hea
12
11
true
*/
