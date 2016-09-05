/**
 * Created by randy on 9/5/16.
 */
// Basic jQuery selectors

$("a");
$("ul li a");
$("#adorable");

// *************** CSS ***********************
$("h1").css("color", "red");

// can pass an object as a single argument to .css() method
var styles = {
    color: "red",
    background: "pink",
    border: "2px solid purple"
}
$("h1").css(styles);

$("li").css("color", "blue");
$("a").css("font-size", "40px");
// can also create object within the method
$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    background: "rgba(89, 45, 36, 0.5)"
})