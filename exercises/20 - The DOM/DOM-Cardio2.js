// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;

// add three list items with the words "one, two, three" in them

// put that list into the above wrapper
div.innerHTML = ul;

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img = document.createElement('img');
img.src = 'https://picsum.photos/500';
img.width = 250;
img.height = 250;
img.classList.add('cute');
img.alt = 'Cute puppy';
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
// add a class to the second paragraph called warning
// remove the first paragraph

const myHTML = `<div class = "myDiv">
<p>Paragraph one</p>
<p>Paragraph two</p>
</div>`;

const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);

const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGE IN DOG YEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const html = `
    <div class = "playerCard">
    <h2>${name} - ${age}</h2>
    <p>They're height is ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
    <button class = "delete" type = "button">&times; Delete</button>
    </div>`;
  return html;
}

// make a new div with a class of cards
// make 4 player cards using generatePlayerCard
// append those cards to the div
// put the div into the DOM just before the wrapper element

const cards = document.createElement('div');
cards.classList.add('cards');

let cardsHTML = generatePlayerCard('Spencer', 42, 150);
cardsHTML += generatePlayerCard('Em', 28, 130);
cardsHTML += generatePlayerCard('Adele', 32, 127);
cardsHTML += generatePlayerCard('Curry', 30, 160);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener

const buttons = document.querySelectorAll('.delete');

function deleteCard() {
  const buttonClick = event.currentTarget;
  buttonClick.closest('.playerCard').remove();
}

buttons.forEach(button => button.addEventListener('click', deleteCard));
