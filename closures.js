export function translate2d(dx, dy) {
  return function aux(x, y) {
    return [dx + x, dy + y]
  }
}

const moveCoordinatesRight2Px = translate2d(2, 0)
const result1 = moveCoordinatesRight2Px(1, 1)
result1

export function scale2d(sx, sy) {
  return function aux(x, y) {
    return [sx * x, sy * y]
  }
}

const doubleCoordinates = scale2d(2, 2)
const result2 = doubleCoordinates(4, 2)
result2

// *(0, 1) → moveCoordinatesRight2Px → (2, 1) → doubleCoordinates → (4, 2) ✓

export function composeTransform(fn1, fn2) {
  return function (x, y) {
    // primero aplicamos g y luego f al resultado
    const [tempX, tempY] = fn1(x, y)
    return fn2(tempX, tempY)
  }
}

const composedTransformations = composeTransform(
  moveCoordinatesRight2Px,
  doubleCoordinates
)

const result3 = composedTransformations(0, 1)
// result => [4, 2]
result3

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  throw new Error('Remove this line and implement the function')
}
