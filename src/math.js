export function add(...rest) {
  return rest.reduce((sum, cur) => {
    return sum + cur
  })
}
