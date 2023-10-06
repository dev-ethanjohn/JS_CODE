const counter = function* () {
  console.log("First log");
  yield 1;
  console.log("Second log");
  yield 2;
  console.log("last log");
  yield 3;
};

console.log(counter); // [GeneratorFunction: counter]

// stop at the beg of the function block
const counterGenerator = counter();
console.log(counterGenerator); // Object [Generator] {}

// continue the 1st line of code inside the function
console.log(counterGenerator.next()); // { value: 1, done: false }
console.log(counterGenerator.next()); // { value: 2, done: false }
console.log(counterGenerator.next()); // { value: 3, done: false }

/*
First log
{ value: 1, done: false }
Second log
{ value: 2, done: false }
last log
{ value: 3, done: false }

*/
