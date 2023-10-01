try {
  const message = "hello there!";
  console.log(message); // hello there!
  // throw new Error("boom!") --> Error: boom!  (no execution after this line with the error constructor object)
  throw "boom"; // boom
  // access error in the try block and gets printed/executed
  // the catch acts like a function that accept an error name as argument then is called.
} catch (error) {
  console.error(error);
  console.error("caught!"); // caught! (WILL RUN)
}

console.log("Hello"); // Hello (WILL RUN)

/*
hello there!
boom
caught!
Hello
*/
