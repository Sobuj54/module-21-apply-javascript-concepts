// sum of numbers using function

function sumOfNumbers(range) {
  let sum = 0
  for (let i = 1; i <= range; i++) {
    sum += i
  }
  return sum
}
const range = 100
const sum = sumOfNumbers(range)
console.log(sum)
