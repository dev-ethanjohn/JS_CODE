const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("All done!");
      reject("There is an error!");
    }, ms);
  });

  return timeout;
};

// USING .then VANILLA PROMISES
// makeTimeout(2000)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); // There is an error!

// USING ASYNC/AWAIT FUNCTION
const causeError = async () => {
  // let result: -> Scoping issues
  try {
    const result = await makeTimeout(2000);
    console.log(result);
  } catch (err) {
    console.log("We are in the error case, all done");
    console.error(err);
  }
};

console.log("Program started...");
causeError(); // There is an error!
console.log("program done!");

/*
Program started...
program done!
// AFTER 2 sec
We are in the error case, all done
There is an error!

*/
