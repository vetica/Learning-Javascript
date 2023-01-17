// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);

// // set the textContent property on that element
// // heading.textContent = 'Spencer is Cool';
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', ' 🍕');
// pizzaList.insertAdjacentText('beforeend', ' 🍕');

// Classes

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

// Attributes

pic.alt = 'Cute Pup'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter
