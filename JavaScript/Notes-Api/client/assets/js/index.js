import { Connection } from '/client/assets/js/modules/Connection.js';
import { Note } from '/client/assets/js/modules/Note.js';
import { NoteConsumer } from './modules/NoteConsumer.js';
import { UI } from './modules/ui.js';


let notes = null;
Connection.getInstance('http://localhost:3000/notes-data').getData((data) => {
  notes = NoteConsumer.listNotes(data.notes);
  UI.writeNotes(notes, document.getElementById('notesList'), document.getElementById('note'));
});

document.getElementById('submit-Note').addEventListener('click', () => {
  Connection.getInstance('http://localhost:3000/notes-data').postData(() => {

    let newNote = UI.createNote(noteCreatorForm, NoteConsumer.createNote());
    UI.addNote(newNote, document.getElementById('notesList'), document.getElementById('note'));
  })
});





//aquí luego tengo que hacer un nuevo writeNotes o crear un nuevo metodo que solo añada el último note que haga, algo tipo addNotes

