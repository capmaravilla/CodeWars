function nextComb(n) {
  let cache = n.toString().split('').map(Number)
  for (let i = cache.length - 2; i >= 0; i--) {
    rango = cache.slice(i)
    rangoMax = cache.slice(i).sort((a, b) => b - a)
    if (rangoMax > rango) {
      return Number(
        cache.slice(0, i).join('') +
          rangoMax[0] +
          rangoMax.slice(1).sort().join('')
      )
    }
  }
  return -1
}

console.log(nextComb(12))
console.log(nextComb(315))
console.log(nextComb(4183))
console.log(nextComb(98))
console.log(nextComb(987654318))
