const cities = ["Vancouver", "Berlin", "Seattle", "Toronto"];

const concatCities = cities.reduce((concatstrings, city) => {
  if (city === "Vancouver") {
    return concatstrings; // Berlin-Seattle-Toronto- (removed Vancouver since the initial value of concatStrings = "");
  }
  // return city = "Toronto" or the last item in the array;
  return concatstrings + city + "-";
}, "");

console.log(concatCities); // Berlin-Seattle-Toronto-
