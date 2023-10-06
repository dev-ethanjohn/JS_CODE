const counter = function* () {
  yield 1;

  yield 2;
  // stops
  return;
  yield 3;
};

console.log(counter);

const counterGenerator = counter();
console.log(counterGenerator);

for (const count of counterGenerator) {
  console.log(count);
}

console.log(counterGenerator.next()); // { value: undefined, done: true }

/*
[GeneratorFunction: counter]
Object [Generator] {}
1
2
*/
