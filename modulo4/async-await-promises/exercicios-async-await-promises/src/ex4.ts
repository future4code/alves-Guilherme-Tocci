import { baseURL } from "./baseURL";
import axios from "axios"

async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }