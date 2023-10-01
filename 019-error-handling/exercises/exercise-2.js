/*
    1. Assign the following object to a variable called "user":
        { name: "Misha", age: 22, settings: {colour: "blue"} }
    2. Log out "Creating user..."
    3. Try to log out: user.profile.colour
    4. Log out "User created!"
    5. Run the code and observe the behaviour

    6. How would you fix this code (without changing steps 1-4
       or the user Object)? Also, add any appropriate logging 
       you feel makes sense.
*/
try {
  const user = {
    name: "Misha",
    age: 22,
    settings: {
      colour: "blue",
    },
  };

  console.log("Creating user...");

  console.log(user.profile.colour);

  console.log("User created!");
} catch (error) {
  console.error(error);
}

console.log("Program Complete!");

// This is useful since if we require that the user has a profile property but it doesnt or is missing(here it is settings property), so we dont need to add that user to our system. thus we have to break it and proceed to the next user, yet here we will handle this error to make sure it will complete and will continue to the next user. That is why it is always good to catch any error so it wont crash ultimately the program

/* 
Creating user...
TypeError: Cannot read properties of undefined (reading 'colour')
...
Program Complete!
*/

// This code will log the error but continue to execute the "Program Complete!" message, demonstrating how error handling can prevent a program from crashing.
