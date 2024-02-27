class Board {
  constructor() {
    this.board = Array(9).fill(undefined);
    this.currentPlayer = 0;
    this.markingAreaContainer = document.querySelector(".markingAreaContainer");
    this.init();
  }

  init() {
    this.renderBoard();
    this.setupEventListeners();
  }

  renderBoard() {
    this.markingAreaContainer.innerHTML = "";

    this.board.forEach((_, index) => {
      const markingArea = document.createElement("div");
      markingArea.id = `${index + 1}-position`;
      markingArea.className = "undefined";
      this.markingAreaContainer.appendChild(markingArea);
    });
  }

  setupEventListeners() {
    this.markingAreaContainer.addEventListener("click", (event) => {
      if (event.target.id) {
        const selectedArea = parseInt(event.target.id.split("-")[0]);
        this.handlePlay(selectedArea);
      }
    });
  }

  handlePlay(selectedArea) {
    const markingArea = document.getElementById(`${selectedArea}-position`);

    if (markingArea.className === "undefined") {
      const symbol = this.currentPlayer % 2 ? "x" : "o";
      this.currentPlayer += 1;

      this.board.splice(selectedArea - 1, 1, symbol);

      markingArea.className = symbol;
      markingArea.textContent = symbol.toUpperCase();

      this.finishGame();
    } else {
      alert("Select a non-marked area");
    }
  }

  checkWinner(player) {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (
        this.board[i] === player &&
        this.board[i + 1] === player &&
        this.board[i + 2] === player
      ) {
        return true;
      }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i] === player &&
        this.board[i + 3] === player &&
        this.board[i + 6] === player
      ) {
        return true;
      }
    }
    // Check diagonals
    if (
      (this.board[0] === player &&
        this.board[4] === player &&
        this.board[8] === player) ||
      (this.board[2] === player &&
        this.board[4] === player &&
        this.board[6] === player)
    ) {
      return true;
    }
    return false;
  }

  finishGame() {
    if (this.checkWinner("x")) {
      alert("PlayerX wins");
      this.board = Array(9).fill(undefined);
      this.currentPlayer = 0;
      this.renderBoard();
    }
    if (this.checkWinner("o")) {
      alert("PlayerO wins");
      this.board = Array(9).fill(undefined);
      this.currentPlayer = 0;
      this.renderBoard();
    }
  }
}

const game = new Board();
