const character = {
  name: "Rick Axley",
  class: "Axe Wieldfer",
  quote: "I'' never let you down!",
  __admin__: false,
  // using generator as iterator value
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield "hello";
  },
};

for (const value of character) {
  console.log(value);
}

/*
1
2
hello
*/
