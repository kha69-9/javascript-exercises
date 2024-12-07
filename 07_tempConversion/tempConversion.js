const convertToCelsius = function(tempInFahrenheit) {
  result = (tempInFahrenheit - 32) / 1.8
  return +result.toFixed(1);
};

const convertToFahrenheit = function(tempInCelsius) {
  result = (tempInCelsius * 1.8) + 32
  return +result.toFixed(1);
   
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
