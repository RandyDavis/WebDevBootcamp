/**
 * Created by randy on 8/14/16.
 */
var age = prompt("What is your age?");
age = parseInt(age);
var squareAge = function (ageToSquare) {
    return Math.sqrt(ageToSquare) % 1 === 0;
}


if (age < 0) {
    console.log("How can this be?  Your age is...NEGATIVE!?!?");
}else if (age === 21) {
    console.log("Happy 21st birthday!!");
} else if (age % 2 === 1) {
    console.log("Your age is odd!");
} else if (squareAge(age)) {
    console.log("Perfect Square!");
} else {
    console.log("Nothing of significance.");
}

