// find sum of odd number in an array

function oddSum(number) {
  var sum = 0
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 != 0) {
      sum += number[i]
    }
  }
  return sum
}

// declaring array
var array = [22, 35, 23, 54, 64, 23, 101]
const sum = oddSum(array)
console.log(sum)
