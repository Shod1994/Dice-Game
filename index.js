var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceRoll1 = "images/dice" + randomNumber1 + ".png"
var diceRoll2 = "images/Player2dice" + randomNumber2 + ".png"
var dice1 = document.querySelectorAll("img")[0]
var dice2 = document.querySelectorAll("img")[1]
var rollDice = document.querySelector("button")

    dice1.setAttribute("src", diceRoll1);
    dice2.setAttribute("src" ,diceRoll2);


 