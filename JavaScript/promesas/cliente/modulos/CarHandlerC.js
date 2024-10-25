export class CarHandlerC {
    constructor(url){
        this._url = url;
        this._lastQueryStatus = null;
    }

    getAllCars(a){
        fetch(`${this._url}/`)
            .then((datos)=>{
                datos.json().then((datos)=>{
                    this._lastQueryStatus = true;
                    a(datos);

                },(error)=> {
                    this._lastQueryStatus = false;
                    return null;
                })
            }, (error) => {
                this._lastQueryStatus = false;
                return null;
            }
        )
    }

    async getAllCarsv2(){
        let b = null;
        await fetch(`${this._url}/`)
            .then(async (datos)=>{
                await datos.json().then((datos)=>{
                    this._lastQueryStatus = true;
                    b = datos;

                },(error)=> {
                    this._lastQueryStatus = false;
                    return null;
                })
            }, (error) => {
                this._lastQueryStatus = false;
                return null;
            }
        );
        return b;
    }
}