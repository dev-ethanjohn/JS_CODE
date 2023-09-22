/*
    Create a variable called "bakery" that points to an array
    Fill the array with the following String:
        - "Cake"
        - "Cookie"
        - "Bread"
        - "Scone"

    Print out bakery to make sure it has these 4 Strings in it.

    Create another variable called "myBakery" and assign it
    to "bakery" that we declared previously

    Add the following items to "myBakery":
        - "Croissant"
        - "Granola"

    Print out myBakery and bakery and observe the contents.

    WHY is this?
*/

const bakery = ["Cake", "Cookie", "Bread", "Scone"];
console.log(bakery); // [ 'Cake', 'Cookie', 'Bread', 'Scone' ]

const myBakery = bakery;
myBakery.push("Croissant");
myBakery.push("Granola");

console.log(myBakery); // [ 'Cake', 'Cookie', 'Bread', 'Scone', 'Croissant', 'Granola' ]

// Practice 2: Sept 22
/*


// Create a variable called "fruitBasket" that points to an array
// Fill the array with the following fruits:
// - "Apple"
// - "Banana"
// - "Orange"
// - "Grapes"

// Print out "fruitBasket" to confirm it contains these fruits.

// Create another variable called "myFruitBasket" and assign it
// to "fruitBasket" that we declared previously.

// Add the following fruits to "myFruitBasket":
// - "Mango"
// - "Pineapple"

// Twist: Instead of removing an item, replace the third item in "myFruitBasket" with "Strawberry."

// Print out "myFruitBasket" and "fruitBasket" and observe the contents.

// WHY do they both change when you only modified "myFruitBasket"?

 */
