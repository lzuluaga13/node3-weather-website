require('./api/db/mongoose')
const express = require('express')

const productRouter = require('./api/routes/productRoutes')
const clientRouter = require('./api/routes/clientRoutes')
const orderRouter = require('./api/routes/orderRoutes')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(productRouter)
app.use(clientRouter)
app.use(orderRouter)
app.listen(port);


console.log('arquitectura list RESTful API server started on: ' + port); 