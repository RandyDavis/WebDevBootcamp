/**
 * Created by randy on 9/6/16.
 */

/* ---------------- FADING EFFECTS ------------------------*/
// --- fadeOut() ---
// $('button').on("click", function () {
//     $('div').fadeOut(2000, function () {
//         console.log("fade completed!");  // callback that runs after fade is completed
//         $(this).remove();
//     });
// });

// --- fadeIn() ---
// $('button').on('click', function () {
//     $('div').fadeIn(1500, function () {
//         console.log('fade completed!');
//     });
// });

// --- fadeToggle() ---
// $('button').on('click', function () {
//     $('div').fadeToggle(1500, function () {
//         console.log('fade completed!');
//     });
// });




/* ---------------- SLIDING EFFECTS ------------------------*/
// --- slideDown() ---
// $('button').on('click', function () {
//     $('div').slideDown(1500, function () {
//         console.log('slide completed!');
//     });
// });


// --- slideUp() ---
// $('button').on('click', function () {
//     $('div').slideUp(1500, function () {
//         console.log('slide completed!');
//     });
// });


// --- slideToggle() ---
$('button').on('click', function () {
    $('div').slideToggle(1500, function () {
        console.log('slide completed!');
    });
});