/*
    1. Create a Map called "mexico" with the following entries:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]

    2. Print out "mexico" to the terminal

    3. Change "id" to be 25

    4. Add "Honduras" to the list of neighbours to "mexico"
    
    5. Print out "mexico" to the terminal again
*/

const mexico = new Map();
mexico.set("id", 24);
mexico.set("name", "Mexico");
mexico.set("capital", "Mexico City");
mexico.set("neighbours", ["USA", "Guatemala", "Belize"]);

console.log(mexico);

mexico.set("id", 25);

// get is also use to access. The diff with set is that .set would attempt to change the values of the key. If you want only to modify like add or delete somethingin the array inside maps, use .get then array methods.
mexico.get("neighbours").push("Honduras");
console.log(mexico);
