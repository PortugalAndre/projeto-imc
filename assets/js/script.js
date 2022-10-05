//Função responsável por iniciar o funcionamento de todo o sistema ao receber inputs do HTML
function start() {
  var inputPeso = document.querySelector('#inputPeso');
  var inputAltura = document.querySelector('#inputAltura');

  inputPeso.addEventListener('input', inputRecebido);
  inputAltura.addEventListener('input', inputRecebido);
}

function calcularImc(peso, altura) {
  //prettier-ignore
  return peso / (altura ** 2);
}

function calcularConsumoDeAgua(peso) {
  return peso * 0.035;
}

//Função criada para converter valores dos inputs em number,
// calcular IMC, calcular sugestão de consumo de água,
// escolher faixa de IMC e exibir resultados no HTML
function inputRecebido() {
  var peso = Number(inputPeso.value);
  var altura = Number(inputAltura.value);
  var imc = calcularImc(peso, altura);
  resultadoImc.textContent = imc.toFixed(2) + 'kg/m²';
  var consumoDeAgua = calcularConsumoDeAgua(peso);
  resultadoConsumoDeAgua.textContent = consumoDeAgua.toFixed(2) + 'L';
  if (imc < 18.5) {
    var faixaImc = 'Baixo peso';
  } else if (imc >= 18.5 && imc < 25) {
    var faixaImc = 'Estado nutricional adequado';
  } else if (imc >= 25 && imc < 30) {
    var faixaImc = 'Sobrepeso';
  } else if (imc >= 30 && imc < 35) {
    var faixaImc = 'Obesidade Grau I';
  } else if (imc >= 35 && imc < 40) {
    var faixaImc = 'Obesidade Grau II';
  } else if (imc >= 40) {
    var faixaImc = 'Obesidade Grau III';
  }
  resultadoFaixaImc.textContent = faixaImc;
}

start();
