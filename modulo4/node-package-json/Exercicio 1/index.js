/* Exercício 01 

a)Resposta : Basta utilizar process. argv[2]
b)console.log(`olá ${process.argv[2]}, você tem ${process.argv[3]} anos.`)
c)console.log(`olá ${process.argv[2]}, você tem ${process.argv[3]} anos. Em sete anos você terá ${+process.argv[3]+7} anos.`)*/

const verification = process.argv[2]
if(process.argv[2] && process.argv[3]){
console.log(`olá ${process.argv[2]}, você tem ${process.argv[3]} anos. Em sete anos você terá ${+process.argv[3]+7} anos.`)
}else{
    console.log("Erro(Esperava 2 parâmetros e só recebi um)")
}














