/*
1.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) 

obs : console.log(b) = 10
obs : console.log(a,b) = 10, 5

2.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

obs: console.log(todos são 10)

3.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

let horasDia = prompt("Quantas horas você trabalha por dia?")
let ganhosDia = prompt("Quanto você recebe por dia?)
alert('Voce recebe ${horasDia/ganhosDia} por hora')
*/
let nome = undefined
let idade = undefined
console.log(typeof nome,typeof idade)
//Por que é uma variável que ainda não possui valor.
nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
console.log(typeof nome, typeof idade)
// Eu notei que as duas são strings
console.log ("Olá",nome,"você tem",idade,"anos")
let bone = prompt ("Você está usando boné hoje?")
let doce = prompt ("Você comeu algum doce hoje?")
let dormirBem = prompt("Você dormiu bem hoje?")
console.log("Você está usando boné hoje?",bone)
console.log("Você comeu algum doce hoje?",doce)
console.log("Você dormiu bem hoje?",dormirBem)
let a = 10
let b = 25
let c = a // recebe 10
a = b // recebe 25
b = c // recebe 10
console.log("O novo valor de a é",a)// o novo valor de a é 25
console.log("O novo valor de b é",b)// o novo valor de b é 10

