//Let's set up the variables for the game logic
let score = 0;
let guesses = 6;
let wins = 0;
let losses = 0;

//Set up the array for the letters that will be guessed
let lettersGuessed = [];

//Set up the array of arrays for the words
const words = [
    ["s","p","e","c","i","a","l"]
];


//Let's build some functions for Gameplay

function wordDisplay() {
    for(let i = 0; i < words[0].length; i++) {
        $("#array-display").append("<p>");
        $("<p>").text(word[0][i]);
    }
}


//Create event
$("#make-word").on("click", function() {
    event.preventDefault();

   console.log(word[0][0]);
})