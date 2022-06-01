const express = require('express')
const app = express()
const port = 3000
const paystack = require('./paystack-charge')


app.get('/api', (req, res) => {
    res.send(paystack)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})