const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
app.use(cors());

const greetingsData = {
    "greetings": [
        {
            "idioma": "spanish",
            "saludo": "Hola"
        },
        {
            "idioma": "portuguese",
            "saludo": "Olá"
        },
        {
            "idioma": "english",
            "saludo": "hello"
        },
        {
            "idioma": "italian",
            "saludo": "Ciao"
        }
    ]
}
app.get('/', (req, res) => {
    res.send('Working');
})
app.get('/greetings', (req, res) => {
    res.json(greetingsData);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})