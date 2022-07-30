import { printWithType } from '../utils'

interface FootballClub {
  readonly name: string;
  age?: number;
}

const arsenal: FootballClub = {
  name: 'Arsenal',
  age: 136
}
printWithType({arsenal})