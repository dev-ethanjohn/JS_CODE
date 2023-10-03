// USING .THEN

// const makeTimeout = (ms, value) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, ms);
//   });
// };

// console.log("Program starting...."); // 1

// const fetchData = () => {
//   console.log("Fetching first set of data..."); // 2

//   makeTimeout(2000, "Data 1")
//     .then((result1) => {
//       console.log("First data fetched:", result1); // 4

//       return makeTimeout(1500, "Data 2");
//     })
//     .then((result2) => {
//       console.log("Second data fetched:", result2); // 5
//       return makeTimeout(1000, "Data 3");
//     })
//     .then((result3) => {
//       console.log("Third data fetched:", result3); // 6

//       return makeTimeout(500, "Data 4");
//     })
//     .then((result4) => {
//       console.log("Fourth data fetched:", result4); // 7

//       return makeTimeout(250, "Data 5");
//     })
//     .then((result5) => {
//       console.log("Fifth data fetched:", result5); // 8
//     })
//     .catch((error) => {
//       console.error("An error occurred:", error);
//     });
// };

// // call
// fetchData();

// console.log("Program complete!"); // 3

// USING ASYNC/AWAIT
const makeTimeout = (ms, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
};

console.log("Program starting...."); // 1

const fetchData = async () => {
  console.log("Fetching first set of data..."); // 2

  try {
    const result1 = await makeTimeout(2000, "Data 1");
    console.log("First data fetched:", result1); // 4

    const result2 = await makeTimeout(1500, "Data 2");
    console.log("Second data fetched:", result2); // 5

    const result3 = await makeTimeout(1000, "Data 3");
    console.log("Third data fetched:", result3); // 6

    const result4 = await makeTimeout(500, "Data 4");
    console.log("Fourth data fetched:", result4); // 7

    const result5 = await makeTimeout(250, "Data 5");
    console.log("Fifth data fetched:", result5); // 8
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// call
fetchData();

console.log("Program complete!"); // 3
