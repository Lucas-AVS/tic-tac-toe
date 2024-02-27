// class gameBoard {
//   static _gameBoard = new Array(9);
// }
const markingAreaContainer = document.querySelector(".markingAreaContainer");

const setGameBoard = (() => {
  let gameBoard = Array(9).fill(undefined);

  function player(name) {
    return { name };
  }

  let index = 0;
  (function displayController() {
    gameBoard.forEach((element) => {
      index += 1;
      const markingArea = document.createElement("div");
      markingArea.id = `${index}-position`;
      {
        if (element == undefined) {
          markingArea.className = "undefined";
        }
        if (element == "x") {
          markingArea.className = "x";
          markingArea.appendChild(document.createTextNode("x"));
        }
        if (element == "o") {
          markingArea.className = "o";
          markingArea.appendChild(document.createTextNode("x"));
        }
      }
      markingAreaContainer.appendChild(markingArea);
    });
  })();

  function checkWinner(player) {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (
        gameBoard[i] === player &&
        gameBoard[i + 1] === player &&
        gameBoard[i + 2] === player
      ) {
        return true;
      }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        gameBoard[i] === player &&
        gameBoard[i + 3] === player &&
        gameBoard[i + 6] === player
      ) {
        return true;
      }
    }
    // Check diagonals
    if (
      (gameBoard[0] === player &&
        gameBoard[4] === player &&
        gameBoard[8] === player) ||
      (gameBoard[2] === player &&
        gameBoard[4] === player &&
        gameBoard[6] === player)
    ) {
      return true;
    }
    return false;
  }

  function finishGame() {
    if (checkWinner("x")) {
      return console.log("PlayerX wins");
    } else if (checkWinner("o")) {
      return console.log("PlayerO wins");
    } else {
      return console.log("In match");
    }
  }

  const handlePlay = (selectedArea, currentPlayer) => {
    const markingArea = document.getElementById(`${selectedArea}-position`);

    if (markingArea.className == "undefined") {
      const symbol = currentPlayer.name === playerX ? "x" : "o";

      gameBoard.splice(selectedArea - 1, 1, symbol);

      markingArea.className = symbol;
      markingArea.textContent = symbol.toUpperCase();

      finishGame();
    } else {
      alert("Select a non-marked area");
    }
  };

  function clickEventAreas() {
    for (let i = 1; i < 10; i++) {
      const markingAreaDiv = document.getElementById(`${i}-position`);

      if (markingAreaDiv) {
        markingAreaDiv.addEventListener("click", () => handlePlay(i, playerX));
      } else {
        console.log("nao");
      }
    }
  }

  return {
    gameBoard,
    player,
    finishGame,
    clickEventAreas,
  };
})();

const playerX = setGameBoard.player("playerX");
const playerO = setGameBoard.player("playerO");

console.log(setGameBoard.player);
setGameBoard.clickEventAreas();

setGameBoard.finishGame();
