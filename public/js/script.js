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

//Função criada apenas para testar escutador de evento
function inputRecebido() {
  var peso = Number(inputPeso.value);
  var altura = Number(inputAltura.value);
  var imc = calcularImc(peso, altura);
  resultadoImc.textContent = imc;
}

start();
//incluir cálculo de IMC
//IMC = Peso / (Altura ** 2)

//Incluir sugestão de ingestão de água por dia
//70(kg) X 0,035(L) = 2,45 L/dia
