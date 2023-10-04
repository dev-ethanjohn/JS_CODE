const myMap = new Map();

myMap.set("Monkey", 5);
myMap.set("Tiger", 1);
myMap.set("Elephant", 2);

console.log(myMap); // Map(3) { 'Monkey' => 5, 'Tiger' => 1, 'Elephant' => 2 }

const myMapArray = [...myMap, ["boo!"]];
console.log(myMapArray);
/*
[ [ 'Monkey', 5 ], [ 'Tiger', 1 ], [ 'Elephant', 2 ], [ 'boo!' ] ]
*/
