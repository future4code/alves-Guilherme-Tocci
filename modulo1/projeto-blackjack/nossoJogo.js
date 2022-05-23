/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartaZero
let cartaUm
let cartaDois
let cartaTres


if (confirm("Deseja iniciar uma partida?")===true){   
       cartaZero = comprarCarta()
       cartaUm = comprarCarta()
       cartaDois = comprarCarta()
       cartaTres = comprarCarta()    
}else{
    console.log(`O jogo acabou`)
}
const primeiraCarta = comprarCarta();
const segundaCarta = comprarCarta();
console.log(`Você possui as seguintes cartas :${primeiraCarta.texto} e ${segundaCarta.texto}.`)
let somaCartaUser = primeiraCarta.valor + segundaCarta.valor
console.log(`Sua pontuação ${somaCartaUser}.`)

const primeiraCartaPc = comprarCarta();
const segundaCartaPC = comprarCarta();
console.log(`O computador possui as seguintes cartas : ${primeiraCartaPc.texto} e ${segundaCartaPC.texto}`)
let somaCartaPc = primeiraCartaPc.valor + segundaCartaPC.valor
console.log(`A pontuação do computador é :${somaCartaPc}`)
      
if(somaCartaPc>somaCartaUser && somaCartaPc<=21){
   console.log(`O computador ganhou!`)

}else if(somaCartaPc<somaCartaUser && somaCartaUser<=21){
   console.log(`O usuário ganhou!`)

}
else{
   console.log(`Empate`)

}

