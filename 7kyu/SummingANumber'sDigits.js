// * -------------------------------------------------------------------
// * Summing a number's digits - 7kyu
// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
// * -------------------------------------------------------------------

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, el) => +acc + +el, 0);
  // TODO un + delante para pasarlo a numero
}

function sumDigits1(number) {
  let sum = 0;
  for (const digit of Math.abs(number).toString()) {
    sum += +digit;
  }
  return sum;
}

console.log(sumDigits(-99));
