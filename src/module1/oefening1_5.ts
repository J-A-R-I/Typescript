function celsiusNaarFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitNaarCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

function celsiusNaarKelvin(celsius: number): number {
  return celsius + 273.15;
}

function kelvinNaarCelsius(kelvin: number): number {
  return kelvin - 273.15;
}

function toonConversie(
  waarde: number,
  vanEenheid: string,
  naarEenheid: string,
  resultaat: number,
): string {
  return `${waarde}${vanEenheid} = ${resultaat}${naarEenheid} \n`;
}

function isKoude(celsius: number): boolean {
  return celsius < 10;
}

console.log(toonConversie(0, "°C", "°F", celsiusNaarFahrenheit(0)));
console.log(toonConversie(100, "°C", "°F", celsiusNaarFahrenheit(100)));
console.log(toonConversie(37, "°C", "°F", celsiusNaarFahrenheit(37)));

console.log(toonConversie(32, "°F", "°C", fahrenheitNaarCelsius(32)));
console.log(toonConversie(212, "°F", "°C", fahrenheitNaarCelsius(212)));
console.log(toonConversie(98.6, "°F", "°C", fahrenheitNaarCelsius(98.6)));

console.log(toonConversie(0, "°C", "K", celsiusNaarKelvin(0)));
console.log(toonConversie(100, "°C", "K", celsiusNaarKelvin(100)));
console.log(toonConversie(37, "°C", "K", celsiusNaarKelvin(37)));

console.log(toonConversie(273.15, "K", "°C", kelvinNaarCelsius(273.15)));
console.log(toonConversie(373.15, "K", "°C", kelvinNaarCelsius(373.15)));
console.log(toonConversie(310.15, "K", "°C", kelvinNaarCelsius(310.15)));

console.log(isKoude(5));
console.log(isKoude(15));
