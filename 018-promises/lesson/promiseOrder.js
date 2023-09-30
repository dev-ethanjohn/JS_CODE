const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2nd to run");
    resolve("Last to run");
  }, 2000);
});

myPromise.then((resolvedValue) => {
  console.log("3rd to run");
  console.log(resolvedValue);
});

console.log("1st to run");
console.log(myPromise);

/*
1st to run
Promise { <pending> }
2nd to run
3rd to run
Last to run
*/
