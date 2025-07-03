let dishValues = [];

window.addEventListener("load", () => {
  const card = document.getElementById("card");

  fetch("dishes.json")
  .then((response) => response.json())
  .then((data) => {
    dishValues = data.dishes;
    generateCard();
  });


  card.addEventListener("click", generateCard);
  card.addEventListener("touchstart", generateCard);
});

function generateCard() {
  const values = [
    "Chicken Parm",
    "Fried Rice",
    "Avo Toast",
    "Pasta & Beef",
    "Cereal Milk",
    "Yogurt & Granola",
    "Brocoli Soup",
    "Egg Drop Soup",
    "Ramen",
    "Hot Chocolate",
    "Hot milk",
    "Tea",
    "read?",
  ];

  const symbols = ["♠", "♣", "♦", "♥"];
  const colors = ["red", "black"];

  const cardSymbolHeader = document.getElementById("card-symbol-header");
  const cardValue = document.getElementById("card-value");
  const cardSymbolFooter = document.getElementById("card-symbol-footer");

  const randomValueIndex = Math.floor(Math.random() * values.length);
  const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  const randomColorIndex = Math.floor(Math.random() * colors.length);

  cardSymbolHeader.innerHTML = `<p style="color:${colors[randomColorIndex]}">${symbols[randomSymbolIndex]}</p>`;
  cardValue.innerHTML = `<p>${values[randomValueIndex]}</p>`;
  cardSymbolFooter.innerHTML = `<p style="color:${colors[randomColorIndex]}">${symbols[randomSymbolIndex]}</p>`;
};