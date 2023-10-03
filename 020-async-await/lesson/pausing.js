// const makeTimeout = (ms) => {
//   const timeout = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("All done!");
//     }, ms);
//   });

//   return timeout;
// };
// console.log("Program starting...."); // 1
// // If we dont have to independently resolve each, we can use it like as a regular promise

// // makeTimeout(2000).then((value1) => {
// //   console.log("Fetching first set of data...", value1);
// // });

// // makeTimeout(2000).then((value2) => {
// //   console.log("Fetching Second set of data...", value2);
// // });

// const fetchData = async () => {
//   console.log("Fetching first set of data..."); // 2
//   // after resolves (2 sec)  we log then the message
//   const result1 = makeTimeout(2000);
//   console.log("Fetching Second set of data...", result1); // 4
//   const result2 = makeTimeout(2000);
//   const finalResult = await Promise.all([result1, result2]);
//   console.log("Done fetching data!", finalResult); // 5
// };

// // call
// fetchData();

// console.log("Program complete!"); // 3

// // 2 seconds in total

const makeTimeout = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });
};

console.log("Program starting...."); // 1

const fetchData = () => {
  console.log("Fetching first set of data..."); // 2

  const result1 = makeTimeout(2000);
  console.log("Fetching Second set of data...", result1); // 4

  const result2 = makeTimeout(2000);

  Promise.all([result1, result2]).then((finalResult) => {
    console.log("Done fetching data!", finalResult);
  });
};

// call
fetchData();

console.log("Program complete!"); // 3
