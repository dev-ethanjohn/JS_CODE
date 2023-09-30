let characters = ["Frodo", "Harry", "Thanos", "Ben"];

for (i = 0; i < characters.length; i++) {
  characters[i] = characters[i].toUpperCase();
}

console.log(characters); // [ 'FRODO', 'HARRY', 'THANOS', 'BEN' ]

// WE CAN USE THIS .MAP()
// const charrui = characters.map((character) => {
//   return character.toUpperCase();
// });

// console.log(charrui); // [ 'FRODO', 'HARRY', 'THANOS', 'BEN' ]

// console.log("----------------");

for (let character of characters) {
  //   console.log(character);
  character = character.toUpperCase();
  console.log(character);
  /*
  FRODO
HARRY
THANOS
BEN
  */
}

console.log(characters); //

/*
FRODO
HARRY
THANOS
BEN */
