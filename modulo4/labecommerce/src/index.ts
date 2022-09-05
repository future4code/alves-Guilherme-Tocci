import { application } from "express";
import { app } from "./app";
import createProducts from "./endpoints/createProducts";
import createUser from "./endpoints/createUser";
import getProducts from "./endpoints/getProducts";
import getUsers from "./endpoints/getUsers";


app.post("/user", createUser)
app.get("/user",getUsers)
app.post("/products",createProducts)
app.get("/products",getProducts)