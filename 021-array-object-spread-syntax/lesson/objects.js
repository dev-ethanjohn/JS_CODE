const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
};

console.log(countryPop); // { Germany: 83, Brazil: 212, Egypt: 102 }

// USING FOR OF LOOP
// Object.entries() make it iterable
const countryPopExtendedForOfLoop = {};
for (const [key, value] of Object.entries(countryPop)) {
  countryPopExtendedForOfLoop[key] = value;
}
console.log(countryPopExtendedForOfLoop); // { Germany: 83, Brazil: 212, Egypt: 102 }
countryPopExtendedForOfLoop.Philippines = 114;
countryPopExtendedForOfLoop["Singapore"] = 6;
console.log(countryPopExtendedForOfLoop);
/*
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Philippines: 114,
  Singapore: 6
}
*/

// USING SPREAD OPERATOR
const countryPopExtendedSpread = {
  ...countryPop,
  Philippines: 114,
  Singapore: 6,
};

console.log(countryPopExtendedSpread);
/*
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Philippines: 114,
  Singapore: 6
}
*/
