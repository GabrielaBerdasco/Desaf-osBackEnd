const express = require('express')
const { Router } = express

const app = express()
const routerProducts = Router()

app.use('/api/products', routerProducts)

routerProducts.use(express.json())
routerProducts.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

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


routerProducts.get('/', (req, res) => {
    res.json(products)
})

routerProducts.get('/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(product => product.id == id)
    if(!product) return res.status(404).send('Producto no encontrado')
    res.json(product)
})

routerProducts.post('/', (req, res) => {
    let product = req.body
    products.push(product)
    let index = products.indexOf(product)
    product.id = index + 1
    res.json(product)
})

routerProducts.put('/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(product => product.id == id)
    const { name, price } = req.body
    product.name = name
    product.price = price
    res.json(product)
})

routerProducts.delete('/:id', (req, res) => {
    const { id } = req.params
    const productsF = products.find(product => product.id == id)
    products.splice(products.indexOf(productsF), 1)
    res.json(products)
})

app.use('/api', routerProducts)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))