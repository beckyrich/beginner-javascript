const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("🐛 IT GOT CLICKED!!!");
}

const hooray = () => console.log("HOORAY!");

butts.addEventListener("click", function () {
  console.log("Im an anon!");
});
coolButton.addEventListener("click", hooray);

butts.removeEventListener("click", handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick() {
    console.log('You are buying it!');
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});
