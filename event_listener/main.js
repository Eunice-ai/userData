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
  { keyCode: 189, keyLabel: "-" }, // Hyphen/Minus
  { keyCode: 187, keyLabel: "=" }, // Equal Sign
  { keyCode: 219, keyLabel: "[" }, // Left Bracket
  { keyCode: 221, keyLabel: "]" }, // Right Bracket
  { keyCode: 220, keyLabel: "\\" }, // Backslash
  { keyCode: 59, keyLabel: ";" },  // Semicolon
  { keyCode: 222, keyLabel: "'" }, // Single Quote
  { keyCode: 188, keyLabel: "," },  // Comma
  { keyCode: 190, keyLabel: "." },  // Period
  { keyCode: 191, keyLabel: "/" },  // Slash
  { keyCode: 96, keyLabel: "0" },  // Numpad 0
  { keyCode: 97, keyLabel: "1" },  // Numpad 1
  { keyCode: 98, keyLabel: "2" },  // Numpad 2
  { keyCode: 99, keyLabel: "3" },  // Numpad 3
  { keyCode: 100, keyLabel: "4" }, // Numpad 4
  { keyCode: 101, keyLabel: "5" }, // Numpad 5
  { keyCode: 102, keyLabel: "6" }, // Numpad 6
  { keyCode: 103, keyLabel: "7" }, // Numpad 7
  { keyCode: 104, keyLabel: "8" }, // Numpad 8
  { keyCode: 105, keyLabel: "9" }, // Numpad 9
  { keyCode: 106, keyLabel: "*" }, // Numpad *
  { keyCode: 107, keyLabel: "+" }, // Numpad +
  { keyCode: 109, keyLabel: "-" }, // Numpad -
  { keyCode: 110, keyLabel: "." },  // Numpad .
  { keyCode: 111, keyLabel: "/" },  // Numpad /
  { keyCode: 112, keyLabel: "F1" },
  { keyCode: 113, keyLabel: "F2" },
  { keyCode: 114, keyLabel: "F3" },
  { keyCode: 115, keyLabel: "F4" },
  { keyCode: 116, keyLabel: "F5" },
  { keyCode: 117, keyLabel: "F6" },
  { keyCode: 118, keyLabel: "F7" },
  { keyCode: 119, keyLabel: "F8" },
  { keyCode: 120, keyLabel: "F9" },
  { keyCode: 121, keyLabel: "F10" },
  { keyCode: 122, keyLabel: "F11" },
  { keyCode: 123, keyLabel: "F12" },
  { keyCode: 144, keyLabel: "Num Lock" },
  { keyCode: 145, keyLabel: "Scroll Lock" },
  { keyCode: 186, keyLabel: ";" },  // Semicolon (with Shift)
  { keyCode: 187, keyLabel: "=" },  // Equal Sign (with Shift)
  { keyCode: 188, keyLabel: "," },  // Comma (with Shift)
  { keyCode: 189, keyLabel: "-" },  // Hyphen/Minus (with Shift)
  { keyCode: 190, keyLabel: "." },  // Period (with Shift)
  { keyCode: 191, keyLabel: "/" },  // Slash (with Shift)
  { keyCode: 192, keyLabel: "`" },  // Grave Accent/Backtick
  { keyCode: 219, keyLabel: "{" },  // Left Curly Brace (with Shift)
  { keyCode: 220, keyLabel: "\\" }, // Backslash (with Shift)
  { keyCode: 221, keyLabel: "}" },  // Right Curly Brace (with Shift)
  { keyCode: 222, keyLabel: '"' },
  { keyCode: 192, keyLabel: "`" },  // Grave Accent/Backtick (without Shift)
  { keyCode: 219, keyLabel: "[" },  // Left Bracket (without Shift)
  { keyCode: 220, keyLabel: "\\" }, // Backslash (without Shift)
  { keyCode: 221, keyLabel: "]" },  // Right Bracket (without Shift)
  { keyCode: 222, keyLabel: "'" },  // Single Quote (without Shift)
  { keyCode: 223, keyLabel: "`" },  // Grave Accent/Backtick (with Shift)
  { keyCode: 226, keyLabel: "\\" }, // Backslash (with AltGr)
  { keyCode: 107, keyLabel: "+" },  // Plus Sign (Numpad with Num Lock)
  { keyCode: 109, keyLabel: "-" },  // Minus Sign (Numpad with Num Lock)
  { keyCode: 106, keyLabel: "*" },  // Asterisk (Numpad with Num Lock)
  { keyCode: 111, keyLabel: "/" },  // Slash (Numpad with Num Lock)
  { keyCode: 110, keyLabel: "." },  // Decimal Point (Numpad with Num Lock)

  // Media control keys
  { keyCode: 173, keyLabel: "Volume Mute" },
  { keyCode: 174, keyLabel: "Volume Down" },
  { keyCode: 175, keyLabel: "Volume Up" },
  { keyCode: 176, keyLabel: "Media Next Track" },
  { keyCode: 177, keyLabel: "Media Previous Track" },
  { keyCode: 178, keyLabel: "Media Stop" },
  { keyCode: 179, keyLabel: "Media Play/Pause" },

  // Browser control keys
  { keyCode: 181, keyLabel: "Volume Mute (Chrome)" },
  { keyCode: 182, keyLabel: "Volume Down (Chrome)" },
  { keyCode: 183, keyLabel: "Volume Up (Chrome)" },

  // IME (Input Method Editor) keys
  { keyCode: 229, keyLabel: "IME Hiragana/Katakana" },

  // Web browser keys
  { keyCode: 166, keyLabel: "Browser Back" },
  { keyCode: 167, keyLabel: "Browser Forward" },
  { keyCode: 168, keyLabel: "Browser Refresh" },
  { keyCode: 169, keyLabel: "Browser Stop" },
  { keyCode: 170, keyLabel: "Browser Search" },
  { keyCode: 171, keyLabel: "Browser Favorites" },
  { keyCode: 172, keyLabel: "Browser Home" },

  // Additional keys (may vary by keyboard)
  { keyCode: 183, keyLabel: "Launch Calculator" },
  { keyCode: 184, keyLabel: "Launch Email" },
  { keyCode: 91, keyLabel: "Left Windows Key (WinKey)" },
  { keyCode: 92, keyLabel: "Right Windows Key (WinKey)" },
  { keyCode: 93, keyLabel: "Menu Key (Application Key)" },

  // Mac Command key
  { keyCode: 224, keyLabel: "Left or Right Command (⌘) Key (Mac)" },

  // Mac Option key
  { keyCode: 225, keyLabel: "Left or Right Option (⌥) Key (Mac)" },

  // Mac Control key
  { keyCode: 17, keyLabel: "Control (Ctrl) Key (Mac)" },

  // Mac Function keys (F13 - F15)
  { keyCode: 183, keyLabel: "F13 (Mac)" },
  { keyCode: 184, keyLabel: "F14 (Mac)" },
  { keyCode: 185, keyLabel: "F15 (Mac)" },

  // Multimedia keys (may vary by keyboard)
  { keyCode: 173, keyLabel: "Media Volume Mute" },
  { keyCode: 174, keyLabel: "Media Volume Down" },
  { keyCode: 175, keyLabel: "Media Volume Up" },
  { keyCode: 179, keyLabel: "Media Play/Pause" },
  { keyCode: 178, keyLabel: "Media Stop" },
  { keyCode: 177, keyLabel: "Media Previous Track" },
  { keyCode: 176, keyLabel: "Media Next Track" },

  // Lock keys (may vary by keyboard)
  { keyCode: 20, keyLabel: "Caps Lock" },
  { keyCode: 145, keyLabel: "Scroll Lock" },
  { keyCode: 144, keyLabel: "Num Lock" },

  // Special navigation keys
  { keyCode: 45, keyLabel: "Insert" },
  { keyCode: 46, keyLabel: "Delete" },
  { keyCode: 36, keyLabel: "Home" },
  { keyCode: 35, keyLabel: "End" },
  { keyCode: 33, keyLabel: "Page Up" },
  { keyCode: 34, keyLabel: "Page Down" }
];

// result is wrong will get back to it later
document.body.addEventListener('keypress', e => {
 const key = e.key;
  const keyMapping = keyMappings.find(mapping => mapping.keyLabel === key);
  
  if (keyMapping) {
    const keyLabel = keyMapping.keyLabel;
    
    alert(`key pressed ${keyLabel} ${key}`)
   } 
  else {
    alert(`you pressed: keycode: ${key}`)
  }
});