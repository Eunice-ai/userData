const productss = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const totalPrice = productss
.filter(item => typeof item.price === 'number' && !isNaN(item.price))
.map(item => parseFloat(item.price))
.reduce((acc, price) => acc + price, 0);

console.log(totalPrice)