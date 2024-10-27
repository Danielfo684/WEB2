export const UI = {
    notesButtons: {
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
            if (note.importance === 'true') {
                div.style.backgroundColor = 'rgb(221, 171, 171)';
            }
            notesListDiv.appendChild(div);
        },
    },
    createNote: () => {
        return {
            title: document.getElementById('noteCreatorTitle').value,
            content: document.querySelector('#noteNewContent').value,
            importance: document.querySelector('input[name="typeSelector"]:checked').value,
            date: document.querySelector('#noteDate').value,
        }
    },
}