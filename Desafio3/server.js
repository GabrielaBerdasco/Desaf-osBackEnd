const express = require('express')
const product = require('./controllers/productController') 
const allProducts = require('./controllers/productController')

const app = express()



app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos!</h1>')
})

app.get('/products', (req, res) => {
    const products = allProducts()
    console.log(products);
    res.send(products)
})

app.get('/randomProduct', (req, res) => {
    const randomProduct = product()
    console.log(randomProduct);
    res.send(randomProduct)
})


const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))