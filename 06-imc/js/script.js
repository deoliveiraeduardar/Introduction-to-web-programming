function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  console.log(buttonCalculateImc);
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  console.log(weight);
  console.log(height);

  var imc = calculateImc(weight, height);
  console.log(imc);
}

start();
