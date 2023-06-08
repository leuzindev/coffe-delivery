export function humanizeValue(value: number) {
  return value.toFixed(2).replace('.', ',')
}
