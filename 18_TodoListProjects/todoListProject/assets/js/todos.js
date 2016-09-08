/**
 * Created by randy on 9/6/16.
 */

// Check off Specific todos by clicking
$('li').click(function () {
    $(this).toggleClass('completed');
})

// Click on X to delete Todo
$("span").click(function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

