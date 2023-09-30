const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello my friend!");
    // if I flip over and run first reject, then only the .catch() woll be executed gving us reject value.
    resolve("Here is your ice cream!");
    reject("Sorry, no ice cream left!");
  }, 2000);
});

myPromise

  .then((resolvedValue) => {
    console.log("promise is made");
    console.log(resolvedValue);
    console.log(myPromise);
    return "yo!";
  })
  .then((returnValue) => {
    console.log(returnValue);
  })
  .catch((error) => {
    console.log(error);
    console.log(myPromise);
  });

console.log("Hello?");
console.log(myPromise);

/*
Hello?
Promise { <pending> }
Hello my friend!
promise is made
Here is your ice cream!
Promise { 'Here is your ice cream!' }
yo!
*/

// If Rejected
/*
Hello?
Promise { <pending> }
Hello my friend!
Sorry, no ice cream left!
Promise { <rejected> 'Sorry, no ice cream left!' }
*/
