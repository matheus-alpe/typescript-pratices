import { printWithType } from '../utils'
import { Player } from './types'
import { PlayerStatus } from './enums'

const footballPlayer = {
  name: 'Neymar',
  age: 30,
  club: 'Psg',
  sayHello() {
    return this.name + ' says: Oi!'
  }
}

printWithType({ playerName: footballPlayer.name, message: footballPlayer.sayHello() })

const person = {
  name: 'Matheus',
  skills: ['Javascript', 'Typescript', 'Vue', 'Git']
}
printWithType({person})

const kdb: Player = {
  name: 'Kevin de Bruyne',
  age: 30,
  status: PlayerStatus.available
}
printWithType({ player: kdb })