const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const heading = document.querySelector('h2');

console.log(heading.textContent);
console.log(heading.innerText);
// set the textContent property on that element
// heading.textContent = 'Becky is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('afterbegin', '🍕');
pizzaList.insertAdjacentText('beforeend', '🍕');
