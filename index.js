 // Generate random numbers for dice rolls
var randomNumber1
var randomNumber2


var dice1 = document.querySelectorAll("img")[0]
var dice2 = document.querySelectorAll("img")[1]

var resultDisplay = document.querySelector("h1");

document.querySelector("#dice-button").addEventListener("click" , rollDice)

function rollDice(event){

    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomNumber2 = Math.floor(Math.random() * 6) + 1

     // Reset the previous game results
     document.querySelector("h1").innerHTML = "";

    dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png" );
    dice2.setAttribute("src" , "images/Player2dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML="🚀Player 1 Wins🥺"
    } else if (randomNumber1 < randomNumber2){
         document.querySelector("h1").innerHTML="🥺Player 2 Wins🚀"
    } else {
        document.querySelector("h1").innerHTML= "🎲Draw🎲"
    }


}



 




 