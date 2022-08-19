import express, { application, Express, Request, Response } from "express";
import cors from "cors";
import { users, userType, User } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});

// Mostra todos os usuários
app.get("/allUsers", (req: Request, res: Response) => {
  res.send(users);
});

// Mostra o usuário pelo nome
app.get("/userByName", (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
      const name: string = req.query.name as string;
      const user: User[] = users.filter((user) => user.name === name);
      if (user.length === 0) {
        codeError = 404;
        throw new Error("User not found");
      }
      res.status(200).send(user);
    } catch (error: any) {
      res.status(codeError).send({ message: error.message });
    }
  });

  //Mostra os usuários de acordo com o tipo, se é ADMIN ou NORMAL.
app.get("/userType", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const type: string = req.query.type as string;
    const user: User[] = users.filter((user) => user.type === type);
    if (user.length === 0) {
      codeError = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});

//Cria um novo usuário
app.post('/newUser',(req:Request,res:Response)=>{
    let codeError:number=400
    try{

        const {id,name,email,type,age} = req.body
        if(!id || !name || !email || !type || !age){
            codeError = 422
            throw new Error('Please check the fields')
        }
        const newUser : User = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(201).send({message:'User created successfully'})

    }catch(error:any){
        res.status(codeError).send({ message: error.message})
    }
})

//Cria um novo usuário porém apaga o criado anteriormente (OBS: Não utilizar)
// app.put('/newUserPut',(req:Request,res:Response)=>{
//     let codeError:number=400
//     try{

//         const {id,name,email,type,age} = req.body
//         if(!id || !name || !email || !type || !age){
//             codeError = 422
//             throw new Error('Please check the fields')
//         }
//         const newUser : User = {
//             id,
//             name,
//             email,
//             type,
//             age
//         }
//         users.push(newUser)
//         res.status(201).send({message:'User created successfully'})

//     }catch(error:any){
//         res.status(codeError).send({ message: error.message})
//     }
// })

// Respostas dos Exercícios 
// 1- a) get 
//    b) users
// 2- a) Exportando as caracteristicas do typo , que é um array.
//    b) Sim, colocando um if que verifica se o type é valido.
// 3- a) query
//    b) feito no throw new Error("User not found")
// 4- a) O usuário criado anteriormente foi deletado
//    b) Não, pois ele apaga o usuário anterior.
// OBSERVAÇÃO : Deixei o nome da entidade diferente de propósito, pois quis deixar 2 métodos iguais para estudar posteriormente a mesma função. 



    


