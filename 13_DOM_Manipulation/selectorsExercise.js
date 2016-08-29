/**
 * Created by randy on 8/22/16.
 */
console.log('hi');
// Come up with 4 different ways to select the first <p> tag
var p1 = document.getElementById("first");
var p2 = document.querySelector(".special");
var p3 = document.querySelector("p");
var p4 = document.querySelector("#first");
// A few more
var p5 = document.getElementsByClassName("special")[0];
var p6 = document.querySelectorAll(".special")[0];
var p7 = document.getElementsByTagName("p")[0];
var p8 = document.querySelector("h1 + p");
