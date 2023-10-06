const counter = function* () {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
};

const counterGenerator = counter();
console.log(counterGenerator); // Object [Generator] {}

// for (const value of counterGenerator) {
//   console.log(value); // inifnite loop
// }

// altough infinite, I can control the flow outside of the loop. We can decide what to pull out
let value = 0;
while (value < 5) {
  console.log(counterGenerator.next());
  value++;
}
/*
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }

*/

// NOTE: LAZY EVALUATION: generators will run when only called by .next; Unlike array that store in memory and consume much space.
