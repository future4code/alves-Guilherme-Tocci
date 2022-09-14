
import express, {Express,Request, Response} from 'express'
import cors from 'cors'
import { Conta,Extrato } from './type';
import { contas } from './contas';
import { rejects } from 'assert';

const app: Express = express();

app.use(express.json());
app.use(cors());
let Errorcode: number = 400

app.post('/users',(req:Request,res:Response)=>{
  
    try{
        const{name,cpf,nascimentoComoString}=req.body

        const [ dia,mes,ano] = nascimentoComoString.split("/")

        const nascimento: Date =new Date(`${ano}-${mes}-${dia}`)

        const idadeEmMilisegundos:number =  Date.now() - nascimento.getTime() //Passa a idade em milisegundos
        const idadeEmAnos: number = idadeEmMilisegundos / 1000 / 60 / 60 / 24 /365
        if(idadeEmAnos < 18){
            res.statusCode = 406
            throw new Error("Apenas maiores de 18 anos podem abrir uma conta!")
        }

        contas.push({
            name,
            cpf,
            nascimento,
            saldo:0,
            extrato:[{value:0,date:"", description:""}]
        })
        res.status(201).send("Conta criada com sucesso !")
    }catch(error:any){
        res.status(Errorcode).send({ message: error.message})
    }
})
app.get("/users/all", (req: Request, res: Response) => {
    
    try{
       if(!contas.length){
        res.statusCode = 404
        throw new Error("Nenhuma conta encontrada")
       }
       res.status(200).send(contas)
    }catch(error:any){
        res.status(Errorcode).send({ message: error.message})
    }
  })


app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});