// .shift() Removes an item or element in an Array at the beginning
const animals = ["llama", "monkey", "dog", "cat", "koala", "elephant"];
console.log(animals); // [ 'llama', 'monkey', 'dog', 'cat', 'koala', 'elephant' ]

animals.shift("llama");
console.log(animals); // [ 'monkey', 'dog', 'cat', 'koala', 'elephant' ]

animals.shift();
console.log(animals); // [ 'dog', 'cat', 'koala', 'elephant' ]
