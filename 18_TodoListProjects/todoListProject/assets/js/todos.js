/**
 * Created by randy on 9/6/16.
 */

// Check off Specific todos by clicking
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
})

// Click on X to delete Todo
$("ul").on('click', 'span', function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

// Add todo
// add listener to input
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
         // get input text
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to li
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText) + "</li>";
    }
});

// show and hide input form when clicking plus icon
$(".fa-plus").click(function () {
    $("input").fadeToggle();
});