// checking even number using function

function isEven(number) {
  if (number % 2 == 0) {
    return true
  } else return false
}

const number = 11
const even = isEven(number)
console.log('is even :', even)
