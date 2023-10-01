const message = "hello";
try {
  console.log(message);
  throw new Error("Oh no!");
} catch (error) {
  console.error(error);
  console.error(message);
}

console.log("Program Complete!");

/*
hello
Error: Oh no!

hello
Program Complete!
*/
