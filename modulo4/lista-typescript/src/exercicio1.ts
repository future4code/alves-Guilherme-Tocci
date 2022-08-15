

function userStats(nome:string, data:string):string{
const [dia,mes,ano] = data.split("/")

    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de
    ${mes} do ano de ${ano}`
}
console.log(userStats("Guilherme","04/10/1998"))