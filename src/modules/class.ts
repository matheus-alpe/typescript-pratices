import { printWithType } from '../utils'
import { Age, Date, Document, Player, Constants } from './shared'

class Person {
  protected name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private sing() {
    return console.log(`${this.name} is singin\n`)
  }

  usingPrivateMethod() {
    console.log(`Invoking private method sign`)
    this.sing()
  }
}

const camila = new Person('Camila Cabello', 25)
const selena = new Person('Selena Gomez', 29)

printWithType({
  persons: [camila, selena]
})

camila.usingPrivateMethod()
selena.usingPrivateMethod()

class FootballPlayer extends Person {
  private club: string
  
  constructor(name: string, age: number, club: string) {
    super(name, age)
    this.club = club
  }

  getPlayerClub() {
    return `I'm ${this.name} and I'm current playing for ${this.club}`
  }
}

const marta = new FootballPlayer('Marta', 36, 'Orlando Pride')
printWithType({ marta: marta.getPlayerClub() })

printWithType({ name: `${Constants.NAME} tem ${Constants.AGE} anos` })