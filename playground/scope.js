// const age = 100;

// function go() {
//   const age = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(hair);
// }

// go();

// function isCool(name) {
//   let cool;
//   if (name === 'spencer') {
//     cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// isCool('spencer');

const dog = 'cayde';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'tesla';
  logDog();
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
