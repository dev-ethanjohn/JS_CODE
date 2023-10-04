const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: {
    pop: 38,
  },
};

const countryPopCopy = { ...countryPop };

console.log(countryPop); // { Germany: 83, Brazil: 212, Egypt: 102, Canada: { pop: 38 } }
console.log(countryPopCopy); // { Germany: 83, Brazil: 212, Egypt: 102, Canada: { pop: 38 } }

console.log("---------");

countryPop.Canada.capital = "Ottawa";

// BOTH countryPop and countryPopCopy are pointing to the same reference even after countryPop was modified while countryPopCopy havent been touched. NO DUPLICATE in MEMORY
console.log(countryPop);
/*
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: { pop: 38, capital: 'Ottawa' }
}
*/
console.log(countryPopCopy);
/*
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: { pop: 38, capital: 'Ottawa' }
}
*/
