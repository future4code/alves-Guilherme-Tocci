//1.

//let array
//console.log('a. ', array)

//Resposta : undefined

//array = null
//console.log('b. ', array) 

//Resposta : null

/*
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//Resposta : 11

let i = 0
console.log('d. ', array[i])
//Resposta : 3

array[i+1] = 19
console.log('e. ', array)
//Resposta : 19

const valor = array[i+6]
console.log('f. ', valor)
Resposta : 9
*/

//2

//const frase = prompt("Digite uma frase")
//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Resposta : SUBI NUM ÔNIBUS EM MIRROCOS 27

//1.
/*
const perguntanome = prompt(`Digite seu nome`)
const perguntaemail =prompt(`Digite seu email`)
console.log(`O email `, perguntaemail.trim(),`foi cadastrado com sucesso.`,`Seja bem-vinda(o)`,perguntanome)

//2.

const comidas = ["pizza", "sorvete", "açaí", "picanha", "camarão"]
console.log(`Essas são minhas comidas preferidas`,"\n",comidas[0],"\n",comidas[1],"\n",comidas[2],"\n",comidas[3],"\n",comidas[4])
const comidadousuario = prompt (`Digite sua comida favorita`)
comidas[1] = comidadousuario
console.log(`Essas são minhas comidas preferidas`,"\n",comidas[0],"\n",comidas[1],"\n",comidas[2],"\n",comidas[3],"\n",comidas[4])*/
//3.

const array = []
const listadetarefas = array
 let info = prompt (`Digite uma tarefa`)
let i = 0
array[i] = info

info = prompt (`Digite uma segunda tarefa`)
i = 1
array[i] = info

info = prompt (`Digite uma terceira tarefa`)
i = 2
array[i] = info

console.log(array)

info = prompt (`Digite o número equivalente a tarefa que já realizou hoje`) - 1
array.splice(info,1)
console.log(array)


















