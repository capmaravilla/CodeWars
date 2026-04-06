function SerieFibonaci(l) {
  const cache = [0, 1];
  for (let i = 2; i < l; i++) {
    cache.push(cache[i - 2] + cache[i - 1]);
  }
  return cache;
}

const sfib = SerieFibonaci(9);
console.log(sfib);

function fibonacciNoRecursiva(nums) {
  const cache = [];
  for (let i = 0; i < nums; i++) {
    if (i < 2) {
      cache.push(i);
    } else {
      cache.push(cache[i - 2] + cache[i - 1]);
    }
  }
  return cache;
}

console.log(fibonacciNoRecursiva(9));

function fibonacciRecursiva(nums) {
  function fibNum(n) {
    if (n < 2) {
      return n;
    }
    return fibNum(n - 1) + fibNum(n - 2);
  }
  const cache = [];
  for (let i = 0; i < nums; i++) {
    cache.push(fibNum(i));
  }
  return cache;
}

console.log(fibonacciRecursiva(9));
