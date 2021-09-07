const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
const hiButton = document.querySelector('.hello');

function handleClick() {
    console.log('I GOT CLICKED!!!');
}

hiButton.addEventListener('click', handleClick);

butts.addEventListener('click', function() {
    console.log("I'm an anon!");
});

const hooray = () => console.log('HOORAY!');
coolButton.addEventListener('click', hooray);

// hiButton.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
    console.log('Buying Item');
};

function attachListener(buyButton) {
    console.log('Binding the buy button');
    buyButton.addEventListener('click', buyItem);
};

buyButtons.forEach(attachListener);
