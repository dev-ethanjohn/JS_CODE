const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
};
const countryPopCopy = {
  Germany: 99,
  ...countryPop,
  Philippines: 114,
  Singapore: 6,
  Germany: 102,
};

console.log(countryPopCopy);
/*
{
  Germany: 102,
  Brazil: 212,
  Egypt: 102,
  Philippines: 114,
  Singapore: 6
}

*/
