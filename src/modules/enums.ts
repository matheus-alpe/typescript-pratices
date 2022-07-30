import { printWithType } from '../utils'

enum State {
  Winning = 0,
  Losing = 1,
  Tied = 2
}
printWithType({ state: State.Winning })


enum StateMessage {
  Winning = 'Winning',
  Losing = 'Losing',
  Tied = 'Tied'
}
printWithType({ StateMessage: StateMessage['Losing'] })

enum StateHeterogeneous {
  Winning = 0,
  Losing = 'Losing',
  Tied = 2
}
printWithType({ StateHeterogeneous: [StateHeterogeneous.Losing, StateHeterogeneous.Tied] })
