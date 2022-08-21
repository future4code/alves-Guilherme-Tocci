import express,{Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


//Exercicios

type perfil = { id : number , name : string, phone : string, email : string , website : string }
type post = {userId : number , id : number , title : string, body : string}
const usuarios : perfil[] = usuario
const posts : post[] = postsAll

app.get('/', (req: Request, res: Response) => {          
    res.send("Hello from Express")
})
app.get("/users/", (req, res) => {          
    res.send(usuarios)
})
app.get("/posts/", (req, res) => {          
    res.send(posts)
})

app.get("/posts/:id", (req : Request, res : Response) => {
    const idUsuario = +req.params.id
    const postById = posts.filter((post)=>post.userId===idUsuario)
       res.send(postById)
   })

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});