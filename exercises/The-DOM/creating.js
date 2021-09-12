console.log('It works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/200x200';
myImage.alt = 'Neat photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// oh shoot! we need to add something to the top, like a heading

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

{/* <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
</ul>  */}

const list = document.createElement('ul');
const li3 = document.createElement('li');
li3.textContent = 'Three';
list.appendChild(li3);

document.body.insertAdjacentElement('afterbegin',list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode();
li1.textContent = 'One';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);
