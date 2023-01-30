// making array of odd number from another array

function oddNumberArray(number) {
  const arr = []
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 != 0) {
      arr.push(number[i])
    }
  }
  return arr
}

const array = [22, 25, 45, 82, 75, 45, 63]
const newArray = oddNumberArray(array)
console.log(newArray)
