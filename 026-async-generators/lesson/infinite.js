// console.log("START");

// const asyncGenerator = async function* () {
//   let i = 0;
//   while (true) {
//     yield new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(7);
//       }, 1000);
//     });

//     yield new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(i);
//       }, 3000);
//     });
//     i++;
//     // RETURN will stop the loop according to the condition
//     // if (i === 5) {
//     //   return;
//     // }

//     /*
//     START
//     END
//     7
//     0
//     7
//     1
//     7
//     2
//     7
//     3
//     7
//     4
//     */
//   }
// };

// const asyncGeneratorObject = asyncGenerator();

// const asyncGeneratorExecutor = async () => {
//   for await (const count of asyncGeneratorObject) {
//     console.log(count);
//   }
// };

// asyncGeneratorExecutor();

// console.log("END");

// /*
// START
// END
// 7 (1sec)
// 0 (another 3sec)
// 7 (another 1sec)
// 1 (another 3 sec)
// 7 (... same pattern of timing)
// 2
// 7
// 3
// 7
// ... infinity
// */

console.log("START");

const asyncGenerator = async function* () {
  let i = 0;
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(7);
      }, 1000);
    });

    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 3000);
    });
    i++;
    // yield delegation with * considers it as a new generator
    yield* [1, 2, 3];

    if (i === 5) {
      return;
    }
  }
};

const asyncGeneratorObject = asyncGenerator();

const asyncGeneratorExecutor = async () => {
  for await (const count of asyncGeneratorObject) {
    console.log(count);
  }
};

asyncGeneratorExecutor();

console.log("END");

/*
7
0
1
2
3
7
1
1
2
3
7
2
1
2
3
7
3
1
2
3
7
4
1
2
3
*/
