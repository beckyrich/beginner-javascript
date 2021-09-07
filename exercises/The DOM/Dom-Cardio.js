// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);
// console.log(myDiv); (verifying that it worked in console)

// make an unordered list
// add three list items with the words "one, two, three" in them
const ul = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`;
// put that list into the above wrapper
myDiv.innerHTML = ul;
// console.log(myDiv);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = "https://source.unsplash.com/random/300x300";

// set the width to 250
myImg.width = 250;
myImg.height = 250;

// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = "Cute Puppy";

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="div">
        <p>I am a P!</p>
        <p>I am another P!</p>
    </div>
`;
const ulElement = myDiv.querySelector('ul');
console.log(ulElement);
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const div = myDiv.querySelector('.div');
div.children[1].classList.add('warning');
console.log(div);
// remove the first paragraph
div.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    const html = `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>Their height is ${height} in and ${age} years old. In Dog years this person would be ${age * 7}. The would be a tall dog!</p>
        <button class="delete" type="button">&times; DELETE</button>
    </div>
    `;
    return html;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);

cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make our delete function
function deleteCard(e) {
    const buttonThatGotClicked = e.currentTarget;
    buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
