// * -------------------------------------------------------------------
// * Vowel Count - 7kyu
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
// * -------------------------------------------------------------------

function getCount(str) {
  count = 0;
  for (let i of str.toLowerCase()) {
    if ("aeiou".includes(i)) {
      count += 1;
    }
  }
  return count;
}

// * -------------------------------------------------------------------

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
// TODO Expresion regular que devuelve elementos buscados

// * -------------------------------------------------------------------

console.log(getCount("abracadabra"));
