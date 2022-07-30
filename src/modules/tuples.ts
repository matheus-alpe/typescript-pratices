import { printWithType } from '../utils'

const employee: [number, string] = [1, 'Steve Jobs']
printWithType({employee})

const employeeNumber = employee[0]
printWithType({employeeNumber})

const employeeName = employee[1]
printWithType({employeeName})

const employeesName: [string, string] = ['Steve Jobs', 'Joachim Low']
printWithType({employeesName})

printWithType({employeesNameLength: employeesName.length})

employeesName.pop()
printWithType({employeesName})

employeesName.push('Pep Guardiola')
printWithType({employeesName})

const managers: [string, string] = ['Pep Guardiola', 'Joachim Low']
printWithType({managers})

managers[1] = 'Abel Ferreira'
printWithType({managers})