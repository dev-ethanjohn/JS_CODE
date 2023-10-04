const prices = [[10], [20], [30], [40], [50]];
// Spread operator copy will only work on primitive types, reference types like arrays, objects etc wont get a separate copy, thus you'll see at the bottom it adopts the same value after pushing 15 to the 1st interior array.
const copy = [...prices];

console.log(copy); // [ [ 10 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]

prices[0].push(15);
console.log(prices); // [ [ 10, 15 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]
console.log(copy); // [ [ 10, 15 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]

/*
If you want a deep copy (a copy where nested arrays are also cloned), you would need to create a custom deep copy function or use a library like lodash, which provides a _.cloneDeep function for this purpose. Here's how you can create a deep copy of prices using a custom function:

function deepCopy(arr) {
  return arr.map((item) => (Array.isArray(item) ? deepCopy(item) : item));
}

const prices = [[10], [20], [30], [40], [50]];
const copy = deepCopy(prices);

console.log(copy); // [ [ 10 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]

prices[0].push(15);
console.log(prices); // [ [ 10, 15 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]
console.log(copy); // [ [ 10 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]
*/
