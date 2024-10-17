const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    const patata = {
        saludo: 'Hola Mundo',
    }
    res.send(patata)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})