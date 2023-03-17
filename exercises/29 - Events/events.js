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

function buyItem() {
  console.log('Buying item!');
}

function loopBuy(buy) {
  console.log('Binding the buy button');
  buy.addEventListener('click', buyItem);
}

buyButtons.forEach(loopBuy);
