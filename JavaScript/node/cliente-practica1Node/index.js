// async function connect() {
//     await fetch('http:/localhost:3000')
//         .then(response => response.text())
//         .then(json => console.log(json))
// }

async function connect2() {
    const datos = await fetch('http:/localhost:3000');
    const texto = await datos.json();
    console.log(texto.saludo);
    console.log("datos ya entregados");
}
connect2()
.then(()=> {console.log("Conexión exitosa")});


