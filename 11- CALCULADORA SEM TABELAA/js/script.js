function start() {
  var botaoCalcular = document.querySelector('#botao-calcular');
  console.log(botaoCalcular);
  botaoCalcular.addEventListener('click', handleButtonClick);

  var inputnumeroA = document.querySelector('#input-numero-A');
  var inputnumeroB = document.querySelector('#input-numero-B');

  inputnumeroA.addEventListener('input', handleButtonClick);
  inputnumeroB.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculoSomaAB(numeroA, numeroB) {
  return numeroA + numeroB;
}

function handleButtonClick() {
  var inputnumeroA = document.querySelector('#input-numero-A');
  var inputnumeroB = document.querySelector('#input-numero-B');

  var ResultadoSomaAB = document.querySelector('#resultado-soma-AB');

  var numeroA = Number(inputnumeroA.value);
  var numeroB = Number(inputnumeroB.value);

  console.log(numeroA);
  console.log(numeroB);

  var somaAB = calculoSomaAB(numeroA, numeroB);
}

/* GERANDO UMA FUNÇÃO PARA CALCUALAR SÓ POSIIVOS */
/* function NumerosNegativos(inputNumeroA, inputNumeroB) {
  if (inputNumeroA < 1 || inputNumeroB < 1) {
    console.error(
      'Número inválido, pois é negativo. Digite um número inteiro positivo.'
    );
    return;
  }
}*/

start();
