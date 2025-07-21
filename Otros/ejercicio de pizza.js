const prices = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2,
}

export function pizzaPrice(pizza, ...extras) {
  let dollars = prices[pizza]
  for (let extra of extras) {
    if (extra === 'ExtraSauce') {
      dollars += 1
    } else {
      dollars += 2
    }
  }
  return dollars
}

export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (result, order) => result + pizzaPrice(order.pizza, ...order.extras),
    0
  )
}

export function orderPrice(pizzaOrders) {
  let total = 0
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras)
  }
  return total
}

export function orderPrice(pizzaOrders) {
  let dollars = 0
  for (let i of pizzaOrders) {
    dollars += prices[i.pizza]
    for (let j of i.extras) {
      if (j === 'ExtraSauce') {
        dollars += 1
      } else {
        dollars += 2
      }
    }
  }
  return dollars
}
