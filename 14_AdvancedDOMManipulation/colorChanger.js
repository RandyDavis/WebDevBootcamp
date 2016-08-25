/**
 * Created by randy on 8/24/16.
 */
var button = document.querySelector("button");
// var button = document.querySelector("button");
// button.addEventListener("click", toggleColor());
//
// function toggleColor () {
//     var isPurple = false;
//
//     button.addEventListener("click", function () {
//         if (isPurple){
//             document.body.style.background = "white";
//             isPurple = !isPurple;
//         } else {
//             document.body.style.background = "purple";
//             isPurple = !isPurple;
//         }
//     })
//
// }

button.addEventListener("click", function () {
    document.body.classList.toggle("purple");
})

