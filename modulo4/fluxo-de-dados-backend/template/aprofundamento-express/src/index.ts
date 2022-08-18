import express, { Request, Response } from "express"
import cors from "cors"
import { produtos } from "./data"
import { error } from "console";

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))


app.get('/teste', (req, res) => {
  res.send('Funcionando')
})


app.get('/loja/todosProdutos', (req, res) => {

  res.send(produtos)

})

app.post('/loja/criarProduto', (req, res) => {
try{
  res.send(produtos)
  const { name, price } = req.body

  if (!name || !price) {
      res.statusCode = 404
      throw new Error('Não pode passar valor vazio!')
}

if (price <= 0) {
    res.statusCode = 404
    throw new Error('Não pode passar preço = 0 !')
}

if (typeof (name) !== 'string') {
    res.statusCode = 404
    throw new Error('Name só aceita string!')
}

if (typeof (price) !== 'number') {
    res.statusCode = 404
    throw new Error('Price só aceita number!')
}

const novoProduto = {
    id: Date.now().toString(),
    name: name,
    price: price
}

produtos.push(novoProduto)

res.send('Produto cadastrado com sucesso!')
} catch (error: any) {
res.status(res.statusCode || 500).send({ message: error.message })
}
})
