export const CarHandler = {
    conection: null,
    getInstance : (url) => {
        if (CarHandler.conection === null){
            CarHandler.conection = new CarHandler(url);
        }
        return conection;
    }

}