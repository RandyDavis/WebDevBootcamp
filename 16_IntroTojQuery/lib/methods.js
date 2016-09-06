/**
 * Created by randy on 9/5/16.
 */
// .text()  -- works like .textContent() in vanilla JS
$("h1").text();
$('ul').text();
$('li').text();
//$("h1").text("New Text");


// .html()  -- works like .html() in vanilla JS
$("ul").html();
//$("ul").html("<li>I hacked your UL!</li><li>Rusty the dog is still adorable</li>");

// .attr() -- allows you to get and change attributes of html elements
$("img").css("width");
$("img").css("width", "200px");
$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");


// $("input").attr("type");
// $("input").attr("type", "color");
// $("input").attr("type", "checkbox");
// $("input").attr("type", "text");
// $("img").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$("img").last().attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");


// .val() -- gives you the value of an element selected or can be passed arguments to change the value
$("input").val();
$("input").val("Randy Davis");

$("select").val();  // Ostrich


// .addClass() -- allows you to add classes to elements
$('h1').addClass("correct");

// .removeClass() -- allows you to remove classes from elements
$('h1').removeClass("correct");
$("li").addClass("wrong");
$("li").removeClass("wrong");
$("li").addClass("correct");

// .toggleClass() -- checks if element does have the specified class or not and either adds or removes it
$("li").toggleClass("correct");
$("li").first().toggleClass("done");
$("li").toggleClass("done");