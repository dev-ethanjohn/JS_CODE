// .pop()  - remove an item or element in an array
const animals = ["monkey", "dog", "cat", "koala", "elephant"];
console.log(animals); // [ 'monkey', 'dog', 'cat', 'koala', 'elephant' ]

animals.push("cow");
console.log(animals); // [ 'monkey', 'dog', 'cat', 'koala', 'elephant', 'cow' ]

animals.pop("cow"); // can omit the value name for .pop()
console.log(animals); // [ 'monkey', 'dog', 'cat', 'koala', 'elephant' ]

