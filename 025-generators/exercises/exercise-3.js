/*
    1. Create a generator function called "getRandomNumber"
       that generates a random number between 1-10 (inclusive)
       exactly 5 times

    2. Create another generator function called "groceryList"

       Inside of "groceryList", create an variable called
       "groceries" that points at:
       ["Avocado", "Cookie", "Milk", "Soup", "Soda"]

       The generator will yield a random grocery from "groceries"
       and also remove that grocery item from the list of "groceries"
       Eg: const groceries = groceryList();
           groceries.next() => "Cookie"
           groceries.next() => "Soup"

    3. Create 2 generator Objects by calling each of the 2
       generator functions above ^

    4. Create a regular for loop that will loop 5 times and calls
       .next() on each of the generator Objects ^ to print out a
       random number followed by a random grocery:
       Eg: 5 Avocado
           10 Soup
*/

// const getRandomNumber = function* () {
//   let count = 5;
//   for (i = 0; i < count; i++) {
//     yield Math.floor(Math.random() * 10) + 1;
//   }
// };

// const groceryList = function* () {
//   const groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
//   for (i = 0; i < groceries.length; i++) {
//     const randomGroceryIndex = Math.floor(Math.random() * groceries.length);
//     const result = groceries.splice(randomGroceryIndex, 1)[0];
//     yield result;
//   }
// };

// const randomNumberGenerator = getRandomNumber();
// const groceryListGenerator = groceryList();

// for (i = 0; i < 5; i++) {
//   const randomNumber = randomNumberGenerator.next().value;
//   const randomGrocery = groceryListGenerator.next().value;
//   console.log(`${randomNumber} ${randomGrocery}`);
// }
const getRandomNumber = function* () {
  let count = 5;
  for (let i = 0; i < count; i++) {
    yield parseInt(Math.floor(Math.random() * 10) + 1); // Generates a number
  }
};

// CLONE
// const groceryList = function* () {
//   const groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
//   for (let i = 0; i < groceries.length; i++) {
//     const clonedGroceries = [...groceries]; // Create a copy of the original array
//     const randomGroceryIndex = Math.floor(
//       Math.random() * clonedGroceries.length
//     );
//     const removedItem = clonedGroceries.splice(randomGroceryIndex, 1)[0];
//     yield removedItem;
//   }
// };

const groceryList = function* () {
  const groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
  // assign length
  const groceryLength = groceries.length;
  for (i = 0; i < groceryLength; i++) {
    const randomGroceryIndex = Math.floor(Math.random() * groceries.length);
    const removedItem = groceries.splice(randomGroceryIndex, 1)[0];
    yield removedItem;
  }
};

const randomNumberGenerator = getRandomNumber();
const groceryListGenerator = groceryList();

for (let i = 0; i < 5; i++) {
  const randomNumber = randomNumberGenerator.next().value; // Already a number
  const randomGrocery = groceryListGenerator.next().value;
  console.log(randomNumber, randomGrocery);
}

/*
5 Soda
10 Milk
10 Soup
1 Avocado
8 Cookie
*/
