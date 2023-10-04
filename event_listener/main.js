// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   alert('We can attach event on HTML element')
// })

// const mass = document.querySelector('#mass')
// const height = document.querySelector('#height')
// const button = document.querySelector('button')

// let bmi
// button.addEventListener('click', () => {
//   bmi = mass.value / height.value ** 2
//   alert(`your bmi is ${bmi.toFixed(2)}`)
//   console.log(bmi)
// })

// const input = document.querySelector('input')
// const p = document.querySelector('p')

// input.addEventListener('input', e => {
//   p.textContent = e.target.value
// })

// input.addEventListener('blur', (e) => {
//   p.textContent = 'field is required'
//   p.style.color = 'red'
// })

// document.body.addEventListener('keypress', e => {
//   alert(`you press the ${e.key} key`)
// })

const inputt = document.querySelector("#num");
const button = document.querySelector('button');

function isPrime(x) {
  if (x <= 1) return false;
  if (x <= 3) return true;

  if (x % 2 === 0 || x % 3 === 0) return x === 2 || x === 3

  for (let i = 5; i < x.length; i += 6) {
    if (x % i === 0 || x % (i + 2) === 0) return false 
  }
  return true;
}
const div = document.createElement('div')
button.addEventListener('click', () => {
  const x = inputt.value;
  
    div.innerHTML = '';
  // document.body.innerHTML = '';
  
  for (let i = 0; i <= x; i++) {
    const numberDiv = document.createElement('div');
    // numberDiv.textContent = i;
    numberDiv.style.display = 'inline-block';
    numberDiv.style.padding = '10px';
    numberDiv.style.textAlign = 'center';
    numberDiv.style.fontWeight = 'bold';
    numberDiv.style.width = '30px';
    numberDiv.style.height = '30px';
    numberDiv.style.margin = '5px';

    if (isPrime(i)) {
      numberDiv.setAttribute('class', 'prime')
      numberDiv.style.backgroundColor = 'red';
    } else if (i % 2 === 0) {
      numberDiv.setAttribute('class', 'even')
      numberDiv.style.backgroundColor = 'green'
    } else {
      numberDiv.setAttribute('class', 'old')
      numberDiv.style.backgroundColor = 'yellow'
    }
    numberDiv.textContent = i;
    let result = div.appendChild(numberDiv);
    document.body.appendChild(result)
    
  } 
  inputt.value = '';
});

