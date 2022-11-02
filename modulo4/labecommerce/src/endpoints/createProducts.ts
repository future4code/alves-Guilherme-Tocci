import { Request, Response } from "express";
import productsInsert from "../data/productsInsert";
import { productsData, productsInsert } from "../Types/typeProducts";


export default async function createProducts(req:Request,res: Response) {
    try {
        const {name,price,image_url}:productsInsert = req.body
        if(!name || !price || !image_url){
            throw new Error("Os valores de name,price e img devem ser passados")
        }
        const productsData:productsData={
            id:Date.now().toString(),
            name,
            price,
            image_url
        }
        const resposta = await productsInsert(productsData)
        res.status(201).send({message:resposta})

    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}