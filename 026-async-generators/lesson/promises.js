const generator = function* () {
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

const generatorObject = generator();
console.log(generatorObject);

// THIS WOULD WORK
// counterGenerator.next().value.then((result) => {
//   console.log("result", result);
// });

// USING FOR OF LOOP - promise (synchronous)
// for (const count of generatorObject) {
//   count.then((resolvedValue) => {
//     console.log(resolvedValue);
//   });
// }

// USING FOR OF LOOP - async await
// const getObjectAsync = async () => {
//   for (const count of generatorObject) {
//     const result = await count;
//     console.log(result);
//   }
// };

// getObjectAsync();
