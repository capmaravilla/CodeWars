// * -------------------------------------------------------------------
// * Array Helpers - 6kyu
// https://www.codewars.com/kata/525d50d2037b7acd6e000534/javascript
// * -------------------------------------------------------------------

// Aqui lo hace uno por uno

Array.prototype.square = function () {
  return this.map((a) => a ** 2)
}
Array.prototype.cube = function () {
  return this.map((a) => a ** 3)
}
Array.prototype.average = function () {
  return this.sum() / this.length
}
Array.prototype.sum = function () {
  return this.reduce((acc, el) => acc + el, 0)
}
Array.prototype.even = function () {
  return this.filter((a) => a % 2 === 0)
}
Array.prototype.odd = function () {
  return this.filter((a) => a % 2 !== 0)
}

// * ----------------------------------------------------------
// TODO built-in classes usando Object.assign

Object.assign(Array.prototype, {
  square() {
    return this.map((n) => n * n)
  },
  cube() {
    return this.map((n) => Math.pow(n, 3))
  },
  sum() {
    return this.reduce((p, n) => p + n, 0)
  },
  average() {
    return this.reduce((p, n) => p + n, 0) / this.length
  },
  even() {
    return this.filter((n) => !(n % 2))
  },
  odd() {
    return this.filter((n) => n % 2)
  },
})

// * ----------------------------------------------------------

// var numbers = [1, 2, 3, 4, 5]

// console.log(numbers.square())
// // must return [1, 4, 9, 16, 25]
// console.log(numbers.cube())
// // must return [1, 8, 27, 64, 125]
// console.log(numbers.average())
// // must return 3
// console.log(numbers.sum())
// // must return 15
// console.log(numbers.even())
// // must return [2, 4]
// console.log(numbers.odd())
// // must return [1, 3, 5]
