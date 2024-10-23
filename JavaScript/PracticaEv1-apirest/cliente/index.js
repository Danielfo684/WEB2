
//Async function to fetch the data from the server and check that everything is working.
(async () => {
    await fetch('http://localhost:3000/')
        .then((response) => { console.log('working') }), (error) => { console.log('error') };


//After checking that the server is working, we can fetch the data from the server and display it in the browser.
//We get a JSON object that we call 'data'.

    const data = await (await fetch('http://localhost:3001/greetings')).json();


//Select the 'greetings' array from the JSON object and store it in a variable called 'text'.
    const text = data.greetings;


//Display the 'text' array in the console to see that we correctly stored the data.
    console.log(data);


//Select the 'structure' div from the HTML file and store it in a variable called 'container'.
const container = document.getElementById('structure');
const container2 = document.getElementById('structure2');

//Create a forEach loop to add a div element for each item in the 'text' array.
    text.forEach(item => {
    let div = container.firstElementChild.cloneNode(true);
    let div2 = container2.firstElementChild.cloneNode(true);
    div.textContent = JSON.stringify(item.idioma);
div2.textContent = JSON.stringify(item.saludo);
    
//Insert the div element in the 'container' div.
    container.appendChild(div);
    container2.appendChild(div2);
    });
    container.removeChild(container.firstElementChild);
    container2.removeChild(container2.firstElementChild);
})();


