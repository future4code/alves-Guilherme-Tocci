import { stringify } from "querystring";
import { connection } from "..";

export default async function insertTask(
   id:string,
   title:string,
   description:string,
   deadline:string,
   authorid:string
){
await connection('to_do_list_tasks')
.insert({
    id,
    title,
    description,
    deadline,
    authorid
})
}