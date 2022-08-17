import express,{Request, Response} from "express";
import cors from "cors";
import {array} from "./afazeres";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

type afazeres ={
    "userId":number,
    "id": number,
    "title":string,
    "completed": boolean
}

const arrayAfazeres: afazeres[] = array

app.get('/afazeres/:completed',(req:Request,res:Response)=>{

const teste = req.params.completed
const newArray = arrayAfazeres.filter((completed)=>{
  if(teste){
    return completed.completed === true
  }else{
    return completed.completed === false
  }
})
res.send(newArray)

})


app.post("/afazeres/addAfazeres", (req, res) => {

    const { userId, title, completed } = req.body

    const afazer = arrayAfazeres.find((user) => user.userId === userId)

    if (afazer) {
        arrayAfazeres.push({
            "userId": userId,
            "id": +Date.now(),
            "title": title,
            "completed": completed
        })

        res.send('Tarefa cadastrada')
    } else {
        res.status(400).send("Usuario não encontrado")
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});