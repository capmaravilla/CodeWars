function rec(nums) {
  return nums.reduce((acc, el) => acc + el, 0)
}

const nums = [1, 2, 3, 4, 5]

console.log(rec(nums))
