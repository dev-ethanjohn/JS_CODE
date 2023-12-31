/*
    1. Create a function called "goGetCandies" which will
       return a Promise Object that resolves to the value:
       { candy: "sour keys", quantity: 10 }
       This should take 2 seconds

    2. Create another function called "sellCandies" that
       will take a candy Object like above ^ and return
       a Number that is 25 * quantity. This will be 
       how much (in cents) we get for our candies. However,
       make this function take 3 seconds to do this math
       (return a Promise with a setTimeout with the answer).

    3. Write an async function that uses await to:
       1. Get the candy object from goGetCandies()
       2. Passes it to "sellCandies" and waits for the response
       3. Prints out how much money we made from our sale

    4. Do the same steps as #3 but with vanilla Promises.

    Q1: Which of these 2 methods do you prefer?
    Q2: Which of these 2 methods is easier to read?
*/

// const goGetCandies = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ candy: "sour keys", quantity: 10 });
//     }, 2000);
//   });
// };

// const sellCandies = (store) => {
//   //   return (number = quantity * 25);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const totalValue = store.candy.quantity * 25;
//       resolve(totalValue);
//     }, 3000);
//   });
// };

// console.log("Program starting...");

// const getMoney = async () => {
//   const resultObject = await goGetCandies();
//   console.log(resultObject);
//   const resultTotalValue = await sellCandies(resultObject);
//   console.log("Earnings: ", resultTotalValue);
//   console.log("Program done!");
// };

// getMoney();

const goGetCandies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour keys", quantity: 10 });
    }, 2000);
  });
};

const sellCandies = (store) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const totalValue = store.quantity * 25; // Calculate the total value
      resolve(totalValue); // Resolve the promise with the total value
    }, 3000);
  });
};

console.log("Program starting...");
const firstTimestamp = new Date();

const getMoney = async () => {
  try {
    const resultObject = await goGetCandies();
    console.log(resultObject);

    // Call sellCandies with the resultObject and await the result
    const resultTotalValue = await sellCandies(resultObject);

    console.log("Earnings: ", resultTotalValue); // Print the total earnings
    const secondTimestamp = new Date();
    const timeElapsed = secondTimestamp - firstTimestamp;
    console.log("Program complete!", timeElapsed);
  } catch (error) {
    console.error("An error occurred:", error);
    const secondTimestamp = new Date();
    const timeElapsed = secondTimestamp - firstTimestamp;
    console.log("Program failed!", timeElapsed);
  }
};

getMoney();

/* TOTAL 5 SEC
Program starting...
// After 2 sec
{ candy: 'sour keys', quantity: 10 }
// After 3 sec
Earnings:  250
Program complete! 5030
*/
