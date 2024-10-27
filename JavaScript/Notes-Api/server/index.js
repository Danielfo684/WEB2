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

app.post('/notes-data', async (req, res) => {
    const newNote = req.body;
    if (newNote && newNote.title && newNote.content && newNote.importance && newNote.date) {
        try {
            notesData.notes.push(newNote);
            res.status(200).send('Nota creada correctamente');
        } catch (error) {
            res.status(400).send('Error al crear la nota');
        }
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


