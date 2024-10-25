const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000


app.use(cors());

app.get('/', (req, res) => {
  const datos = {
    users: [
      {
        name: 'Adrian',
        age: '23',
        email: 'adrian@example.es'
      },
      {
        name: 'Javier',
        age: '24',
        email: 'javier@example.es'
      },
      {
        name: 'David',
        age: '25',
        email: 'david@example.es'
      }
    ]
  }
  res.json(datos);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})