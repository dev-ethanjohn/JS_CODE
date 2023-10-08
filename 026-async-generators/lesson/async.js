const asyncGenerator = async function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });

  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 3000);
  });
};

const asyncGeneratorObject = asyncGenerator();
console.log(asyncGenerator); // [AsyncGeneratorFunction: asyncGenerator]
console.log(asyncGeneratorObject); // Object [AsyncGenerator] {}

const asyncGeneratorExecutor = async () => {
  for await (const count of asyncGeneratorObject) {
    console.log(count);
  }
};

asyncGeneratorExecutor();
/*
2 (WILL RUN after 2 sec)
3 (WILL RUN after another 3 sec)
*/
