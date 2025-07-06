// * -------------------------------------------------------------------
// * Replace With Alphabet Position - 6kyu
// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript
// * -------------------------------------------------------------------

function alphabetPosition(text) {
  const cache = [];
  for (const el of text.toLowerCase()) {
    if (el.charCodeAt(0) - 96 > 0 && el.charCodeAt(0) - 96 < 27) {
      cache.push(el.charCodeAt(0) - 96);
    }
  }
  return cache.join(" ");
}

// * -------------------------------------------------------------------

function alphabetPosition1(text) {
  const cache = [];
  for (const el of text.toLowerCase()) {
    const code = el.charCodeAt(0) - 96;
    if (code > 0 && code < 27) {
      cache.push(el.charCodeAt(0) - 96);
    }
  }
  return cache.join(" ");
}

// * -------------------------------------------------------------------

function alphabetPosition2(text) {
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(" ");
}

// * -------------------------------------------------------------------

const text = "Dave Wonderthing 2";
console.log(alphabetPosition(text));
console.log(alphabetPosition1(text));
console.log(alphabetPosition2(text));
