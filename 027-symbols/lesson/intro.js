const mySymbol = Symbol();
const namedSymbol = Symbol("monkey");

console.log(mySymbol); // Symbol()
console.log(namedSymbol); // Symbol(monkey)

console.log(typeof mySymbol); // symbol
console.log(typeof namedSymbol); // symbol

console.log(Symbol() === mySymbol); // false (2 separate space in memory)
console.log(Symbol("monkey") === namedSymbol); // false (2 separate space in memory)
console.log(mySymbol === mySymbol); // true

console.log(mySymbol.description); // undefined
console.log(namedSymbol.description); // monkey
