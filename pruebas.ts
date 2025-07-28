function sumar(a: number[]) {
  return a.reduce((acc, el) => acc + el, 0)
}

const numeros = [1, 2, 3, 4, 5]

console.log(sumar(numeros))

type Programador = {
  nombre: string
  edad: number
  activo?: boolean | null
}

let programador1: Programador = {
  nombre: 'David',
  edad: 48,
}

let programador2: Programador = {
  nombre: 'Nori',
  edad: 17,
  activo: null,
}

interface Persona {
  nombre: string
  edad: number
  activo?: boolean | null
}

let otro: Persona = {
  nombre: 'Otro',
  edad: 33,
}
