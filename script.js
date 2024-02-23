// class gameBoard {
//   static _gameBoard = new Array(9);
// }
const markingAreaContainer = document.querySelector(".markingAreaContainer");

const setGameBoard = (() => {
  //   let gameBoard = new Array(9);
  let gameBoard = {
    1: "lul",
    2: undefined,
    3: "lol",
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
  };

  function player(name) {
    return { name };
  }

  function displayController() {
    Object.entries(gameBoard).forEach(([key, value]) => {
      const markingArea = document.createElement("div");
      {
        value == undefined
          ? (markingArea.id = "empty")
          : (markingArea.id = "marked");
      }
      markingAreaContainer.appendChild(markingArea);
    });
  }

  return {
    gameBoard,
    player,
    displayController,
  };
})();

const player1 = setGameBoard.player("player1");
const player2 = setGameBoard.player("player2");

console.log(player1);
console.log(setGameBoard.gameBoard);

setGameBoard.displayController();
