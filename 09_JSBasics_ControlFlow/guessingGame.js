/**
 * Created by randy on 8/14/16.
 */
// Create secret number
var correctNumber = 7;

// Prompt user for a guess
var guess = parseInt(prompt("Guess a number!"));

// Check guess
if (guess === correctNumber) {
    alert("Correct!  You win!");
} else if (guess < correctNumber) {
   alert("Too low.  Try again!");
} else {
    alert("Too high. Try again!");
}
