const becky = document.querySelector('.becky');

// console.log(becky.children);
// console.log(becky.firstElementChild);
// console.log(becky.lastElementChild);
// console.log(becky.previousElementSibling);
// console.log(becky.nextElementSibling);
// console.log(becky.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p); // It's still there!
