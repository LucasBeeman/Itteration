//#region Iteration Code
/*let text = '';
var i = 0;
//var num = prompt("what is the number you would like to have")


function loop(){
    while(i <= 10) {
        text += 'The number is ' + i + "<br>";
        i++;
    }
    document.getElementById("pop").innerHTML = text;
}

function clearField() { 
    document.getElementById("pop").innerHTML = '';d
}
*/
//#endregion Iteration Code

//#region Guess my Number

//#region definitions

var totalGuesses = 20;
var right = 0;
var highScore = -21;
var score = 0;
var oldHighScore = -21;
document.getElementById("submit").disabled = true;
var randomNumber = Math.floor(Math.random() * 20 + 1);
var guesses = [];

//#endregion definitions

function start(){
    document.getElementById("submit").disabled = false;
    score = 0
    right = 0
    totalGuesses = 20
    document.getElementById("start").disabled = true;
}

function check(){
    var x, text;
    var i = 0;
    //adds the users input to the past guesses list
    x = document.getElementById("num").value;
    guesses.push(x);
    console.log(guesses);
    document.getElementById("guesses").innerHTML = guesses
    //checks if the input is not in the range of 1-20
    if (x < 1 || x > 20) {
        text = 'Enter a number between 1-20'
        document.getElementById("response").innerHTML = text;
        score++
    }
    //tells the user to guess higher
    else if (x < randomNumber) {
        totalGuesses--
        text = 'higher'
        document.getElementById("response").innerHTML = text;
        document.getElementById("guess").innerHTML = totalGuesses;
    }
    //tells the user to guess lower
    else if (x > randomNumber) {
        totalGuesses--
        text = 'lower'
        document.getElementById("response").innerHTML = text;
        document.getElementById("guess").innerHTML = totalGuesses;
    }
    //tell the user they got the answer right. re-rolls the number
    //adds 5 to the score if the guess is right
    else if (x == randomNumber) {
        totalGuesses--
        right++
        text='You guessed the number(' + randomNumber +")" 
        document.getElementById("response").innerHTML = text;
        document.getElementById("guess").innerHTML = totalGuesses;
        document.getElementById("corGuess").innerHTML = right
        score = score += 10
        document.getElementById("score").innerHTML = score
        //refreshes the random number
        randomNumber = Math.floor(Math.random() * 20 + 1);
    }
    //subtracts 2 to the score if the guess is wrong
    if(x != randomNumber) {
        score--
        document.getElementById("score").innerHTML = score
    }
}

function submit(){
    //tells the user to enter a number between 1-10. dosn't lower the guess count
    check();
    //finishes the game
    if (totalGuesses === 0) {
        alert("You scored " + score + " points");
        document.getElementById("submit").disabled = true;
        document.getElementById("start").disabled = false;
    }
    //matches score to highscore
    if (score > highScore && totalGuesses === 0) {
        highScore = score;
        document.getElementById("highScore").innerHTML = highScore;
    }
    if (oldHighScore < highScore && totalGuesses === 0) {
        alert("you are the highest scorer with " + highScore + " points")
        oldHighScore = score
    }
}

//#endregion Guess my Number

