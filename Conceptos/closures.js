export function translate2d(dx, dy) {
  return function (x, y) {
    return [dx + x, dy + y]
  }
}

const moveCoordinatesRight2Px = translate2d(2, 1)
const result1 = moveCoordinatesRight2Px(1, 1)
result1

export function scale2d(sx, sy) {
  return function (x, y) {
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

export function composeTransform2(f, g) {
  return function composed(x, y) {
    return g(...f(x, y))
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
function memoizeTransform(f) {
  // Aqui tenemos el resultado y argumentos previos
  let lastArgs = null
  let lastResult = null
  // Por si es la primera
  let hasBeenCalled = false

  return function (x, y) {
    // Si es la primera llamada o los argumentos han cambiado
    if (!hasBeenCalled || lastArgs[0] !== x || lastArgs[1] !== y) {
      // Cambiamos lastResult con el nuevo resultado
      lastResult = f(x, y)
      lastArgs = [x, y]
      // Marcamos que a ya no es la primera llamada
      hasBeenCalled = true
    }

    // retorna el resultado ( anterior o el que acabamos de generar)
    return lastResult
  }
}

export function memoizeTransform2(f) {
  let previousX, previousY, previousResult

  return function memoised(x, y) {
    if (previousX === x && previousY === y) {
      return previousResult
    }
    previousX = x
    previousY = y
    return (previousResult = f(x, y))
  }
}

const tripleScale = scale2d(3, 3)
const memoizedScale = memoizeTransform(tripleScale)(3, 3)

memoizedScale
