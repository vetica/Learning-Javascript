function calculateBill() {
  console.log(`Running Calculate Bill`);
  const total = 100 * 1.13;
  return total;
}

const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);
