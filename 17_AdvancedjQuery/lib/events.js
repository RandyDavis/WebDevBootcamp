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

// .keypress()
// $("input").keypress(function () {
//     console.log("You pressed a key!");
// });

$("input").keypress(function (event) {
    console.log(event);
    if (event.which === 13) {
        console.log("You hit ENTER!");
    }
});


// .on()
$("h1").on("click", function () {
    $(this).css("color", "purple");
});

$("input").on("keypress", function () {
    console.log("Keypressed!");
})

$("button").on("mouseenter", function () {
    console.log("MOUSE ENTER!");
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function () {
    $(this).css("font-weight", "normal");
});