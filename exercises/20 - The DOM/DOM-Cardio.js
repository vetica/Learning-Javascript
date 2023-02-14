// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const l1 = myList.appendChild(document.createElement('li'));
l1.textContent = 'one';

const l2 = l1.cloneNode();
myList.appendChild(l2);
l2.textContent = 'two';

const l3 = l2.cloneNode();
myList.appendChild(l3);
l3.textContent = 'three';

// put that list into the above wrapper
myDiv.appendChild(myList);

// create an image
const image = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
image.src = 'https://source.unsplash.com/random';
image.width = 250;
image.classList.add('cute');
image.alt = 'Cute Puppy';
myDiv.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `<div><p>Paragraph 1</p><p>Paragraph 2</p></div>`;
myDiv.insertAdjacentHTML('afterbegin', myHTML);

// add a class to the second paragraph called warning
// remove the first paragraph
const myPara = document.getElementsByTagName('p');
const secondPara = myPara.item(1);
secondPara.classList.add('warning');

const firstPara = myPara.item(0);
firstPara.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  let dogAge = age * 7;
  return (card = `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} tall and ${age} years old. In Dog years this person would be ${dogAge}. That would be a tall dog!</p>
    </div>`);
}

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
const firstCard = generatePlayerCard('Spencer', 41, `5'11`);
const secondCard = generatePlayerCard('Em', 28, `5'9`);
const thirdCard = generatePlayerCard('Curry', 32, `6'1`);
const fourthCard = generatePlayerCard('Adele', 37, `5'6`);

// append those cards to the div

document.getElementsByClassName('cards').innerText = firstCard;

// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('afterbegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
