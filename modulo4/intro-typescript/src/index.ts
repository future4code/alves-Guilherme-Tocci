console.log("hellow word")

//Ex 1

function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log(checaTriangulo(1,2,3))

  //Ex 2
  function imprimeTresCoresFavoritas() {
    const cor1:string = process.argv[2]
    const cor2:string = process.argv[3]
    const cor3:string = process.argv[4]
    const cor:string[] = [cor1,cor2,cor3]
    console.table(cor)
 }
 imprimeTresCoresFavoritas()

//Ex 3

 function checaAnoBissexto(ano:number) {
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }
 console.log(checaAnoBissexto(2022))

 //Ex 4

 function comparaDoisNumeros(num1:number, num2:number) {
    let maiorNumero:number;
    let menorNumero:number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }
console.log(comparaDoisNumeros(10, 2))

//Ex 5

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ):string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
   }
   console.log(checaRenovacaoRG(2022,1998,2018))

   //Ex 6

function numbers(number1:number,number2:number):void{
     
    let add = number1 + number2
    let sub = number1 - number2
    let mult = number1 * number2
    let dif = number1 > number2 ? `O número ${number1} é maior que o ${number2}`: `O número ${number2} é maior que o ${number1}`
    console.log(add,sub,mult,dif)
}
numbers(10, 5)

//Ex 7

const bio = (adenina: string, uracila: string, tinina: string, citosina: string, guanina: string) => {  
    adenina = uracila     
    tinina = adenina     
    guanina = citosina     
    citosina = guanina 
    const adenina1 = adenina 
    const tinina1 = tinina
    const guanina1 = guanina
    const citosina1 = citosina
    console.log(adenina1,tinina1,guanina1,citosina1)
}
