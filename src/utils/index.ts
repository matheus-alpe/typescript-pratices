export function printWithType(value: Object) {
  const valueTypeFromKey = value[Object.keys(value)[0]] 
  console.log(`${typeof valueTypeFromKey}:`, value)
}