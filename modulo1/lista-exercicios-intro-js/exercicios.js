// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  num1 = prompt(`Digite a altura do retângulo`)
  num2 = prompt(`Digite a largura do retângulo`)
  const resultado = num1 * num2 
  console.log(resultado)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt(`Digite o ano atual`)
  const anoNascimento = prompt(`Digite seu ano de nascimento`)
  const calculandoDiferenca = anoAtual - anoNascimento
  console.log(calculandoDiferenca)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calcula = peso / (altura * altura)
  console.log(calcula)
  return calcula

}
//calculaIMC(100,1.93) 

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt(`Digite seu nome`)
  const idade = prompt(`Digite sua idade`)
  const email = prompt(`Digite seu email`)
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua cor favorita")
  const cor2 = prompt("Escolha mais uma cor")
  const cor3 = prompt("Agora escolha outra cor")
  const cores = [cor1,cor2,cor3]
  console.log(cores)
  return cores 
 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
  

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const calcula = custo / valorIngresso
  //console.log(calcula)
  return calcula

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const variavel1 = string1.length
  const variavel2 = string2.length
  const variavel3 = string1 >= string2
  return variavel3
  
 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const list = ["olá","hellow","hi"]
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const list = ["1","2","3","4","5"]
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const dados1 = array.shift()
  const dados2 = array.pop()
  array.push(dados1)
  array.unshift(dados2)
  return array
  
  


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}