// leap year with function

function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true
  } else {
    return false
  }
}

const year = 2022
const leapYear = isLeapYear(year)
console.log('is leap year :', leapYear)
