// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// Arrow Function
const inchToCM = inches => inches * 2.54;

function add(a, b = 3) {
  const total = a + b;
  return total;
}

const add2 = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

//IIFE
//Immediately Invoked Function Expression

(function () {
  console.log("Running the Anon function");
  return "You are cool";
})();

// Method
const spencer = {
  //Method
  name: "Spencer Holladay",
  sayHi: function () {
    console.log("Hey Spencer");
    return "Hi Spencer";
  },
  //short hand method
  yellHi() {
    console.log("HEY SPENCER!!!!");
  },
  //arrow
  whisperHi: () => {
    console.log("hiii spencer");
  },
};

//Callback functions
// click callback
const button = document.querySelector(`.clickMe`);

function handleClick() {
  console.log(`Great Clicking!`);
}

button.addEventListener(`click`, function () {
  console.log(`Nice Job!`);
});

//timer callback

setTimeout(() => {
  console.log(`Done! Time to eat.`);
}, 1000);
