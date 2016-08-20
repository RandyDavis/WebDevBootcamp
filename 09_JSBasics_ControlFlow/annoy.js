/**
 * Created by randy on 8/15/16.
 */
// VERSION 1
// // Ask user "Are we there yet?"
// var areWeThereYet = prompt("Are we there yet?");
//
// // Keep asking again and again until they enter "Yes" or "Yeah"
//
// while((areWeThereYet !== "yes") && (areWeThereYet !== "yeah")) {
//     var areWeThereYet = prompt("Are we there yet?");
// }
//
// // Then, alert, "Yah, we finally made it!"
// alert("Yay, we finally made it!");


// VERSION 2
var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("Yah, we finally made it!");