import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GoToLoguin } from "../routes/Coordenator";

const useProtectedPage = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
        GoToLoguin(navigate)
        }
    }, [navigate])
}
export default useProtectedPage