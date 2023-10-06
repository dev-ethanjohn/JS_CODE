const counter = function* () {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
};

const generatorObject = counter();
console.log(generatorObject); // Object [Generator] {}

// similar to this
// for (const value of [2, 3, 4]) {
//   console.log(value);
// }
for (const value of generatorObject) {
  console.log(value);
}
/*
1
2
3
4
5
*/
