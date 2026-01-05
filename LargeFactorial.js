function factorial(n) {
  let cache = 1
  for (let i = 2; i <= n; i++) {
    cache = cache * i
  }
  return BigInt(cache).toString()
}
