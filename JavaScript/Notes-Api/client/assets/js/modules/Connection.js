import {NoteHandler} from "./NoteHandler.js"


export const Connection = {
    instance : null,
    getInstance: (url) => {
if (Connection.instance === null) {
    Connection.instance = new NoteHandler(url);
}
return Connection.instance;
    }
}