var red, blue, yellow,green,pink,white;
red = '\u001b[31m';
blue = '\u001b[34m';
yellow = '\u001b[33m';
green = '\u001b[32m';
pink = '\u001b[35m';
white = '\u001b[38m';

if(process.argv[3] && process.argv[4]){
switch (process.argv[2]) {
  case "add":
    console.log(`${white}${(+process. argv[3]) + (+process. argv[4])}`)
    break;
  case "sub":
    console.log(`${blue}${(+process. argv[3]) - (+process. argv[4])}`)
    break;
  case "mult":
    console.log(`${green}${(+process. argv[3]) * (+process. argv[4])}`)
    break;
  case "div":
    console.log(`${pink}${(+process. argv[3]) / (+process. argv[4])}`)
    break;
     default:
        console.log(`${red}Operação não encontrada`)
}
}else{
    console.log(`${red}Erro(Esperava 2 parâmetros e só recebi um)`)
}


