const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('it got clicked');
}

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// Listening for multiple items

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.target === event.currentTarget);
  // Stop this from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function (event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', e => {
  console.log(e.currentTarget);
  console.log(this);
});
