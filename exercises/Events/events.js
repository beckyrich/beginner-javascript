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

function handleBuyButtonClick(e) {
    const button = e.target;
    // console.log(button.textContent);
    // console.log(parseFloat(e.target.dataset.price));
    console.log(e.currentTarget);
    console.log(e.target === e.currentTarget); //best practice to use currentTarget
    // Stop this event from bubbling up
    e.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(e) {
    console.log('You clicked on the window');
    console.log(e.target);
});

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(e) {
    console.count(e.currentTarget);
    console.log(this);  //in EventListeners, best practice to not use 'this'. Use e.currentTarget or e.target
});
