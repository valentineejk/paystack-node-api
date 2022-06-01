const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = 3000
const paystack = require('./paystack-charge')


app.get('/', (req, res) => {
    res.send(paystack)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})