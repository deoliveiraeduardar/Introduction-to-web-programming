var state = { board: [], currentGame: [], savadGames: [] };

function start() {
  addNumberToGame(1);
  addNumberToGame(5);
  addNumberToGame(5);
  addNumberToGame(5);
  addNumberToGame(60);
  addNumberToGame(59);
  addNumberToGame(55);
  addNumberToGame(60);
  addNumberToGame(55);
  addNumberToGame(55);

  console.log(state.currentGame);
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('Número inválido', numberToAdd);
    return;
  }

  if (isNumberInGame(numberToAdd)) {
    console.error('Este número já está no jogo.', numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error('O jogo já está completo.');
    return;
  }

  function isNumberInGame(numberToCheck) {
    if (state.currentGame.includes(numberToCheck)) {
      return true;
    }
    return false;
  }

  state.currentGame.push(numberToAdd);
}
start();
