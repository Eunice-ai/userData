// let productss = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const totalPrice = productss
// .filter(item => typeof item.price === 'number' && !isNaN(item.price))
// .map(item => parseFloat(item.price))
// .reduce((acc, price) => acc + price, 0);

// console.log(totalPrice)

// const totalPric = productss.reduce((acc, product) => {
//   const price = parseFloat(product.price)

//   if (!isNaN(price)) {
//     return acc + price
//   }
//   return acc
// }, 0)

// console.log(totalPric)

// const categorizeCountries = () => {
//   let fillx = countries.filter(countryWith => countryWith.toLowerCase().includes('land'))
//   console.log(fillx)
// }

// categorizeCountries()

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

const countriesFirstLetter = (countries) => {
  const letterCount = {};

  for (const country of countries) {
    const firstLetter = country[0].toUpperCase();
    
    letterCount[firstLetter] = (letterCount[firstLetter] || 0) + 1;
    
  }

  const result = Object.entries(letterCount).map(([letter, count]) => ({letter, count,}))

  return result;
}

console.log(countriesFirstLetter(countries))