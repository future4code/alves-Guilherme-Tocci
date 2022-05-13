//1.
/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/

//a) 
// Resposta : console.log(minhaFuncao(2)) = 10 
// Resposta : console.log(minhaFuncao(10)) = 50
//b) sem o console o codigo nao consegue ser expresso

//2
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
a)
Resposta : Essa funcão é uma função anônima, sua utilidade vem em situações específicas, 
como ela não possui um nome, logo não consegue ser "invocada" posteriormente tendo apenas
essa utilidade nesse comando.Esse código serve para verificar se a resposta do usuário é a palavra cenoura.*/

//b
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
Resposta : Vai dar true em todas.
*/

/*1
//a)
function ex1() {
    console.log("Eu sou Guilherme, tenho 23 anos, moro em Brasília e sou estudante.")    
}
ex1()*/
//b)
/*
function ex2(nome,idade,cidade,profissão){
    console.log("Eu sou,",nome,"tenho",idade,"anos,moro em ",cidade,"e sou",profissão)
    return ("Eu sou," + nome + "tenho" + idade + "anos,moro em " + cidade + "e sou" + profissão)
    
}
const nome = prompt(`Qual é o seu nome?`)
const idade = prompt(`Qual a sua idade?`) 
const cidade = prompt(`Onde você mora?`)
const profissao = prompt(`Qual a sua profissão?`)
ex2(nome,idade,cidade,profissao)*/

//2
//a)
/*
const variavel = (number1,number2) => {return number1+number2}
console.log(variavel(1,4))*/
//b)
/*const numeros = (numero1,numero2)=>{
    const comparar = numero1>=numero2
    return comparar
}
console.log(numeros(1,2))*/
//c)
/*const variavel = (number1)=>{
    const comparar = number1%2 == 0
    return comparar 
    
}
console.log(variavel(4))*/
//d
/*
const variavel = (texto)=>{
    console.log(texto.length)
    console.log(texto.toUpperCase())
    
}

variavel("souburro")*/
//3.
let user = +prompt(`Digite um número`)
let user2 = +prompt(`Digite outro número`)

const soma = (number1,number2)=>{
    const somar =Number(number1 + number2)
    return somar
    
}
console.log(`A soma de ${user} é ${user2} é ${soma(user,user2)}`)

const subtracao = (number1,number2)=>{
    const subtrair = Number(number1-number2)
    return subtrair
}
console.log(`A subtração de ${user} é ${user2} é ${subtracao(user,user2)}`)


const multiplicacao = (number1,number2)=>{
    const multiplicar = Number(number1 * number2)
    return multiplicar
}

console.log(`A multiplicação de ${user} é ${user2} é ${multiplicacao(user,user2)}`)

const divisao = (number1,number2)=>{
    const dividir = Number(number1/number2)
    return dividir
}

console.log(`A divisão de ${user} é ${user2} é ${divisao(user,user2)}`)








