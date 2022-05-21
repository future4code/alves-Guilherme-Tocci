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
   const pergunta= prompt("Quer iniciar uma nova rodada?").toLowerCase
    console.log("Boas vindas ao jogo de Blackjack!")
    funcaoDeConfirmar=()=>{
   if (pergunta ==="sim"){
      return true

      }else{
         return false

      }
    }