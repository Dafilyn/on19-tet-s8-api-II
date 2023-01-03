const express = require("express")
const app = express()
const port = 3000
const listaProdutos =  require("./model/produtos.json")

app.use(express.json())

// TODO:[x] expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos - DONE
app.get("/produto/:id",(req, res)=>{
    const id = req.params.id
    
    const produtoEscolhido = listaProdutos.filter(produto => produto.id == id)

    res.json(produtoEscolhido)
})

// TODO:[x] Utilizar o recurso `req.query` para criar filtros ( ex.: buscar por nome do produto, valor... ) - * Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota * - DONE
// TODO:[x] criar uma rota GET que lista TODOS os produtos da lista de produtos. - DONE
app.get("/produto",(req, res)=>{
    const filtroNome = req.query.name
    const filtroValor = Numeber(req.query.valor)

    const produtosFiltrados = listaProdutos.filter((produto)=>{
        if(filtroNome){
            return produto.nome.toLowerCase() == filtroNome.toLowerCase()
        }
        if(filtroValor){
            return produto.valor == filtroValor
        }
        return produto
    })
    res.json(produtosFiltrados)
})
// TODO:[x] Adicionar um novo item à lista de produtos e retorna a lista atualizada - DONE
app.post("/produto",(req, res)=>{
    const body = req.body

    listaProdutos.push(body)

    res.json(listaProdutos)
})

// cria uma rota GET para listar todos os produtos da listaDeProdutos
app.get("/produtos", (req, res) => {
    res.json(listaDeProdutos)
})

//exibe a porta onde a api está rodando
app.listen(port,()=>{
    console.log(`Api is listening on port ${port}`)
})