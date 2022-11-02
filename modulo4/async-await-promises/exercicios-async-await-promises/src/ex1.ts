import { baseURL } from "./baseURL";
import axios from "axios"

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };