import { printWithType } from "../utils"

function displaySomethingConcatenated<T>(something: T[]): void {
  console.log(something.join(', '))
}

displaySomethingConcatenated<string>(['Matheus', 'Paula'])
displaySomethingConcatenated<number>([1, 2, 3])


function displaySomeValue<T>(value: T): T {
  return value
}

console.log(displaySomeValue(2))
console.log(displaySomeValue<string>('Matheus'))

function identity<T, U>(value: T, message: U): T {
  console.log('Vai exibir no console, apenas isso:', message)
  return value
}

const number = identity<number, string>(100, 'Hello')
printWithType({number})


interface Identity<T, U> {
  value: T
  message: U
}

let returnNumber: Identity<number, string> = {
  value: 40,
  message: 'Hello'
}
printWithType({returnNumber})

let returnMessage: Identity<string, string> = {
  value:  'Brazil',
  message: 'Hello from Brazil'
}
printWithType({returnMessage})
