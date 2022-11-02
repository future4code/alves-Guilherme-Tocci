import { app } from "./app";
import UserEnpoint from "./endpoints/User";
import Authenticator from "./services/Authenticator";
import HashManager from "./services/HashManager";

const userEnpoint = new UserEnpoint()
 

app.post("/criar-usuario",userEnpoint.create)
app.post("/login",userEnpoint.login)
app.get("/user/profile",userEnpoint.getProfile)




