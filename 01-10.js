// * -------------------------------------------------------------------
// * Next bigger number with the same digits - 4kyu
// https://www.codewars.com/kata/55983863da40caa2c900004e
// * -------------------------------------------------------------------
function nextBigger(n) {
  let cache = n.toString().split('').map(Number)
  for (let i = cache.length - 2; i >= 0; i--) {
    let rang = [...cache].slice(i)
    let rangMax = [...cache].slice(i).sort((a, b) => b - a)
    if (rangMax > rang) {
      let sortTail = [...rang].sort()
      let unique = new Set(sortTail)
      unique = [...unique]
      let idx = unique.indexOf(rang[0])
      let n = unique[idx+1]
      sortTail.splice(sortTail.indexOf(n),1)
      return Number(cache.slice(0, i).join('') + n + sortTail.join(''))
    }
  }
  return -1
}

// * -------------------------------------------------------------------

console.log(nextBigger(34494251))
//                     34494215 to equal
//                     34494512
// console.log(nextBigger(7495))
//                             7549
// console.log(nextBigger(2017)) //2071
// console.log(nextBigger(414)) //441
// console.log(nextBigger(144)) //414

// * -------------------------------------------------------------------

// let num = [4,9,5]
// num.sort()
// console.log(num)
