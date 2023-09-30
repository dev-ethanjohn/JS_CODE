const orderIceCream = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Here is your order, thank you!");
  }, 2000);
});

// .then() indicates resolve or fulfill
orderIceCream.then((fulfilledOrder) => {
  console.log(fulfilledOrder);
});

console.log("Hi, what is your order?");
console.log(orderIceCream);

/*
    Hi, what is your order?
    Promise { <pending> }
// EXECUTED after 2 seconds
    Here is your order, thank you!
 */

// Note: Using .catch (will not execute the code in the future)
