//Exercícios de interpretação de código
//1.
//a)Os objetos serão mapeados mostando item, index e array.
//2
//a)Irá mostrar o nome correspondente da propriedade, no caso item.nome ou seja os nomes sem os apelidos.
//3.
//a)Todos os objetos que não correspondem a "Chijo".
//Exercícios de escrita de código
//1.
//a)
    /*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
    const novoarray = pets.map((item) => {
        
      return console.log(item.nome)
    })
    */
//b)
/*
    const pets2 = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
    const arraySalsicha = pets2.filter((item,index,array)=>{
        return item.raca==="Salsicha"

    })
 console.log(arraySalsicha)
 */
//c)
/*
    const pets3 = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
    const arrayPoodles = pets3.filter((item,index,array)=>{
        return item.raca==="Poodle"
}).map((mensagem)=> `Você ganhou um cupom de desconto de 10% para tosar o/a ${mensagem.nome}`)
console.log(arrayPoodles)
*/
//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a)
 const arrayDeNome = produtos.map((item,index,array)=>{
     return item.nome

 })
 console.log(arrayDeNome)
 
//b)

//c)
const arrayBebidas = produtos.filter((item,index,array)=>{
    return item.categoria==="Bebidas"

})
console.log(arrayBebidas)

