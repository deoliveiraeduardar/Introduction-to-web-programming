function start() {
  console.log('start');
  console.log(calculateImc);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

start();
