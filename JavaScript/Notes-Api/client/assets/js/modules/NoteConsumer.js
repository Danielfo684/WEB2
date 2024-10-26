import {Note} from './Note.js';

export class NoteConsumer {
    static listNotes(datas) {
      let notes = [];  
datas.forEach(element => {
    notes.push (new Note(element.title, element.content, element.importance, element.date))
});
return notes;
    }

    static createNote(title, content, importance, date) {
        return new Note(title, content, importance, date);
    }
}