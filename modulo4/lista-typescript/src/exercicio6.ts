type Clientes ={
    cliente:string,
    saldoTotal:number,
    debitos:number[]
}

const contas: Clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function ListaClientesNegativados(contas:Clientes[]):Clientes[]{
    contas.forEach((cliente)=>{
        let soma = 0
        for(let i = 0; i <= cliente.debitos.length -1; i++){
            soma += cliente.debitos[i]
        }
        cliente.saldoTotal = cliente.saldoTotal -soma
        cliente.debitos = []
    });
    const listaSaldosNegativados = contas.filter((cliente)=>{
        return cliente.saldoTotal < 0
    })
    return listaSaldosNegativados
}
console.table(ListaClientesNegativados(contas))