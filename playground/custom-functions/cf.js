function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log(`Running Calculate Bill`);
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = "Silly Goose") {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
