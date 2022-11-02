import express, {Request, Response} from 'express'

export const getUsersFilterByType = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
       const type: string = req.params.type;
 
       if (type.toUpperCase() !== "OPERATIONS" &&
          type.toUpperCase() !== "TEACHER" &&
          type.toUpperCase() !== "CX"
       ) {
          res.statusCode = 422;
          throw new Error(`"type" value isn´t a valid one! It should be "operations", "teacher"
           or "cx" to be a valid one! Please, try again :)`)
       }
 
       const users = await selectUsersByType(type);
       
       res.status(200).send(users);
 
    } catch (error: any) {
       console.log(error);
       res.send(error.message || error.sqlMessage);
    };
 };

function selectUsersByType(type: string) {
    throw new Error('Function not implemented.');
}
