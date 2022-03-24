const express = require('express')
const router = new express.Router()
const Client = require('../models/client')
const Order = require('../models/order')

router.post('/clients', async (req, res) => {
    const client = new Client(req.body)

    try {
        await client.save()
        res.status(201).send(client)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find({})
        res.send(clients)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/client/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Order.find({client : _id})

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router