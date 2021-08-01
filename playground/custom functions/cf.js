function calculatetBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculatetBill(wesTotal, wesTaxRate);
// console.log(myTotal);

const myBill4 = calculatetBill(100, undefined, 0.2);

const firstName = 'Becky';
function sayHiTo() {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo();
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}
