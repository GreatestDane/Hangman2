//Let's set up the variables for the game logic
let score = 0;
let guesses = 6;
let wins = 0;
let losses = 0;
let secretWord = "";
let gameOver = false;

//Set up the array for the letters that will be guessed
let lettersGuessed = [];

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
    ["t", "h", "a", "n", "a", "t", "r", "o", "n"]
];


//Let's build some functions for Gameplay

function wordDisplay() {

    let random = Math.floor((Math.random() * words.length) + 1);
    for (let i = 0; i < words[random].length; i++) {
        secretWord += "*";
        console.log(secretWord);
    }
    $("#array-display").text(secretWord);
    secretWord = "";
}


//Create event
$("#make-word").on("click", function () {
    event.preventDefault();

    wordDisplay();
})