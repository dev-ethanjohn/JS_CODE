// const monkey = {
//   name: "Abu",
//   species: "Capuchin",
//   hobbies: ["stealing"],
// };

// const printMonkey = () => {
//   console.log(monkey.name);
// };

// // to access files in another file

// // Only do the default once
// export default printMonkey;
// export { monkey };

//monkey.js
const monkey = {
  name: "Abu",
  species: "Capuchin",
  hobbies: ["stealing"],
  age: 10,
};

const tiger = "Rajah";

const printMonkey = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      monkey.age++;
      //   console.log(monkey);
      resolve(monkey);
    }, 2000);
  });
};

console.log("First");
// const monkeyExecute = async () => {
const monkeyAwait = await printMonkey();
//   return monkeyAwait;
// };

export { monkeyAwait };
export default printMonkey;
