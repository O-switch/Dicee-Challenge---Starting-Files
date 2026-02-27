// var randomNumber = Math.floor(Math.random() * 6) + 1;

// var player1 = "images/dice" + randomNumber + ".png";
// document.querySelectorAll('img')[0].setAttribute('src', player1)

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var player2 = "images/dice" + randomNumber1 + ".png";

// document.querySelectorAll('img')[1].setAttribute('src', player2)

// if (player1 > player2) {
//     document.querySelector('h1').innerHTML = '🚩Player1 Win'
// } else if (player2 > player1) {
//     document.querySelector('h1').innerHTML = 'Player2 Win 🚩'
// } else {
//     document.querySelector('h1').innerHTML = 'Draw 📍'
// }

// using button to start the game
var play = document.querySelector('#start');
var reset = document.querySelector('#reset');

play.addEventListener('click', () => {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelectorAll('img')[0]
        .setAttribute('src', "images/dice" + randomNumber1 + ".png");

    document.querySelectorAll('img')[1]
        .setAttribute('src', "images/dice" + randomNumber2 + ".png");


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

});

// reset button to set the gae back to the initial state
reset.addEventListener('click', () => {
    document.querySelectorAll('img')[0].setAttribute('src', "images/dice6.png");

    document.querySelectorAll('img')[1]
        .setAttribute('src', "images/dice6.png");
    document.querySelector("h1").innerHTML = "Refresh Me";
});