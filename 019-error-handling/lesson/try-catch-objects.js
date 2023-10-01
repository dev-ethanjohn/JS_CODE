try {
  const user = {
    name: "Alex",
    age: 21,
    // profile: {
    //   colour: "blue",
    // },
  };
  console.log(user.profile.colour);
  // We do not intentionally throw an error, it is unpexted error based on our failed assumptions
  // user.undefined.colour
  console.log("Do I get here?");
} catch (error) {
  console.log("something bad happened.."); // something bad happened..
  console.error(error);
}

// blue
