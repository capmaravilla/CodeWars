/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let count = 0
  //stack.forEach((x) => {x === card ? count++ : count})
  stack.forEach((x) => {
    count += x === card ? 1 : 0
  })

  return count
}

const cardType = 1
console.log(cardTypeCheck([1, 2, 3, 4], cardType))
// => 1

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let count = 0
  // for (let card of stack) {
  //   console.log(card)
  //   if (card % 2 === 0 && type) {
  //     count++
  //   }
  //   if (card % 2 !== 0 && !type) {
  //     count++
  //   }
  // }
  const rest = type ? 0 : 1
  for (let card of stack) {
    if (card % 2 === rest) {
      count++
    }
  }
  return count
}

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true))
// => 2

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false))
// => 4
