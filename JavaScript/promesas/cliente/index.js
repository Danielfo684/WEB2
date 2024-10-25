import {CarHandlerC} from './modulos/CarHandlerC.js';
import {CarHandler} from './modulos/CarHandler.js';

function datosListos(datos) {
    console.log(datos);
}

const carHandler = new CarHandlerC('http://localhost:3000');
let c = await carHandler.getAllCarsv2();
console.log(c);

CarHandler.getInstance('http.//localhost:3000').getAllCars(datos);
