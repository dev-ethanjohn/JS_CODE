/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/

// will print first after 3 sec
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

myPromise.then((number) => {
  console.log(number);
});

// get printed after  seconds
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

secondPromise.then((secondNumber) => {
  console.log(secondNumber);
});

// More readable and direct
// After 5 seconds, it will print the sum altogether with the secondPromise value whcih is 20
Promise.all([myPromise, secondPromise]).then((values) => {
  const sum = values.reduce((num1, num2) => {
    return num1 + num2;
  }, 0);

  console.log(sum);
});

// Promise.all([myPromise, secondPromise])
//   .then((values) => {
//     // The 'values' array will contain the resolved values from both promises
//     const sum = values.reduce((acc, curr) => acc + curr, 0);
//     console.log("Sum of resolved values:", sum);
//   })
//   .catch((error) => {
//     // Handle any errors that might occur in either of the promises
//     console.error("Error:", error);
//   });

// Promise.all([myPromise, secondPromise]).then((addition) => {
//   const firstValue = addition[0];
//   const secondValue = addition[1];
//   console.log(addition);
//   console.log(firstValue, secondValue);
//   console.log(firstValue + secondValue);
// });

// Intotal, there is 5 sec to execute both and the sum.
