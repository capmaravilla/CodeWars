// * -------------------------------------------------------------------
// * Summing a number's digits - 7kyu
// https://www.codewars.com/kata/555eded1ad94b00403000071/javascript
// * -------------------------------------------------------------------

function seriesSum(n) {
  cache = 0;
  d = 1;
  for (let i = 0; i < n; i++) {
    console.log(i);
    cache += 1 / d;
    d += 3;
  }
  return cache.toFixed(2);
}

// * -------------------------------------------------------------------

function SeriesSum1(n) {
  for (let s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }
  return s.toFixed(2);
}

// * -------------------------------------------------------------------

function SeriesSum2(n, s = 0) {
  return n ? SeriesSum2(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2);
}

// * -------------------------------------------------------------------

console.log(seriesSum(3));
