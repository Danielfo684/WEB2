const express = require('express')
var cors = require('cors')
const port = 3000
const app = express();
app.use(cors());

app.use(express.json());

const notesData = {
    "notes": [
        {
           
            "title": "Examen",
            "content": "Example de Mode",
            "importance": "false",
            "date": "2024-11-05"
        },
        {
          
            "title": "Trabajo de Cliente",
            "content": "Entregar el trabajo de Rest Api el viernes",
            "importance": "true",
            "date": "2024-11-01"
        }
    ]
}
app.get('/notes-data', (req, res) => {
    res.json(notesData);
})

app.post('/notes-data', (req, res) => {
    console.log(req.body);
    const newNotes = req.body;
    if (newNotes !== null && newNotes !== undefined) {
        notesData.notes.push(newNotes);
       res.status(200).send('OK');
    } else {
        res.status(400).send('Bad request');
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

