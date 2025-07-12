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

function cuenta(inicio, fin) {
  if (inicio === fin) {
    return inicio;
  }
  return [inicio].concat(cuenta(inicio + 1, fin));
}

const fiboSequence = (n) => {
  const seq = [];
  for (let i = 0; i < n; i++) {
    seq.push(fibo(i));
  }
  return seq;
};

// * ------------------------
const sequence = [];
const iterations = 10;
const fibonacciRecursive = (sequence) => {
  if (sequence.length < 1) sequence.push(0);
  sequence.length < 2
    ? sequence.push(1)
    : sequence.push(
        sequence[sequence.length - 1] + sequence[sequence.length - 2]
      );
  if (sequence.length === iterations) {
    return sequence.toString();
  }
  return fibonacciRecursive(sequence);
};

console.log(fibonacciRecursive(sequence));
