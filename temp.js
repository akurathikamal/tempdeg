function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}
const celsiusTemp = 30;
console.log(`${celsiusTemp}°C is equal to ${celsiusToFahrenheit(celsiusTemp)}°F`);

