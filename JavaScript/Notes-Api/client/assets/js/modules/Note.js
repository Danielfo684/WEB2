export class Note {
    constructor(title, content, importance, date) {
        this._title = title;
        this._content = content;
        this._importance = importance;
        this._date = date;
        console.log('Note object created');
    }

    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }

    get importance() {
        return this._importance;
    }
    set importance(importance) {
        this._importance = importance;
    }

    get date() {
        return this._date;
    }
    set date(date) {
        this._date = date;
    }
}