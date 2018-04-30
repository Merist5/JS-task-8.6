var a = 15;
var b = 7;
var value = (a * a) - (2 * a * b) - (b * b);


if (value > 0) {
  console.log('Wynik dodatni');
} else if (value < 0) {
  console.log('Wynik ujemny');
} else if (value === 0) {
  console.log('Wynik równy zero');
} else if (isNaN(value)) {
  console.log('Wynik nie jest numerem');
}