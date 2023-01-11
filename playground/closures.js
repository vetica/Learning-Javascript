function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('spencer'));
console.log(sayHello('em'));
console.log(sayHey('em'));

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  };
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
