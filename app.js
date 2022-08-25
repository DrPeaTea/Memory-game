document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "bookcase",
      img: "images/bookcase.png",
    },
    {
      name: "bookcase",
      img: "images/bookcase.png",
    },
    {
      name: "outside",
      img: "images/outside.png",
    },
    {
      name: "outside",
      img: "images/outside.png",
    },

    {
      name: "river",
      img: "images/river.png",
    },
    {
      name: "river",
      img: "images/river.png",
    },
    {
      name: "stairs",
      img: "images/stairs.png",
    },
    {
      name: "stairs",
      img: "images/stairs.png",
    },
    {
      name: "traditional",
      img: "images/traditional.png",
    },
    {
      name: "traditional",
      img: "images/traditional.png",
    },
    {
      name: "drink",
      img: "images/drink.png",
    },
    {
      name: "drink",
      img: "images/drink.png",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //creating your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/angie.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check for match
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found a match");
      cards[optionOneId].setAttribute("src", "images/philip.png");
      cards[optionTwoId].setAttribute("src", "images/philip.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/angie.png");
      cards[optionTwoId].setAttribute("src", "images/angie.png");
      alert("nope, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];

    resultDisplay.textContent - cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "congrats you won";
    }
  }

  // flip card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});
