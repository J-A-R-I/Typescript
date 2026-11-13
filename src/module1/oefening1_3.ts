function berekenBTW(bedrag: number, btwPercentage: number) {
  return (bedrag * btwPercentage) / 100;
}

function berekenTotaalMetBtw(bedrag: number, btwPercentage: number) {
  return bedrag + berekenBTW(bedrag, btwPercentage);
}
function maakFactuurRegel(productNaam: string, prijs: number, aantal: number) {
  const subtotal: number = prijs * aantal;

  return `${aantal}x ${productNaam} aan ${prijs.toFixed(2)} = ${subtotal.toFixed(2)}`;
}

console.log(berekenBTW(100, 21));
console.log(berekenBTW(200, 6));

console.log(berekenTotaalMetBtw(100, 21));
console.log(berekenTotaalMetBtw(200, 6));

console.log(maakFactuurRegel("Laptop", 999.99, 3));
console.log(maakFactuurRegel("Muis", 25.5, 2));
