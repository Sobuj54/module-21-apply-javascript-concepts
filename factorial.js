// factiorial using function

function factiorial(number) {
  let fact = 1
  for (let i = 1; i <= number; i++) {
    fact *= i
  }
  return fact
}

const number = 5
const fact = factiorial(number)
console.log(number, '! =', fact)
