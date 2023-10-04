const phrase = "Hello";
const copy = [...phrase];
console.log(copy); // [ 'H', 'e', 'l', 'l', 'o' ]

const newCopy = ["!", ...copy, "Done"];
console.log(newCopy);
/*
[
  '!',    'H',
  'e',    'l',
  'l',    'o',
  'Done'
]
*/
