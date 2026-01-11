class Persona {
  constructor(nombre, edad) {
    ;(this.nombre = nombre), (this.edad = edad)
  }
  hablar() {
    return 'Hablando...'
  }
}

david = new Persona('David', 45)

// console.log(david)
// console.log(david.hablar())

function fibo(n) {
  if (n < 2) {
    return n
  }
  return fibo(n - 1) + fibo(n - 2)
}

console.log(fibo(9))

function fibo2(n) {
  lista = [0, 1]
  while (lista.length < n + 1) {
    lista.push(lista[lista.length - 1] + lista[lista.length - 2])
  }
  return lista
}

// console.log(fibo2(10))
let sample2 = 'A-B-C'

function to_camel_case(text) {
  let cache = text.split(/[-_]/)
  for (let i = 1; i < cache.length; i++) {
    let capital = cache[i].charAt(0).toUpperCase() + cache[i].slice(1)
    cache[i] = capital
  }
  return cache.join('')
}

console.log(to_camel_case(sample2))

function fibonacciV1(num) {
  cache = [0, 1]
  for (let i = 2; i < num; i++) {
    const next = cache[cache.length - 2] + cache[cache.length - 1]
    console.log(next)
    cache.push(next)
  }
  return cache
}

const resultado = fibonacciV1(10)
console.log(resultado)

function fibo22(num) {
  if (num < 2) {
    return num
  }
  return fibo22(num - 1) + fibo22(num - 2)
}

const resultado2 = fibo22()
console.log(resultado2)
