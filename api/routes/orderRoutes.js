const express = require('express')
const router = new express.Router()
const Order = require('../models/order')


router.post('/orders', async (req, res) => {
    const order = new Order(req.body)

    try {
        await order.save()
        res.status(201).send(order)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find({})
        res.send(orders)
    } catch (e) {
        res.status(500).send()
    }
})


router.patch('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body)
        res.send(orders)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router