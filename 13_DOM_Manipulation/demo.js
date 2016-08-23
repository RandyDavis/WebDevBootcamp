/**
 * Created by randy on 8/22/16.
 */

// Manually, one style at a time:
var tag = document.getElementById("highlight");

tag.style.color = "gray";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";


// Recommended way - add css class (see style tags in html file)
var p = document.querySelector("p");
p.classList.add("big");
p.classList.remove("big");
p.classList.toggle("big");