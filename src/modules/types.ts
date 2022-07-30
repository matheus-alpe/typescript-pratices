import { printWithType } from '../utils'
import { PlayerStatus } from './enums'

let age: string | number = 18
printWithType({age})

age = '26'
printWithType({age})

const hex: number = 0xf00d
printWithType({hex})

const someNum: number = 0.2
printWithType({someNum})

const binary: number = 0b1010
printWithType({binary})

const isMarriage: boolean = true
printWithType({isMarriage})

export type Player = {
  name: string
  height?: number
  weight?: number
  age?: number
  status?: PlayerStatus
}

const player: Player = {
  name: 'Neymar',
  height: 1.8,
  weight: 70
}

printWithType({player})
