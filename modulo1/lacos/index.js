//   Exercícios de interpretação de código
//1. Ele está realizando um looping que se repete 5 vezes(enquanto i for menor que 5).O resultado impresso no console será 10. resolução : 0+0=0;0+1=1;1+2=3;3+3=6;6+4=10.
//2. Não é o suficiente porque o número é o valor dentro do array e você precisa saber qual a posição desse valor.
/* lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let index = 0
for (let numero of lista) {
    
  if (numero > 18) {
		console.log(numero)

	}
    console.log("index",index++)
}
*/
//a) Apenas numeros que são maiores que 18.Sendo eles 19,21,23,25,27 e 30.
//b) "ainda nao respondidos"
//3.Iria se repetir 4 vezes, pois enquanto a quantidadeAtual for menor que a quantidadeTotal o looping não se encerra.E também o valor de linha seria de * pois definimos esse valor na variavel.
//Exercícios de escrita de código
//1
let quantidadePets = +prompt("Quantos bichos de estimação você possui?")
let nomePets = []
    if (quantidadePets===0){
        console.log("Que pena! Você pode adotar um pet!")

    }else{
        while(quantidadePets>0){    
            nomePets.push(prompt("Digite o nome do seu pet"))
            quantidadePets-- // Esse operador realiza um decréscimo, no caso ele está reduzindo a quantidade de vezes que o prompt irá aparecer para o usuário,
             //ou seja se o usuário digitou que tem 3 pets, a prompt iria perguntar 3 vezes então toda vez que ela aparecer reduzirá em 1 até que o número chegue a zero 
             // e pare de lançar a prompt para o array ser impresso no console.
        
        }
        console.log(nomePets)
    }
    //2.
    const arrayOriginal=[1,2,3,4]
    //a)
    const imprimeOriginal =(array)=>{
        for(valor of array){
            console.log(valor)
        }   
    }
    //b)
    const imprimeDividido10 =(array)=>{
        for(valor of array){
            console.log(valor/10)
        }   
    }
    //c)
    const inserePar =(array)=>{
        let arrayPar = []
        for(valor of array){
            if(valor%2===0){
                arrayPar.push(valor)
            }
            
        }  
        console.log(arrayPar)
    }
    inserePar(arrayOriginal)



    


