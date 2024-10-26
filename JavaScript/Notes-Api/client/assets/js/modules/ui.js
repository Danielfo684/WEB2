export const UI = {
    writeNotes: (notes, notesListDiv, noteDiv) => {
        notes.forEach(element => {
            let div = noteDiv.cloneNode(true);
            div.querySelector('#noteTitle').textContent = element.title;
            div.querySelector('#noteContent').textContent = element.content;
            div.querySelector('#noteDateAssigned').textContent = element.date;
            if (element.importance === 'true') {
                div.style.backgroundColor = 'rgb(221, 171, 171)';
            }
            notesListDiv.appendChild(div);
        })
        notesListDiv.removeChild(notesListDiv.firstElementChild);
    },

    addNote: (note, notesListDiv, noteDiv) => {
        let div = noteDiv.cloneNode(true);
        div.querySelector('#noteTitle').textContent = note.title;
        div.querySelector('#noteContent').textContent = note.content;
        div.querySelector('#noteDateAssigned').textContent = note.date;
        if (element.importance === 'true') {
            div.style.backgroundColor = 'rgb(221, 171, 171)';
        }
    },

    createNote: (createNoteDiv, creation) => {
        let title = createNoteDiv.querySelector('#noteCreatorTitle').textContent;
        let content = createNoteDiv.querySelector('#noteNewContent').textContent;
        let importance = createNoteDiv.querySelector('input[name="typeSelector"]:checked').value;
        let date = createNoteDiv.querySelector('#noteDate').value;
        let note = creation(title, content, importance, date);

return note;
    }
}