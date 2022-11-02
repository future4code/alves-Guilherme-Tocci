import { Request, Response } from "express";
import selectUser from "../data/selectUsers";



export default async function getUser(req:Request,res:Response){
    try {
        const allUsers = await selectUser

        if(!allUsers?.length){
            throw new Error("Nenhum usuário cadastrado!")
        }

        res.status(200).send(allUsers)
    
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}