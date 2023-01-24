const spencer = document.querySelector('.spencer');

// console.log(spencer.children);
// console.log(spencer.firstElementChild);
// console.log(spencer.lastElementChild);
// console.log(spencer.previousElementSibling);
// console.log(spencer.nextElementSibling);
// console.log(spencer.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
