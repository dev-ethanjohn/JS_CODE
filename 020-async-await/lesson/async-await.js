// a function makeTimeout wraps the promise for a return value which is the constructed promise that resolves with the "All done!" message after a number of sec that we provided as an argument to the ms parameter.

const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });

  return timeout;
};

console.log("Program starting....");

// Using Vanilla romises
makeTimeout(1000).then((result) => {
  console.log(`from .then`, result);
});

// Using async await function
const fetchStuff = async () => {
  const result = await makeTimeout(500);
  console.log(`from async func`, result);
};
// call
fetchStuff();
fetchStuff();

console.log("Program complete!");

/*
Program starting....
Program complete!
// both will print after 0.5 second.
from async func All done!
from async func All done!

/ print 1 seec
from .then All done!

*/

// function declaration
const useData = async () => {
  console.log("Fetching some data..."); // 2
  // await inside async function, the program will pause and not execute the rest of the code, until the await either RESOLVES or REJECTS. Hence, run code outside of the async function while waiting for the await to come back.
  const result = await fetchSomeData();
  console.log(result); // 4
};

console.log("Program started"); // 1
useData();
console.log("All done!"); // 3
