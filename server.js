const express = require('express')
const { Router } = express

const app = express()
const routerProducts = Router()

app.use('/api/products', routerProducts)

routerProducts.use(express.json())

const products = [{
    id: 1,
    name: 'Producto 1',
    price: 100
    }, 
    {
    id: 2,
    name: 'Producto 2',
    price: 200
    
}]
const id = 0

routerProducts.get('/', (req, res) => {
    res.json(products)
})

routerProducts.get('/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(product => product.id == id)
    res.json(product)
})

routerProducts.post('/save', (req, res) => {
    let product = req.body
    products.push(product)
    let index = products.product.indexOf(product)
    product.id = index + 1
    res.json(product)
})

routerProducts.put('/modificar/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(product => product.id == id)
    const { name, price } = req.body
    product.name = name
    product.price = price
    res.json(product)
})

routerProducts.delete('/api/products', (req, res) => {
    
})

app.use('/api', routerProducts)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))