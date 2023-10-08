const startTime = Date.now();
/*
    1. Create an async Generator function that has a 50%
       chance of yielding either of the following Promises:
       - Resolve after 500ms with the value "Fast!"
       - Resolve after 3000ms with the value "Slow!"

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    *HINT: Math.random() is your friend
*/

const asyncGen = async function* () {
  let i = 0;
  while (true) {
    const randomValue = Math.random(); // random number between 0 and 1
    if (randomValue < 0.5) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Fast");
        }, 500);
      });
    } else {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Slow!");
        }, 3000);
      });
    }
    i++;
    if (i === 5) {
      return;
    }
  }
};

const asyncGenObject = asyncGen();

const asyncGenExecutor = async () => {
  for await (const promise of asyncGenObject) {
    console.log(promise);
  }

  const endTime = Date.now();
  const elapsedTime = endTime - startTime;
  console.log(`Total Execution Time: ${elapsedTime}ms`);
};

asyncGenExecutor();

/* (generate random number with equivalent yield based on the condition)
Slow!
Fast
Slow!
Slow!
Slow! (ends at 5th iteration)
*/
