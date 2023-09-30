const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello my friend");
    // took 5 seconds to load the string in the console
  }, 5000);
});

// This will be executed first
console.log("Hello");
console.log(myPromise);

// CONSOLE result
/*
Hello
Promise { <pending> }
Hello my friend
*/

//
