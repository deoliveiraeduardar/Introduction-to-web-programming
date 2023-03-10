var state = { board: [], currentGame: [], savedGames: [] };

function start() {
  createBoard();
  newGame();

  console.log(state.currentGame);
  console.log(state.savedGames);

  resetGame();
  console.log(state.currentGame);

  console.log(state.board);
}

function createBoard() {
  state.board = [];

  for (var i = 1; i <= 60; i++) {
    state.board.push(i);
  }
}

function newGame() {
  resetGame();
  render();
}

function render() {
  renderBoard();
}

function renderBoard() {
  var divBoard = document.querySelector('#megasena-board');
  divBoard.innerHTML = '';

  var ulNumbers = document.createElement('ul');
  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = state.board[i]

    var liNumber = document.createElement('li')

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('Número inválido', numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error('O jogo já está completo.');
    return;
  }

  if (isNumberInGame(numberToAdd)) {
    console.error('Este número já está no jogo.', numberToAdd);
    return;
  }

  state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
  if (numberToRemove < 1 || numberToRemove > 60) {
    console.error('Número inválido', numberToRemove);
    return;
  }

  var newGame = [];

  for (var i = 0; i < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i];

    if (currentNumber === numberToRemove) {
      continue;
    }

    newGame.push(currentNumber);
  }
  state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
  //if (state.currentGame.includes(numberToCheck)) {
  //  return true;
  //}
  //return false;
  return state.currentGame.includes(numberToCheck);
}

function saveGame() {
  if (isGameComplete()) {
    /* PROBLEMA É AQUI COM O ! E SEM ELE*/
    /* PROBLEMA É AQUI, O JOGO NAO ESTA COMPLETO */
    console.error('O jogo não está completo!');
    return;
  }

  state.savedGames.push(state.currentGame);
  /* PROBLEMA É AQUI, NO PUSH */
}

function isGameComplete() {
  return state.currentGame.length === 6;
}

function resetGame() {
  return (state.currentGame = []);
}

start()