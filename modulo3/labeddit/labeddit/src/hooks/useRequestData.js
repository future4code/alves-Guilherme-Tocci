import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (inicialData, url)=>{
    const [data, setData] = useState(inicialData)

    useEffect(()=>{
    axios.get(url, {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((response)=>{
        setData(response.data)
    })
    .catch((error)=>{
        alert('Ocorreu um erro,tente novamente')

    })

    },[url])
    return(data)
}
export default useRequestData