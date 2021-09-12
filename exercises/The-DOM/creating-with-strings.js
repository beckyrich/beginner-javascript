const item = document.querySelector('.item');

const src = `https://source.unsplash.com/random/300x300`;
const desc = `Cute Pup`
const myHTML = `
    <div class='wrapper'>
        <h2>${desc}</h2>
        <img src= '${src}' alt='${desc}'/>
    </div>
`;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
// console.log(myFragment.querySelector('img'));
// console.log(myFragment);
