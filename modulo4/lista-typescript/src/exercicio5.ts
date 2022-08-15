type User ={
    name:string,
    email:string,
    role:string
}

const user: User[]= [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function returnAdminEmail(lista: User[]):string[]{
    const userList:User[] = lista.filter((user)=>{
        return user.role ==='admin';

    });
    const emails: string[] = userList.map((user)=>{
        return user.email;
    });
    return emails;
}
 console.log(returnAdminEmail(user))
