import express, {Request, Response} from 'express'

export const getUsersFilterByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
       let name = req.query.name as string
 
       if(!name){
          name = "%"
       }
 
       const users = await selectUsersByName(name);
       
       res.status(200).send(users);
 
    } catch (error: any) {
       console.log(error);
       res.send(error.message || error.sqlMessage);
    };
 };

function selectUsersByName(name: string) {
    throw new Error('Function not implemented.');
}
