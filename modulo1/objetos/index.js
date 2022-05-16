/*
exercicio 1
a)
Resposta : 
No primeiro console = "Matheus Nachtergaele"
No segundo console = "Virginia Cavendish"
No terceiro console  = canal: "Globo", horario: "14h"
*/

//exercicio 2
//a)

/*
idade: 3
nome: "Juca"
raca: "SRD"

idade: 3
nome: "Juba"
raca: "SRD"

idade: 3
nome: "Jubo"
raca: "SRD"

*/
//b)
//Resposta : ele copia o objeto

//exercicio 3
//a)false , undefined.
//b)backender deu falso pois no objeto ele se encontra dessa forma,
//já na altura o valor é dado como undefined porque não definimos essa propriedade.

// 1 exercicio de codar
const pessoa = {
    nome : "Guilherme",
    apelidos : ["Gui","Guigui","Toti"],
}
function dados1 (objeto){
    console.log(`Eu sou ${objeto.nome},mas pode me chamar de ${objeto.apelidos[0]},
    ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)

}
dados1(pessoa)


//exercicio 2 de codar
//b
const novosapelidos = {
    ...pessoa,
    apelidos : ["Guigo","TT","Guigas"]

}
dados1(novosapelidos)
//exercicio 2 de codar
//a)
const objeto1 = {
    nome : "Guilherme",
    idade : 23,
    profissao : "desenvolvedor"
}



const objeto2 = {
    nome : "Tuba",
    idade : 25,
    profissao : "professor"
}
//b)
function objeto(dados1,dados2){
    const array = [dados1.nome,dados1.nome.length,dados1.idade,
        dados1.profissao,dados1.profissao.length,dados2.nome,
        dados2.nome.length,dados2.idade,dados2.profissao,dados2.profissao.length]
    
}

objeto(objeto1,objeto2)
// exercicio 3 de codar

const carrinho = []
const objetoFruta1 = {
    nome : "banana",
    disponibilidade : true
}
const objetoFruta2 = {
    nome : "mamao",
    disponibilidade : true
}
const objetoFruta3 = {
    nome : "uva",
    disponibilidade : true
}
function recebeFruta(fruta1,fruta2,fruta3){
carrinho.push(fruta1,fruta2,fruta3)
return carrinho
}
recebeFruta(objetoFruta1,objetoFruta2,objetoFruta3)
console.log(carrinho)
//desafio 1
function pessoauser(){
    const nomePessoa = prompt("Nome: ")
    const profissao = prompt("Profissao")
    const idade = prompt("idade")
    
    const dadosUser = {
        nomeObj : nomePessoa,
        idadeObj : idade,
        profissaoObj : profissao,
    }

        console.log(dadosUser)
        console.log(dadosUser.nomePessoa)
        console.log(dadosUser.idadeObj)
        console.log(dadosUser.profissaoObj)
        console.log(typeof dadosUser)
}
    pessoauser()




    

