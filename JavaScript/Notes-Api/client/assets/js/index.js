import { Connection } from '/client/assets/js/modules/Connection.js';
import { NoteConsumer } from './modules/NoteConsumer.js';
import { UI } from './modules/ui.js';

let notes = null;
Connection.getInstance('http://localhost:3000/notes-data').getData((data) => {
  notes = NoteConsumer.listNotes(data.notes);
  UI.notesButtons.writeNotes(notes, document.getElementById('notesList'), document.getElementById('note'));
});

document.getElementById('noteCreatorForm').addEventListener('submit', async (event) => {

  const noteUI = UI.createNote(); // Crear la nueva nota
  const response = await Connection.getInstance('http://localhost:3000/notes-data').postData(noteUI); // Enviar la nueva nota

  if (response.ok) {
      // Si la nota fue creada exitosamente, agrégala a la interfaz
      UI.notesButtons.addNote(noteUI, document.getElementById('notesList'), document.getElementById('note'));
  } else {
      console.log('Error al crear la nota');
  }
});





//aquí luego tengo que hacer un nuevo writeNotes o crear un nuevo metodo que solo añada el último note que haga, algo tipo addNotes
