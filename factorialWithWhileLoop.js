// factorial using while loop
function factorial(number) {
  let i = 1
  let fact = 1
  while (i <= number) {
    fact *= i
    i++
  }
  return fact
}

const number = 4
const fact = factorial(number)
console.log(number, '! =', fact)
