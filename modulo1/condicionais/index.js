// Exercício 1 de interpretação
//a)O usuário vai digitar um número, se esse número dividido por 2 der resto exatamente igual a 0,
// vai aparecer que ele passou no teste, porém se der qualquer número diferente de 0 vai aparecer que o usuário não passou no teste.
//b)Números pares.
//c)Números ímpares.
//Exercício 2 de interpretação
//a)Para comprar alguma fruta.
//b)O preço da fruta  maçã  é  R$  5
//c)O preço de todas as frutas ficaria 5.
//Exercício 3 de interpretação
//a)A primeira linha está solicitando ao visitante que insira um número,no caso com o comando Number transformamos essa string em número.
//b)Esse número passou no teste.Se fosse o número -10 apareceria essa mensagem é secreta!!!.
//c)O console não pode imprimir algo que só se encontra dentro de uma função.Ele deveria mostrar console.log(numero)

//Exercício 1 de codar
/*const idadeUser = Number(prompt(`Digite sua idade`))
 if(idadeUser>=18){
        console.log("Você pode dirigir")
 }else{
        console.log("Você não pode dirigir")
  }*/
//Exercício 2 de codar
/*const turnoEscola = prompt(`Você estuda em qual horário? Digite M para matutino, V para vespertino ou N para noturno.`).toLowerCase()
function selecionaPeriodo(turno){

    if(turno==="m"){
        console.log("Bom dia!")
        
    }else if(turno==="v"){
         console.log("Boa tarde!")

    }else if(turno==="n"){
             console.log("Boa noite!")

}
}
selecionaPeriodo(turnoEscola)*/
//Exercìcio 3 de codar]
/*const turnoEscola = prompt(`Você estuda em qual horário? Digite M para matutino, V para vespertino ou N para noturno.`).toLowerCase()
switch(turnoEscola){

    case `m`:
        console.log("Bom dia!")
        break
    case`v`:
        console.log("Boa tarde!")
        break
    case `n`:
        console.log("Boa noite!")
        break
    default:
        console.log(`Turno não encontrado`)
        break

}
*/
//Exercício 4 de codar
/*const generoFilme = prompt(`Qual o gênero de filme que você gostaria de assistir?`).toLowerCase()
const valorIngresso =Number(prompt(`Qual o valor do ingresso?`))
function possibilidadeDeFilme(generoFilme,valorIngresso){
    if (generoFilme==="fantasia" && valorIngresso<=15){
        return console.log("Bom filme!")
    }else{
        return console.log("Escolha outro filme:(")
    
}
}
possibilidadeDeFilme(generoFilme,valorIngresso)*/
//1 desafio
const generoFilme = prompt(`Qual o gênero de filme que você gostaria de assistir?`).toLowerCase()
const valorIngresso = Number(prompt(`Qual o valor do ingresso?`))
const lanchinho = prompt(`Qual snack que você quer comprar?`)
function possibilidadeDeFilme(generoFilme,valorIngresso){
    if (generoFilme==="fantasia" && valorIngresso<=15){
        console.log("Bom filme!")
        return console.log(`Aproveite o seu ${lanchinho}`)
    }else{
        return console.log("Escolha outro filme:(")
    
}
}
possibilidadeDeFilme(generoFilme,valorIngresso)


