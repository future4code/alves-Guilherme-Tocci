/*
1.
const bool1 = true
const bool2 = false
const bool3 = !bool2 

let resultado = bool1 && bool2
console.log("a. ", resultado) 
Resposta = true
Explicação : Negativa inverte o sentido logo boo13 = !boo12 vira true então true && true = true.

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
Resposta = false
Explicação : Se tiver qualquer false o resultado ficaria false logo true && false && true = false


resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
Resposta = true 
Explicação : bool1 || boo12 = true e negativa no resultado inverte seu sentido logo são !resultado = true ou seja true && true = true

console.log("d. ", typeof resultado)
Resposta = Boolean

2.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma)
Resposta = O problema é que no código , ele só irá realizar a soma de duas palavras ou seja strings e não numbers.

3.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const numero = Number(primeiroNumero)
const numero2 = Number(segundoNumero)
Resposta = no console.log(soma) irá mostrar o resultado da soma entre dois números e não mais duas strings.*/

//1.
let idadeusuario = Number(prompt("Qual é a sua idade?"))
let idadeamigo = Number(prompt("Qual a idade do seu melhor amigo?"))
console.log(`Sua idade é maior do que a do seu melhor amigo? ${idadeusuario>idadeamigo}`)
console.log(`A diferença da idade entre vocês é de ${idadeusuario-idadeamigo}`)

//2.
let numeropar = Number(prompt("insira um número par"))
numeropar = numeropar%2
console.log("O resto da divisão por 2 é",numeropar)
//Sempre que colocarmos um número par a divisão resultará em 0.
//sempre que colocarmos um número ímpar a divisão resultará em 1.

//3.
let dados = prompt(`Quantos anos você tem ?`)
let idademeses = dados * 12
console.log("Você tem",idademeses,"meses de vida")

let idadedias = dados * 365
console.log("Você tem",idadedias,"dias de vida")

let idadehoras = idadedias * 24
console.log("Você tem",idadehoras,"horas de vida")
//4
let num1 = Number(prompt(`Escolha um número`))
let num2 = Number(prompt(`Agora escolha mais um número`))
console.log(`O primeiro número é maior que o segundo?${num1>num2}`)
console.log(`O primeiro número é igual ao segundo?${num1===num2}`)
let result = num1%num2 
console.log(`O primeiro número é divisível pelo segundo?${result===0}`)
result = num2%num1
console.log(`O segundo número é divisível pelo primeiro?${result===0}`)


















