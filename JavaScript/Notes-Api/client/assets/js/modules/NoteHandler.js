export class NoteHandler {
    constructor(url) {
        this._url = url;
    }

    getData(onSuccessCallback) {
        fetch(`${this._url}`)
            .then((datos) => {
                datos.json()
                    .then((data) => {
                        onSuccessCallback(data);
                    }, (error) => {
                        console.log('JSONException');
                    })
            }, (error) => {
                console.log('ConnectionException');
            })
    }

     postData(data) {
          fetch(`${this._url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.ok) {
                console.log('Note json created');
            } else {
                console.log('Note json not created');
            }
        })
    }
  
}