console.log("Let's play 7 and a half")
for (let i = 0; i < 5; i++) {
    console.log(i + 1 + "round!");
    myCards = 0;
    oppCards = 0;
    oppCards = checkCard(randomCard());
    keepPlaying = 'Y';

    //Opponents turn
    while (oppCards < 5) {
        oppCards = oppCards + checkCard(randomCard());
    }
    while (keepPlaying != 'N') {
        myCards = myCards + checkCard(randomCard());
        if (myCards > 7.5) {
            console.log("Your cards add up to " + myCards + " so you lost.");
            keepPlaying = "N";
        } else {
            keepPlaying = prompt("Your cards add up to " + myCards + " Do you want another card? Type Y for Yes or N for No.");
            if (keepPlaying != "Y") {
                console.log("Your cards add up to " + myCards);
                console.log("Your rival cards add up to " + oppCards);
                if (oppCards > myCards && oppCards < 8) {
                    console.log("You lost.");
                } else {
                    console.log("You won.");
                }
            }
        }
    }
}





function randomCard() {
    return Math.ceil(Math.random() * 10);
}

function checkCard(a) {
    if (a >= 8) {
        a = 0.5;
    }
    return a;
}
