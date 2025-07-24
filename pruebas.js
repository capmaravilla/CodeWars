function sumar(nums) {
  return nums.reduce((acc, el) => acc + el, 0)
}

const numeros = [1, 2, 3, 4, 5]
console.log(sumar(numeros))
