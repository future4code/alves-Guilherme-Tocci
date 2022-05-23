// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b)=>a-b)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((valor)=>{if(valor%2===0)
    return valor})
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((valor)=>{if(valor%2===0)return valor}).map((valor)=>valor**2)}
 


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null,array)

  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = undefined
    let menor = undefined
    if (num1-num2>=1) {(maior=num1),(menor=num2)}
    else if (num2-num1>=1){(maior=num2),(menor=num1)}
    else{
        maior=num1,menor=num2
    }
    let objetoNovo={
        maiorDivisivelPorMenor: maior%menor===0,
        maiorNumero: maior,
        diferenca: maior - menor
    }

     return objetoNovo
    }




    






// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nPares = []
     for (let i = 0 ;i <=2*(n-1) ; i++)
        if (i%2===0){
            nPares.push(i)
        }
        return nPares

   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}