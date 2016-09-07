/**
 * Created by randy on 9/6/16.
 */

// Check off Specific todos by clicking
$('li').click(function () {
    $(this).toggleClass('completed');
})