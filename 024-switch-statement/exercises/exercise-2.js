/*
    1. Create a variable called "enemies" that points at the Object:
       {
        rat: { atk: 3, def: 2, hp: 20, class: 1 },
        goblin: { atk: 10, def: 6, hp: 50, class: 1 },
        troll: { atk: 30, def: 20, hp: 200, class: 2 },
        giant: { atk: 50, def: 40, hp: 500, class: 2 },
       }

    2. Create a loop that loops over "enemies" and inside the loop use
       a switch statement on the "class" property that has these cases:
       - 1: print out only "This is an easy fight"
       - 2: print out only "This will require some training"
       - Otherwise only print out "Not implemented yet..."

    3. Run the code and make sure the correct messages get printed out
*/
const enemies = {
  rat: { atk: 3, def: 2, hp: 20, class: 1 },
  goblin: { atk: 10, def: 6, hp: 50, class: 1 },
  troll: { atk: 30, def: 20, hp: 200, class: 2 },
  giant: { atk: 50, def: 40, hp: 500, class: 2 },
};

// Use for in loop to iterate nested objects inside an object
for (const enemyName in enemies) {
  // class is a reserve keyword, thus remaining it by mentioninin the keyname + ":" + new name
  const { atk, def, hp, class: enemyClass } = enemies[enemyName];
  switch (enemyClass) {
    case 1: {
      console.log(`This is an easy fight against ${enemyName}`);
      break;
    }
    case 2: {
      console.log(`This will require some training to beat the ${enemyName}`);
      break;
    }
    default:
      console.log(enemyClass);
      console.log("Not implemented yet...");
      break;
  }
}

/*
This is an easy fight against rat
This is an easy fight against goblin
This will require some training to beat the troll
This will require some training to beat the giant
*/

//NOTE: fOR IN loop is good for iterating over the keys and values of an object
// NOTE: for of loop with Object. is useful for specific requirements. Example:
/*
for (const enemy of Object.values(enemies)) {
  const { atk, def, hp, class: enemyClass } = enemy;
  // ...
}

*/
