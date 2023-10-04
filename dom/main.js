// const allTitles = document.getElementsByTagName('h1')
// console.log(allTitles)
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i])
// }

// const allTitle = document.getElementsByClassName('title')
// for (let i = 0; i < allTitle.length; i++) {
//   console.log(allTitles[i])
// }

// const allTitless = document.querySelectorAll('.title')
// allTitless.forEach(title => console.log(title))

// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'

// console.log(titles[3])

// const titles = document.querySelectorAll('h1')
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')
// titles[3].classList.add('header-title', 'gift')
// titles[3].textContent = 'Fourth Title'
// console.log(titles[3])
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px'
//   if (i % 2 === 0) {
//     title.style.color = 'green'
//     title.style.backgroundColor = 'blue'
//   } else {
//     title.style.color = 'red'
//     title.style.backgroundColor = 'purple'
//   }
// })

// const lists = `
//     <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>`

//             const ul = document.querySelector('ul')
//             ul.innerHTML = 'lists'
//             ul.innerHTML = ''

// const paragraph = document.querySelector('p')
// console.log(paragraph)

// const paragraph = document.querySelectorAll('p')
// paragraph.forEach((text) => {
//   console.log(text.textContent)
// })
// console.log(paragraph)

// const paragraph = document.querySelectorAll('p')
// paragraph[3].textContent = 'fourth'
// console.log(paragraph[3])

// const paragraph = document.querySelectorAll('p')
// paragraph[0].className = 'para1'
// paragraph[0].id = 'para1'
// paragraph[1].className = 'para2'
// paragraph[1].id = 'para2'
// paragraph[2].className = 'para3'
// paragraph[2].id = 'para3'
// paragraph[3].className = 'para4'
// paragraph[3].id = 'para4'
// console.log(paragraph[3])

// const paragraph = document.querySelectorAll('p')
// paragraph[0].setAttribute('class', 'para1')
// paragraph[0].setAttribute('id', 'para1')
// paragraph[1].setAttribute('class', 'para2')
// paragraph[1].setAttribute('id', 'para2')
// paragraph[2].setAttribute('class', 'para3')
// paragraph[2].setAttribute('id', 'para3')
// paragraph[3].setAttribute('class', 'para4')
// paragraph[3].setAttribute('id', 'para4')
// paragraph[3].textContent = 'fourth'

// paragraph.forEach((change) => {
//   change.style.color = 'blue';
//   change.style.backgroundColor = 'yellow';
//   change.style.border = '2px solid cyan';
//   change.style.fontSize = '20px';
//   change.style.fontFamily = 'New Times Roman';
// });
// console.log(change)

// paragraph.forEach((col, i) => {
//   col.setAttribute('class', 'para')
//   if (i % 2 === 0) {
//     col.style.color = 'red'
//   } else {
//     col.style.color = 'green'
//   }
// })
// console.log(paragraph[0])

const h1Element = document.querySelector("h1");
const h1Text = h1Element.textContent;
const newText = h1Text.replace("2020", "<span>2020</span>");
h1Element.innerHTML = newText;

const spanElement = document.querySelector("h1 span");
spanElement.setAttribute("id", "year");

function changeYearColor() {
  const spanElement = document.querySelector("h1 span");
  spanElement.setAttribute("id", "year");
  spanElement.style.fontSize = "50px";
  const yearColor = ["red", "blue", "green", "cyan", "yellow", "magenta"];
  let indexYear = 0;

  setInterval(() => {
    spanElement.style.color = yearColor[indexYear];
    indexYear = (indexYear + 1) % yearColor.length;
  }, 1000);
}

changeYearColor();

const listss = document.querySelectorAll("ul li");

// listss[0].setAttribute('id', 'completed')
// listss[1].setAttribute('id', 'ongoing')
// listss[2].setAttribute('id', 'coming')
// listss[3].setAttribute('id', 'coming')
// listss[4].setAttribute('id', 'coming')
// listss[5].setAttribute('id', 'coming')
// listss[6].setAttribute('id', 'coming')

// listss.forEach((list) => {
//   if (list.id === 'completed') {
//     list.style.backgroundColor = 'green'
//     list.style.color = 'white'
//   } else if (list.id === 'ongoing') {
//     list.style.backgroundColor = 'yellow'
//   } else {
//     list.style.backgroundColor = 'red'
//     list.style.color = 'white'
//   }
// })
// console.log(listss)

// use the code below instead

listss.forEach((list, index) => {
  if (index === 0) {
    list.setAttribute("id", "completed");
    list.style.backgroundColor = "green";
    list.style.color = "white";
    list.style.listStyleType = 'none'
  } else if (index === 1) {
    list.setAttribute("id", "ongoing");
    list.style.backgroundColor = "yellow";
    list.style.listStyleType = 'none'
  } else {
    list.setAttribute("id", "coming");
    list.style.backgroundColor = "red";
    list.style.color = "white";
    list.style.listStyleType = 'none'
  }
});

function changeDateColor() {
  const newh3 = document.createElement("h3");
  const nowDate = new Date();
  const formateddate = nowDate.toLocaleString();
  // let month = nowDate.getMonth() + 1
  // let day = nowDate.getDay()
  // let year = nowDate.getFullYear()
  let timen = formateddate;
  newh3.textContent = timen;
  newh3.style.marginLeft = "10%";
  newh3.style.padding = "10px 12px";
  newh3.style.display = "inline-block";
  const h2Element = document.querySelector("h2");
  h2Element.insertAdjacentElement("afterend", newh3);

  const dateColor = [
    "gold",
    "violet",
    "red",
    "cyan",
    "yellow",
    "magenta",
    "blue",
  ];
  let indexYear = 0;

  setInterval(() => {
    newh3.style.backgroundColor = dateColor[indexYear];
    indexYear = (indexYear + 1) % dateColor.length;
  }, 1000);
}

changeDateColor();
