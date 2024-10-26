import {NoteHandler} from "./NoteHandler.js"


export const Connection = {
    connection : null,
    getInstance: (url) => {
if (Connection.connection === null) {
    Connection.connection = new NoteHandler(url);
}
return Connection.connection;
    }
}