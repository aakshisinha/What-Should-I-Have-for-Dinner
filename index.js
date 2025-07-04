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
  if (dishValues.length === 0) return;

  const symbols = ["♠", "♣", "♦", "♥"];
  const colors = ["red", "black"];

  const cardSymbolHeader = document.getElementById("card-symbol-header");
  const cardValue = document.getElementById("card-value");
  const cardSymbolFooter = document.getElementById("card-symbol-footer");

  const randomValueIndex = Math.floor(Math.random() * dishValues.length);
  const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  const randomColorIndex = Math.floor(Math.random() * colors.length);

  cardSymbolHeader.innerHTML = `<p style="color:${colors[randomColorIndex]}">${symbols[randomSymbolIndex]}</p>`;
  cardValue.innerHTML = `<p>${dishValues[randomValueIndex]}</p>`;
  cardSymbolFooter.innerHTML = `<p style="color:${colors[randomColorIndex]}">${symbols[randomSymbolIndex]}</p>`;
}