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

function calculoSubtacaoAB(numeroA, numeroB) {
  return numeroA - numeroB;
}

function calculoSubtacaoBA(numeroA, numeroB) {
  return numeroB - numeroA;
}

function calculoMulti(numeroA, numeroB) {
  return numeroB * numeroA;
}

function handleButtonClick() {
  var inputnumeroA = document.querySelector('#input-numero-A');
  var inputnumeroB = document.querySelector('#input-numero-B');

  var numeroA = Number(inputnumeroA.value);
  var numeroB = Number(inputnumeroB.value);

  console.log(numeroA);
  console.log(numeroB);

  /* ... */
  /*resultado-muti  */
  var ResultadoMulti = document.querySelector('#resultado-multi');
  var multi = calculoMulti(numeroA, numeroB);
  var formattedmulti = multi.toFixed(2).replace('.', ',');
  console.log(multi);
  ResultadoMulti.textContent = formattedmulti;

  /*resultado-sub-BA  */
  var ResultadoSubtracaoBA = document.querySelector('#resultado-sub-BA');
  var subtracaoBA = calculoSubtacaoBA(numeroA, numeroB);
  var formattedsubtracaoBA = subtracaoBA.toFixed(2).replace('.', ',');
  console.log(subtracaoBA);
  ResultadoSubtracaoBA.textContent = formattedsubtracaoBA;

  /*resultado-sub-AB  */
  var ResultadoSubtracaoAB = document.querySelector('#resultado-sub-AB');
  var subtracaoAB = calculoSubtacaoAB(numeroA, numeroB);
  var formattedsubtracaoAB = subtracaoAB.toFixed(2).replace('.', ',');
  console.log(subtracaoAB);
  ResultadoSubtracaoAB.textContent = formattedsubtracaoAB;

  /* resultado-soma-AB */
  var ResultadoSomaAB = document.querySelector('#resultado-soma-AB');
  var somaAB = calculoSomaAB(numeroA, numeroB);
  var formattedsomaAB = somaAB.toFixed(2).replace('.', ',');
  console.log(somaAB);
  ResultadoSomaAB.textContent = formattedsomaAB;
}

start();
