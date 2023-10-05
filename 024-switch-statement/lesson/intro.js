const animal = "Tiger";

// switch ("Monkey")
switch (animal) {
  case "Tiger": {
    console.log("You are a tiger!");
    // break;
  }

  case "Koala":
  case "Monkey": {
    console.log("The best animal!");
    // break;
  }
  // like else block
  default: {
    console.log("Must be something else!");
    break;
  }
}

console.log("All done!");

// Note: Swtch is more useful for primitive values.
