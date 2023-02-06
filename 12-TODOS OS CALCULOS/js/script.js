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

function calculoDiviAB(numeroA, numeroB) {
  return numeroA / numeroB;
}

function calculoDiviBA(numeroA, numeroB) {
  return numeroB / numeroA;
}

function calculoPotAB(numeroA, numeroB) {
  return Math.pow(numeroA, numeroB);
}

function calculoPotBA(numeroA, numeroB) {
  return Math.pow(numeroB, numeroA);
}

function calculoRaizA(numeroA) {
  return Math.sqrt(numeroA);
}

function calculoRaizB(numeroB) {
  return Math.sqrt(numeroB);
}

function calculoMedia(numeroA, numeroB) {
  return (numeroA + numeroB) / 2;
}

function calculoFatorialA(numeroA) {
  if (numeroA < 0) return -1;
  else if (numeroA == 0) return 1;
  else {
    return numeroA * calculoFatorialA(numeroA - 1);
  }
}

function handleButtonClick() {
  var inputnumeroA = document.querySelector('#input-numero-A');
  var inputnumeroB = document.querySelector('#input-numero-B');

  var numeroA = Number(inputnumeroA.value);
  var numeroB = Number(inputnumeroB.value);

  console.log(numeroA);
  console.log(numeroB);

  /* ... */

  /*resultado-FATORIAL-A*/
  var ResultadoFatorialA = document.querySelector('#resultado-fat-A');
  var FatorialA = calculoFatorialA(numeroA);
  var formatteFatorialA = FatorialA.toFixed(2).replace('.', ',');
  console.log(FatorialA);
  ResultadoFatorialA.textContent = formatteFatorialA;

  calculoMedia;
  /*resultado-Media  */
  var ResultadoMedia = document.querySelector('#resultado-media');
  var Media = calculoMedia(numeroA, numeroB);
  var formattedMedia = Media.toFixed(2).replace('.', ',');
  console.log(Media);
  ResultadoMedia.textContent = formattedMedia;

  /*resultado-RAIZ-B  */
  var ResultadoRaizB = document.querySelector('#resultado-raiz-B');
  var RaizB = calculoRaizB(numeroB);
  var formatteRaizB = RaizB.toFixed(2).replace('.', ',');
  console.log(RaizB);
  ResultadoRaizB.textContent = formatteRaizB;

  /*resultado-RAIZ-A  */
  var ResultadoRaizA = document.querySelector('#resultado-raiz-A');
  var RaizA = calculoRaizA(numeroA);
  var formatteRaizA = RaizA.toFixed(2).replace('.', ',');
  console.log(RaizA);
  ResultadoRaizA.textContent = formatteRaizA;

  /*resultado-POT-BA  */
  var ResultadoPotBA = document.querySelector('#resultado-pot-BA');
  var PotBA = calculoPotBA(numeroA, numeroB);
  var formattePotBA = PotBA.toFixed(2).replace('.', ',');
  console.log(PotBA);
  ResultadoPotBA.textContent = formattePotBA;

  /*resultado-POT-AB  */
  var ResultadoPotAB = document.querySelector('#resultado-pot-AB');
  var diviPotAB = calculoPotAB(numeroA, numeroB);
  var formattePotAB = diviPotAB.toFixed(2).replace('.', ',');
  console.log(diviPotAB);
  ResultadoPotAB.textContent = formattePotAB;

  /*resultado-divi-AB  */
  var ResultadoDiviAB = document.querySelector('#resultado-div-AB');
  var diviAB = calculoDiviAB(numeroA, numeroB);
  var formattediviAB = diviAB.toFixed(2).replace('.', ',');
  console.log(diviAB);
  ResultadoDiviAB.textContent = formattediviAB;

  /*resultado-divi-BA  */
  var ResultadoDiviBA = document.querySelector('#resultado-div-BA');
  var diviBA = calculoDiviBA(numeroA, numeroB);
  var formattediviBA = diviBA.toFixed(2).replace('.', ',');
  console.log(diviBA);
  ResultadoDiviBA.textContent = formattediviBA;

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
