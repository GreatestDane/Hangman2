//Let's set up the variables for the game logic
let score = 0;
let guesses = 6;
let wins = 0;
let losses = 0;
let random = null;
let randomWord = null;
let letterSwap = null;
// let playOver = false;
// let gameOver = false;


//Set up the array for the letters that will be guessed
let lettersGuessed = [];
let secretWord = [];

//Set up an array for the alphabet?
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Set up the array of arrays for the words
const words = [
    ["s", "p", "e", "c", "i", "a", "l"],
    ["p", "a", "r", "t", "y"],
    ["h", "u", "m", "b", "l", "e"],
    ["m", "u", "s", "h", "r", "o", "o", "m", "s"],
    ["p", "r", "o", "t", "e", "c", "t"],
    ["h", "e", "r", "o"],
    ["j", "a", "p", "a", "n"],
    ["d", "i", "a", "r", "y"],
    ["h", "o", "r", "s", "e", "s"],
    ["t", "h", "a", "n", "a", "t", "r", "o", "n"],
    ["l", "u", "c", "i", "d"],
    ["p", "e", "r", "s", "o", "n", "a", "l"]
];


//Let's build some functions for Gameplay

function wordDisplay() {

    random = Math.floor(Math.random() * words.length);

    for (let i = 0; i < words[random].length; i++) {
        secretWord.push("_");
    };

    randomWord = words[random].slice();

    console.log(secretWord);
    console.log(randomWord);
    console.log(`length: ${randomWord.length}`)

    $("#word-display").text(secretWord.join(" "));

};

//Let's build the game reset function!

function gameReset() {

    score = 0;
    guesses = 6;
    random = null;
    letterSwap = null;
    playOver = false;
    gameOver = false;
    lettersGuessed = [];
    secretWord = [];

    $("#letters-display").text(lettersGuessed);
    $("#guess-display").text(guesses);

    wordDisplay();

};

//Begin game
wordDisplay();

$("#wins-display").text(wins);
$("#loss-display").text(losses);
$("#guess-display").text(guesses);

//Create the event for when a user presses a key
document.onkeyup = function (event) {

    //Create controller for the game
    let userGuess = event.key;

    //Force user into choosing a letter

    

    //First, check to see if the userGuess is a letter that has already been guessed
    //Second, check to see if the letter guessed matches the letters in the word.

    if (lettersGuessed.indexOf(userGuess.toLowerCase()) === -1) {
        lettersGuessed.push(userGuess.toLowerCase());
        $("#letters-display").text(lettersGuessed);

        if (randomWord.indexOf(userGuess.toLowerCase()) === -1) {
            guesses--;
            $("#guess-display").text(guesses);
        };

        while (randomWord.indexOf(userGuess.toLowerCase()) > -1) {
            letterSwap = randomWord.indexOf(userGuess.toLowerCase());
            secretWord[letterSwap] = userGuess.toLowerCase();
            randomWord[letterSwap] = "*";
            $("#word-display").text(secretWord.join(" "));
            score++;
            console.log(`Score: ${score}`);
        };
    };


    if (score === randomWord.length) {
        wins++;
        $("#wins-display").text(wins);
        // playOver = true;
        console.log("playover True");
        gameReset();
    };

    if (guesses === 0) {
        losses++;
        $("#loss-display").text(losses);
        // playOver = true;
        console.log("playover True");
        gameReset();
    };

};


