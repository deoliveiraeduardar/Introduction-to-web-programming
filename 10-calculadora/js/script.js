var board = [];
function start() {
  createBoard();

  var botaoCalcular = document.querySelector('#botao-calcular');
  console.log(botaoCalcular);
  botaoCalcular;
  botaoCalcular.addEventListener('click', handleButtonClick);

  var inputNumeroA = document.querySelector('#input-numero-A');
  var inputNumeroB = document.querySelector('#input-numero-B');

  inputNumeroA.addEventListener('input', handleButtonClick);
  inputNumeroB.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function createBoard() {
  for (var i=0;)
}

/* GERANDO UMA FUNÇÃO PARA CALCUALAR SÓ POSIIVOS */
function NumerosNegativos(inputNumeroA, inputNumeroB) {
  if (inputNumeroA < 1 || inputNumeroB < 1) {
    console.error(
      'Número inválido, pois é negativo. Digite um número inteiro positivo.'
    );
    return;
  }
}

start();
