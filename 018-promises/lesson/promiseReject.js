const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello my friend!");
    reject("Sorry, no ice cream for you!");
  }, 2000);
});

myPromise
  .then((resolvedValue) => {
    console.log("promise seems to be done!");
    console.log(resolvedValue);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Hello?");
console.log(myPromise);

/*
Hello?
Promise { <pending> }
Hello my friend!
Sorry, no ice cream for you!
*/
