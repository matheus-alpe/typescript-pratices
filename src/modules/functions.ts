import { printWithType } from '../utils'
import { Player } from './types'

function printWithConsole(player: Player): void {
  console.log(`${player.name} has the following: \nHeight: ${player.height} \nWeight: ${player.weight}`)
}

const neymar: Player = {
  name: 'Neymar',
  height: 90.2,
  weight: 60.3,
  age: 30
}

printWithConsole(neymar)

function sum(num1: number, num2: number): number {
  return num1 + num2
}

printWithType({ sum: sum(3, 2) })

function sumAndReturnString(num1: number, num2: number): string {
  const sum = num1 + num2
  return `the result of this sum is: ${sum}`
}
printWithType({ sumAndReturnString: sumAndReturnString(3, 2) })

function printPlayer(name: string, age?: number): void {
  if (!age) {
    return console.log(`Hello ${name} I don't know your age :(`)
  }

  return console.log(`The age of ${name} is ${age}`)
}

printPlayer(neymar.name)
printPlayer(neymar.name, neymar.age)

function playerWithDefaultAge(name: string, age: number = 20): void {
  console.log(`The age of ${name} is ${age}`)
}

playerWithDefaultAge('Matheus')