

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    titulo: string,
    ano: number,
    genero: GENERO,
    pontuacao?:number

}

function organizaFilme(titulo: string, ano: number, genero: GENERO, pontuacao?:number):Filme{
    if(pontuacao){
return {
    titulo,
    ano,
    genero,
    pontuacao
}
    } else{
return {
    titulo,
    ano,
    genero,
}

    }
}
console.log(organizaFilme('Batman: O Cavaleiro das Trevas',2008,GENERO.ACAO,9))