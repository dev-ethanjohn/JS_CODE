const counter = function* () {
  yield 1;

  yield 2;

  yield 3;
};

console.log(counter);

// GENERATOR FUNCTION CALLING
const counterGenerator = counter();
console.log(counterGenerator);

// USE THIS with WHILE LOOP
// let counterObject = counterGenerator.next();
// console.log(counterObject);

// USING FOR LOOP
// once we have the initial loop, we cant loop the second time (GENERATORS can be iterated only once)
for (const count of counterGenerator) {
  console.log(count);
}

// USING WHILE LOOP
// while (counterObject.done === false) {
//   console.log(counterObject.value);
//   counterObject = counterGenerator.next();
//   console.log(counterObject);
// }

console.log("All done!");
/*
[GeneratorFunction: counter]
Object [Generator] {}
1
2
3
All done!
*/
