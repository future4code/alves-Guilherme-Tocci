Exercício 1
a. Qual endpoint você deve utilizar para isso?
RESPOSTA : ENDPOINT GET.
b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
RESPOSTA : ANY
c. Implemente uma função nomeada que faça o que foi pedido.
RESPOSTA:

async function getSubscribers(): Promise<any[]> {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
};

Exercício 2
a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona.
RESPOSTA : Não há diferença na função.

b. Implemente a função solicitada, usando arrow function.
RESPOSTA :

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

Exercício 3
a. Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem?
RESPOSTA : Não.

b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso.
RESPOSTA : Porque ela apresenta uma resposta mais adequada.

c. Reimplemente a função, corretamente.
RESPOSTA :

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

Exercício 4
a. Qual é o tipo dessa função? Por quê?
RESPOSTA : Utiliza o POST, para criar novas notícias(posts).
b. Implemente a função solicitada.
RESPOSTA :

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content, 
    date: date
  });
}