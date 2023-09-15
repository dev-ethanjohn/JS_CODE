/*
    Write out the truth tables for the following boolean operators
    using two boolean values, one on each side:
    - AND
    - OR
    - NOT

    Use console.log to log out the results for each.

    HINT: AND and OR will have 4 possibilities, while NOT has 2
    HINT2: console.log(true && true)
*/
let bool = true && true;
console.log(bool); // true

bool = true && false;
console.log(bool); // false

bool = false && true;
console.log(bool); // false

bool = false && false;
console.log(bool); // false

// Using OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true
