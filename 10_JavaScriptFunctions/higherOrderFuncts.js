/**
 * Created by randy on 8/19/16.
 */
function sing () {
    console.log("twinkle twinkle...");
    console.log("how I wonder...");
}


// setInterval(sing, 1000);

setInterval(function () {
    console.log("I am an anonymous function!");
    console.log("THIS IS AWESOME!");
}, 2000);