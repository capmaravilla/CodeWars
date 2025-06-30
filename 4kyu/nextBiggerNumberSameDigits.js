// * -------------------------------------------------------------------
// * Next bigger number with the same digits - 4kyu
// https://www.codewars.com/kata/55983863da40caa2c900004e
// * -------------------------------------------------------------------

function nextBigger(n) {
  let cache = n.toString().split('').map(Number)
  for (let i = cache.length - 2; i >= 0; i--) {
    let rang = cache.slice(i)
    let rangMax = cache.slice(i).sort((a, b) => b - a)

    console.log(rang)
    console.log(rangMax)
    let tail = [...rang].sort()
    console.log(tail)

    let n = tail.splice(1,1)
    console.log(tail)
    console.log(n)

    if (rangMax > rang) {

      console.log(cache.slice(0,i))
      console.log(rang)
      console.log(tail)
      console.log(cache.slice(0, i).join('') + ' '+ n + ' '+ tail.join(''))

      return Number(cache.slice(0, i).join('') + n + tail.join(''))

    }
  }
  return -1
}

// * -------------------------------------------------------------------

console.log(nextBigger(34494251))
// console.log(nextBigger(7495))
// console.log(nextBigger(2017)) //2071
// console.log(nextBigger(414)) //441
// console.log(nextBigger(144)) //414
