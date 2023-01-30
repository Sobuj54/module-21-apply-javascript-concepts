// inch to feet conversion with function

function inchToFeet(inch) {
  const feet = inch / 12
  return feet
}

const dadaInch = 144
const dadaFeet = inchToFeet(dadaInch)
console.log('dadaInch:', dadaFeet)

// dadi inch
const dadiInch = 60
const dadiFeet = inchToFeet(dadiInch)
console.log('dadiFeet', dadiFeet)
