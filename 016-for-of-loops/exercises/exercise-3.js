/*
    1. Create a Map called "backpack" and add the following entries:
        - 1 => {name: "Sword", value: 300}
        - 2 => {name: "Banana", value: 5}
        - 3 => {name: "Gold Nugget", value: 10000}
        - 4 => {name: "Pants", value: 100}

    2. Use a for-of loop to loop over "backpack" and print out
       the name and the value for each item in the following format:
       Name: $Value
       For example: Sword: $300

    3. Also print out the total value of all items in the backpack
*/

// const backpack = new Map();
// backpack.set("Sword", 300);
// backpack.set("Banana", 5);
// backpack.set("Gold Nugget", 10000);
// backpack.set("Pants", 100);

// console.log(backpack);
/*
Map(4) {
  'Sword' => 300,
  'Banana' => 5,
  'Gold Nugget' => 10000,
  'Pants' => 100
}
*/

// for (const [name, value] of backpack) {
//   console.log(`${name}: $${value}`);
// }

// /*
// Sword: $300
// Banana: $5
// Gold Nugget: $10000
// Pants: $100
// */

// let totalValue = 0;
// for (const [name, value] of backpack) {
//   totalValue += value;
// }
// console.log(`Total Value: $${totalValue}`);

const backpack = new Map();
// object inside a set. We associate keys that are complex like objects. So map is more appropriate here
// numeric keys 1-4, and object as value
backpack.set(1, { name: "Sword", value: 300 });
backpack.set(2, { name: "Banana", value: 5 });
backpack.set(3, { name: "Gold Nugget", value: 10000 });
backpack.set(4, { name: "Pants", value: 100 });

console.log(backpack);
/*
Map(4) {
  1 => { name: 'Sword', value: 300 },
  2 => { name: 'Banana', value: 5 },
  3 => { name: 'Gold Nugget', value: 10000 },
  4 => { name: 'Pants', value: 100 }
}
*/

let totalValue = 0;

for (const [key, item] of backpack) {
  console.log(`${item.name}: $${item.value}`);
  totalValue += item.value;
}
/*
Sword: $300
Banana: $5
Gold Nugget: $10000
Pants: $100
*/

console.log(`Total Value: $${totalValue}`); //Total Value: $10405
