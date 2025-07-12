function fibo(n) {
  if (n < 2) return n;
  return fibo(n - 2) + fibo(n - 1);
}

function fiboVer2(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

const a = 5;

console.time("fib");
console.log(fibo(a));
console.timeEnd("fib");

console.time("fib2");
console.log(fiboVer2(1476));
console.timeEnd("fib2");
