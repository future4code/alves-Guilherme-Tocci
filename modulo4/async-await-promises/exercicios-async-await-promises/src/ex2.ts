import { baseURL } from "./baseURL";
import axios from "axios"


const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };