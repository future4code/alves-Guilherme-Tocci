import { app } from "./app";
import { createAddress } from "./endpoints/createdress";
import { getAddress } from "./endpoints/getAdress";


app.get("/address/:cep", getAddress)
app.post("/user/address/:cep", createAddress)