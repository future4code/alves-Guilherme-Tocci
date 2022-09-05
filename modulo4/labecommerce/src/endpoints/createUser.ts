import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { userInput, userData} from "../Types/typesUser";



export default async function createUser(req:Request,res:Response) {
    try {
        const {name,email,password}:userInput = req.body
        if(!name || !email || !password){
            throw new Error(" Name, email e password são campos obrigatórios")
        }

        const userInsert: userData = {
            id: Date.now().toString(),
            name,
            email,
            password
        }
      const resposta = await insertUser(userInsert)
        
      res.status(200).send({message: resposta})
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}


