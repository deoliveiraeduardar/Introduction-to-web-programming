function start() {
  var buttonCalcular = document.querySelector('#button-calcular');
  console.log(buttonCalcular);
  buttonCalcular.addEventListener('click', handleButtonClick);

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
  var formattedsomaAB = somaAB.toFixed(2).replace('.', ',');

  console.log(somaAB);

  ResultadoSomaAB.textContent = formattedsomaAB;
}

start();
