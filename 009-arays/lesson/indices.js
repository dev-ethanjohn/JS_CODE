const animals = ["monkey", "dog", "cat", "koala", "elephant"];
console.log(animals);

const monkey = animals[0];
console.log(monkey); // monkey

const koala = animals[animals.length - 2];
console.log(koala); // koala

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

/*
monkey
dog
cat
koala
elephant
*/
