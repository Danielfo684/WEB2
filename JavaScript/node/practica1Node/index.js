const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    const patata = {
        listado: [
            { idioma : spanish, saludo: Hola },
            { idioma : italian, saludo: Ciao },
            { idioma : english, saludo: Hello },
            { idioma : german, saludo: Hallo }
        ]
    }
    res.send(patata)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})