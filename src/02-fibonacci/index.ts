export function fibonacci(n: number) {
  if (n <= 0) {
    return []
  }

  let fibonaciiArray = [0, 1]

  if (n == 1) {
    return [0]
  }

  for (let i = 2; i < n; i++) {
    let next = fibonaciiArray[i - 2] + fibonaciiArray[i - 1]
    fibonaciiArray.push(next)
  }

  return fibonaciiArray
}
