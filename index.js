const https = require('https')


const params = JSON.stringify({
    "email": "customer@email.com",
    "amount": "1000000"
})


const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
        Authorization: 'Bearer sk_live_4002bbddfa912cad07f28357eef074f6f1fca2d6',
        'Content-Type': 'application/json'
    }
}
const req = https.request(options, res => {
    let data = ''
    res.on('data', (chunk) => {
        data += chunk
    });
    res.on('end', () => {
        console.log(JSON.parse(data))
    })
}).on('error', error => {
    console.error(error)
})

req.write(params)
req.end()