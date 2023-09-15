/*
    1. What happens when you add 2 strings together?
    2. What about when you add a number to a string?
    3. How about when you add booleans together?

    Try to think about how these behaviours might work,
    as well as why it might happen.
*/

// string concatenation

// Answers
// 1. Adding 2 strings together forms string concatenation
console.log("Hello" + " World"); // Hello World

// 2. Adding a number to a string will concatenate and just add both number and string forming a new string.
console.log(13 + " years old"); // 13 years old (13 will be string, not a number)

// 3. Adding booleans together will get you the result of number 1
console.log(true + false); // 1 ( 1 + 0)
