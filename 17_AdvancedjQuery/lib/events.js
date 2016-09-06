/**
 * Created by randy on 9/5/16.
 */
// .click()
$("h1").click(function() {
    console.log("h1 clicked!");
})

// $("button").click(function () {
//     console.log("button clicked!");
//     $(this).css("background", "pink");
// })

$("button").click(function () {
    var text = $(this).text();
    console.log("You clicked " + text);
})