//Função responsável por iniciar o funcionamento do todo o sistema ao receber inputs do HTML
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
  //prettier-ignore
  return peso * 0.035;
}

//Função criada para converter valores dos inputs em number, calcular IMC
//calcular sugestão de consumo de água e exibir resultados no HTML
function inputRecebido() {
  var peso = Number(inputPeso.value);
  var altura = Number(inputAltura.value);
  var imc = calcularImc(peso, altura);
  resultadoImc.textContent = imc;
  var consumoDeAgua = calcularConsumoDeAgua(peso);
  resultadoConsumoDeAgua.textContent = consumoDeAgua;
}

start();
//(x)incluir cálculo de IMC
//Fórmula do IMC = Peso / (Altura ** 2)
//(x)Incluir resultado IMC no HTML com JS

//(x)Incluir função sugestão de ingestão de água por dia
//Fórmula: peso(kg) * 0,035(L) =  L/dia
//(x)Incluir resultado consumo de água no HTML com JS

//( )alterar casas decimais do IMC
//( )alterar casas decimais do Sugestão de água
//(x)alterar casas decimais dos inputs
//( )Incluir estrutura de decisão da faixa de IMC
//-receber valor calculado do IMC, estrutura de decisão
//( )Incluir resultado da decisão no HTML com JS

//( )Estilizar layout
//-containers para melhor disposição do conteúdo
//-incluir favicon, incluir fonte JetBrains no HTML
//( )Tornar layout responsivo

//( )Linkar site da aplicação com repositório do git/github
