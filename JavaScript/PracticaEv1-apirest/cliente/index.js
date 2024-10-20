(async () => {
    await fetch('http://localhost:3000/')
        .then((response) => { console.log('working') }), (error) => { console.log('error') };
    const data = await (await fetch('http://localhost:3000/greetings')).json();
    const text = data.greetings;
    console.log(data);
 
const container = document.getElementById('structure');


    text.forEach(item => {
    let div = container.firstElementChild.cloneNode(true);
    div.textContent = JSON.stringify(item.idioma);
    container.appendChild(div);
    });
})();


