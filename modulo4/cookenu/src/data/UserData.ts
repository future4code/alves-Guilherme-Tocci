import User from "../model/User"
import { BaseDataBase } from "./BaseDataBase"



class UserData extends BaseDataBase{

    private static tableName = "usuario_cookenu"

    async getUserByEmail(email:string):Promise<User || undefined>{

        const result = await this.getConnetion()
        .select("*")
        .from("UserData.tableName")
        .where({email})

        if(!result.length){
            return undefined
        }

        return new User(result[0].id, result[0].nome, result[0].email, result[0].senha)
    }

    async createUser(user: User): Promise<string> {

        await this.getConnetion().insert({
            id: user.getId(),
            email: user.getEmail(),
            nome: user.getNome(),
            senha: user.getSenha(),
            role: user.getRole().toUpperCase()
        }).into(UserData.tableName)

        return `Usuario cadastrado com sucesso`
    }
}


export default UserData