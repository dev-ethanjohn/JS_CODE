const stockItem = {
  id: 54,
  price: 1.32,
  name: "Apple",
  quantity: 6,
};

// Object is not iterable. So, intead convert first the object to an Array
for (const item of stockItem) {
  console.log(item);
}
const newArray = Object.entries(stockItem);
console.log(newArray);
/*
[
  [ 'id', 54 ],
  [ 'price', 1.32 ],
  [ 'name', 'Apple' ],
  [ 'quantity', 6 ]
]
*/

for (const item of newArray) {
  console.log(item);
}

// OR BETTER use this

for (const item of Object.entries(stockItem)) {
  console.log(item);
}
/*
[ 'id', 54 ]
[ 'price', 1.32 ]
[ 'name', 'Apple' ]
[ 'quantity', 6 ]

*/
