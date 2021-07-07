/* eslint-disable */
const first = 'wes';
const middle = "topher";
const last = `bos`;

const sentence = 'she\'s so cool'

const song = `Ohhh
ya
I like 
pizza!`;

const hello = `Hello my name is ${first}. Nice to meet you. I am ${100 + 1} years old.`;

const html = `
    <div>
        <h2>${first}</h2>
        <p>${hello}</p>
    </div>
`;

document.body.innerHTML = html;
console.log(html);
