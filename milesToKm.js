// converting miles to km using function

function milesToKm(miles) {
  const km = miles * 1.6
  return km
}

const miles = 60
const KM = milesToKm(miles)
console.log('kilometer:', KM)
