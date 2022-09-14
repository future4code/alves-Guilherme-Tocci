import {Request,Response} from "express";
import insertUser from "../data/insertUsers";


export default async function createUser(
    req: Request,
    res: Response
){
    try {
        
        if(
            !req.body.name ||
            !req.body.nickname || 
            !req.body.email 
        ){
            res
            .status(400).send('Preencha todos os campos por favor')
        return
        }

        const id: string = Date.now() + Math.random().toString()
        await insertUser(    
            id,   
            req.body.name,
            req.body.nickname, 
            req.body.email 
        )
        res
        .status(200).send('Usuário criado com sucesso')
    } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}