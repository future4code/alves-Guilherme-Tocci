export type Extrato = {
    value:number,
    date:string,
    description:string
}
export type Conta = {
    name:string,
    cpf:string,
    nascimento:Date,
    saldo:number,
    extrato: Extrato[]
}

