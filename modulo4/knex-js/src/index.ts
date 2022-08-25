import { application, Request, Response } from "express";
import app from "./app";
import connection from "./connection"

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await connection.raw(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

