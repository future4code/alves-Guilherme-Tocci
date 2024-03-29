enum SETORES{
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro",
}

type Funcionario ={
    nome: string,
    salario:number,
    setor: SETORES,
    presencial: boolean
}
const funcionarios: Funcionario[] =[

	{ nome: "Marcos", salario: 2500, setor:SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor:  SETORES.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETORES.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETORES.MARKETING, presencial: true }
]
function returnMarketingPresencial(lista: Funcionario[]){
    const novaLista: Funcionario[] = lista.filter((funcionario) => {
    return funcionario.setor === SETORES.MARKETING && funcionario.presencial === true;

    })
    return novaLista
}
console.table(returnMarketingPresencial(funcionarios))