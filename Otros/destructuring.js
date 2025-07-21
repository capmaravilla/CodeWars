// * Array destructuring
const numberOfMoons = [0, 2, 14]
const [venus, mars, neptune] = numberOfMoons

venus
mars
neptune

// * Object destructuring

const weather = {
  sun: '☀️',
  sun_behind_small_cloud: '🌤️',
  sun_behind_cloud: '⛅',
  sun_behind_large_cloud: '🌥️',
  sun_behind_rain_cloud: '🌦️',
  cloud: '☁️',
  cloud_with_rain: '🌧️',
  cloud_with_snow: '🌨️',
  cloud_with_lightning: '🌩️',
  cloud_with_lightning_and_rain: '⛈️',
}

// Con las llaves le decimos que del objeto obtenga estas claves,
// si obteniesemos los valores de un array usariamos corchetes.

const { sun, cloud, cloud_with_lightning: thunder } = weather

sun
cloud
thunder

console.log(typeof sun)

//* Ejercicios

function getFirstCard(deck) {
  const [first] = deck
  return first
}

function getSecondCard(deck) {
  const [first, second] = deck
  return second
}

function swapTwoCards(deck) {
  const [first, second] = deck
  return [second, first]
}

function shiftThreeCardsAround(deck) {
  const [first, second, third] = deck
  return [second, third, first]
}

function pickNamedPile(piles) {
  const { chosen } = piles
  return chosen
}

function swapNamedPile(piles) {
  const { chosen: disregarded, disregarded: chosen } = piles
  return { chosen, disregarded }
}
