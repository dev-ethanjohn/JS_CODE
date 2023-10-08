/*
    1. Create an async Generator function that will yield
       a Promise that resolves after 1 second with a random
       number between 0-9 (integer and inclusive)

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)
*/

const asyncGen = async function* () {
  let i = 0;
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 10));
      }, 1000);
    });
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
};

asyncGenExecutor();

/*
9 (INDEX 0)
3 (1)
9 (2)
9 (3)
1 (4)
*/
