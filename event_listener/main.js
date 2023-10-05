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

// const inputt = document.querySelector("#num");
// const button = document.querySelector('button');
// const para = document.getElementById('para');
// let divy = document.createElement('div');
// divy.setAttribute('id', 'divCont');

// function isPrime(x) {
//   if (x <= 1) return false;
//   if (x <= 3) return true;

//   if (x % 2 === 0 || x % 3 === 0) return x === 2 || x === 3

//   for (let i = 5; i < x.length; i += 6) {
//     if (x % i === 0 || x % (i + 2) === 0) return false 
//   }
//   return true;
// }


// button.addEventListener('click', () => {
//   const x = parseInt(inputt.value);
  
//   if (isNaN(x) || inputt.value.trim() === '') {
//     para.textContent = "Enter a valid number";
//     para.style.color = 'red';
//   } else {
//     para.textContent = "";
//     para.style.color = "";
//   }
  
//   divy.innerHTML = '';
  
//   for (let i = 0; i <= x; i++) {
//     var numberDiv = document.createElement('div');
    
//     numberDiv.style.display = 'inline-block';
//     numberDiv.style.padding = '10px';
//     numberDiv.style.textAlign = 'center';
//     numberDiv.style.fontWeight = 'bold';
//     numberDiv.style.width = '30px';
//     numberDiv.style.height = '30px';
//     numberDiv.style.margin = '5px';
    
//     if (isPrime(i)) {
//       numberDiv.setAttribute('class', 'prime')
//       numberDiv.style.backgroundColor = 'red';
      
//     } else if (i % 2 === 0) {
//       numberDiv.setAttribute('class', 'even')
//       numberDiv.style.backgroundColor = 'green'
      
//     } else {
//       numberDiv.setAttribute('class', 'old')
//       numberDiv.style.backgroundColor = 'yellow'
      
//     }
    
//     numberDiv.textContent = i;
//     document.body.appendChild(divy)
//     divy.appendChild(numberDiv);
//     inputt.value = '';

//   }
// })

const keyMappings = [
  { keyCode: 65, keyLabel: "A" },
  { keyCode: 66, keyLabel: "B" },
  { keyCode: 67, keyLabel: "C" },
  { keyCode: 68, keyLabel: "D" },
  { keyCode: 69, keyLabel: "E" },
  { keyCode: 70, keyLabel: "F" },
  { keyCode: 71, keyLabel: "G" },
  { keyCode: 72, keyLabel: "H" },
  { keyCode: 73, keyLabel: "I" },
  { keyCode: 74, keyLabel: "J" },
  { keyCode: 75, keyLabel: "K" },
  { keyCode: 76, keyLabel: "L" },
  { keyCode: 77, keyLabel: "M" },
  { keyCode: 78, keyLabel: "N" },
  { keyCode: 79, keyLabel: "O" },
  { keyCode: 80, keyLabel: "P" },
  { keyCode: 81, keyLabel: "Q" },
  { keyCode: 82, keyLabel: "R" },
  { keyCode: 83, keyLabel: "S" },
  { keyCode: 84, keyLabel: "T" },
  { keyCode: 85, keyLabel: "U" },
  { keyCode: 86, keyLabel: "V" },
  { keyCode: 87, keyLabel: "W" },
  { keyCode: 88, keyLabel: "X" },
  { keyCode: 89, keyLabel: "Y" },
  { keyCode: 90, keyLabel: "Z" },
  { keyCode: 48, keyLabel: "0" },
  { keyCode: 49, keyLabel: "1" },
  { keyCode: 50, keyLabel: "2" },
  { keyCode: 51, keyLabel: "3" },
  { keyCode: 52, keyLabel: "4" },
  { keyCode: 53, keyLabel: "5" },
  { keyCode: 54, keyLabel: "6" },
  { keyCode: 55, keyLabel: "7" },
  { keyCode: 56, keyLabel: "8" },
  { keyCode: 57, keyLabel: "9" },
  { keyCode: 32, keyLabel: "Space" },
  { keyCode: 13, keyLabel: "Enter" },
  { keyCode: 27, keyLabel: "Escape" },
  { keyCode: 8, keyLabel: "Backspace" },
  { keyCode: 9, keyLabel: "Tab" },
  { keyCode: 16, keyLabel: "Shift" },
  { keyCode: 17, keyLabel: "Ctrl" },
  { keyCode: 18, keyLabel: "Alt" },
];

document.body.addEventListener('keypress', e => {

  alert(`
  you pressed ${e.key} key
  ${e.code}
  `)
})