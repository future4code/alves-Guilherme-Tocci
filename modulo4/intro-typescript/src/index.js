console.log("hellow word");
//Ex 1
function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(1, 2, 3));
//Ex 2
function imprimeTresCoresFavoritas() {
    var cor1 = process.argv[2];
    var cor2 = process.argv[3];
    var cor3 = process.argv[4];
    var cor = [cor1, cor2, cor3];
    console.table(cor);
}
imprimeTresCoresFavoritas();
//Ex 3
function checaAnoBissexto(ano) {
    var cond1 = ano % 400 === 0;
    var cond2 = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2;
}
console.log(checaAnoBissexto(2022));
//Ex 4
function comparaDoisNumeros(num1, num2) {
    var maiorNumero;
    var menorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
    }
    var diferenca = maiorNumero - menorNumero;
    return diferenca;
}
console.log(comparaDoisNumeros(10, 2));
//Ex 5
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao) {
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    if (idade <= 20) {
        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos";
    }
    else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos";
    }
    else if (idade > 50) {
        return tempoCarteira >= 15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos";
    }
    else {
        return "error";
    }
}
console.log(checaRenovacaoRG(2022, 1998, 2018));
//Ex 6
function numbers(number1, number2) {
    var add = number1 + number2;
    var sub = number1 - number2;
    var mult = number1 * number2;
    var dif = number1 > number2 ? "O n\u00FAmero ".concat(number1, " \u00E9 maior que o ").concat(number2) : "O n\u00FAmero ".concat(number2, " \u00E9 maior que o ").concat(number1);
    console.log(add, sub, mult, dif);
}
numbers(10, 5);
//Ex 7
var bio = function (adenina, uracila, tinina, citosina, guanina) {
    adenina = uracila;
    tinina = adenina;
    guanina = citosina;
    citosina = guanina;
    var adenina1 = adenina;
    var tinina1 = tinina;
    var guanina1 = guanina;
    var citosina1 = citosina;
    console.log(adenina1, tinina1, guanina1, citosina1);
};
bio("A", "T", "G", "C");
