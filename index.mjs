import express from 'express'
import { products } from './productData.mjs'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000


app.use(cors())


app.get('/', (req, response) => {
    response.send(`Hello World 2`)
})

app.get('/product', (request, response) => {
    console.log('request ', request);

    // response.send({ name: 'Lemon', price: 150, quantity: '1kg' })

    response.send(products)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
