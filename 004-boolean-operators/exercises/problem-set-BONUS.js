/*
    First, lookup how logical AND, OR and NULLISH assignment work
    using Google. Then try the following examples.

    What would each of the following variables evaluate to:

    1. let username = "";
       username &&= "tiger";

    2. let vip = 0;
       vip ||= 3;

    3. let loggedIn = null;
       loggedIn ??= 0;

    Log each of the values out to see the results.

    This is very very challenging, it might take several tries
    or coming back to it in the future when it's more relevant.
*/

let username = "";
console.log((username &&= "tiger")); // (blank) x is falsy, thus y is not evaluated.

let vip = 0;
console.log((vip ||= 3)); // 3 (x is falsy, thus, y is evaluated)

let loggedIn = null;
console.log((loggedIn ??= 0)); // 0 (left hand side is nullish, thus right hand side is evaluated)
