const animal = {
  id: 42,
  name: "rawr",
  type: "dog",
  "num legs": 4,
  numLegs: 4,
};

console.log(Object.keys(animal)); // [ 'id', 'name', 'type', 'num legs', 'numLegs' ]

console.log(Object.values(animal)); // [ 42, 'rawr', 'dog', 4, 4 ]

console.log(Object.entries(animal));
/*
[
  [ 'id', 42 ],
  [ 'name', 'rawr' ],
  [ 'type', 'dog' ],
  [ 'num legs', 4 ],
  [ 'numLegs', 4 ]
]
*/
