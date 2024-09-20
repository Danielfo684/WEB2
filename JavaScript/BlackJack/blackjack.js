
class card {
    constructor(name, numero) {
        this.name = name;
        this.numero = numero;
    }
}

const deck = [];
for (i = 0; i < 13; i++) {
    numero = i;
    let card = numero,numero;
deck[numero] = card;
}

console.log(deck[Math.random(0,12)]);
