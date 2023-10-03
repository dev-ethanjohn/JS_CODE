/*
    1. Create a function called "fetchFast" that returns 
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns 
       a Promise that resolves with the String "Slow Done"
       after 6 seconds 
    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    5. Call the async function you created
    6. Log out "Program complete!"

    7. How long does this take and why?
    8. How could you speed it up?
*/

const fetchFast = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fast Done!");
    }, 2000);
  });
};

const fetchSlow = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Slow Down");
    }, 6000);
  });
};

console.log("Program starting...");

const firstTimestamp = new Date();
// console.log(new Date() - firstTime);

const speed = async () => {
  // Check time of execution

  // execute both promises in parallel/concurrently
  // 6 sec in total
  //   const [resultFast, resultSlow] = await Promise.all([
  //     fetchFast(),
  //     fetchSlow(),
  //   ]);
  const resultFast = await fetchFast();
  console.log(resultFast);
  const resultSlow = await fetchSlow();
  console.log(resultSlow);

  const secondTimestamp = new Date();
  const timeElapsed = secondTimestamp - firstTimestamp;
  console.log("Program complete!", timeElapsed);
};

speed();

/*
Program starting...
// AFTER 2 sec
Fast Done!
// After 2 sec + some miliseconds
Slow Down
Program complete! 8023

*/
