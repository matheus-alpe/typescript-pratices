import { printWithType } from '../utils'
import { Player } from './types'

const cities: string[] = ['Liverpool', 'Mexico City']
printWithType({cities})

const states: Array<string> = ['São Paulo', 'Santa Catarina']
printWithType({states})

const numbers: Array<number> = [1, 2, 3, 4, 5]
printWithType({numbers})

const namesAndAges: (string | number)[] = ['Camavinga', 12, 'Rodrygo', 21, 'Vini Júnior', 21]
printWithType({namesAndAges})

const otherCities: string[][] = [
  ['São Paulo', 'Rio de Janeiro', 'Fortaleza'],
  ['London', 'Liverpool', 'Manchester'],
]
printWithType({otherCities})

const players: Player[] = [
  { name: 'Neymar', height: 1.8, weight: 70 },
  { name: 'Mbappé', height: 1.9, weight: 73 },
]
printWithType({otherCities})
