function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  console.log(buttonCalculateImc);
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  console.log('cliquei');
}

start();
