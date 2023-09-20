/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create an new array called "caps" that:
        - maps over "items" and capitalizes each item

    3. Create a const called "concat" that:
        - uses reduce to concatenate all the strings in "caps"
          using a space to separate each item

    4. Print out "items", "caps" and "concat"

    BONUS: Can you do steps 1-3 in one line?
*/

//(1)
const items = ["light", "banana", "phone", "book", "mouse"];
console.log(items); // [ 'light', 'banana', 'phone', 'book', 'mouse' ]

const caps = items.map((item) => {
  return item.toUpperCase();
});

console.log(caps); // [ 'LIGHT', 'BANANA', 'PHONE', 'BOOK', 'MOUSE' ]

const concat = caps.reduce((concatItems, item) => {
  return concatItems + item + " ";
}, "");

console.log(concat); // LIGHT BANANA PHONE BOOK MOUSE

// // USING IN ONE LINE (without assigning it to new variable)

// (2)
// const items = ["light", "banana", "phone", "book", "mouse"]
//   .map((item) => {
//     return item.toUpperCase();
//   })
//   .reduce((concatItems, item) => {
//     return concatItems + item + " ";
//   }, "");
// console.log(items); // LIGHT BANANA PHONE BOOK MOUSE
