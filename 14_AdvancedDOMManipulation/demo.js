/**
 * Created by randy on 8/22/16.
 */

/* MANIPULATING STYLE
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
*/

/* TEXT CONTENT
var p = document.getElementsByTagName("p")[0];
console.log(p.textContent);
p.textContent = "Corgi mixes are really really super adorable"
console.log(p.textContent);

var ul = document.querySelector("ul");
console.log(ul.textContent);
*/

/* INNER HTML
var p = document.querySelector("p");
console.log(p.innerHTML);

var ul = document.querySelector("ul");
console.log(ul.innerHTML);

document.querySelector("h1").textContent = "END OF THIS LESSON!";
*/

/* MANIPULATING ATTRIBUTES
var img1 = document.getElementsByTagName("img")[0];
img1.getAttribute("src");
img1.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/564x/00/fa/82/00fa82a552e91b743c3ba0a8e8d147dd.jpg");

var img2 = document.getElementsByTagName("img")[1];
img2.getAttribute("src");
img2.setAttribute("src", "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web03/2012/8/25/17/enhanced-buzz-18039-1345929946-11.jpg")

var a = document.querySelector("a");
a.setAttribute("href", "http://www.bing.com");

a.textContent = "LINK TO BING";
*/


var h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
    alert("h1 was clicked!");
    h1.style.background = "orange";
})

document.querySelector("ul").addEventListener("click", function () {
    console.log("You clicked the UL!");
});

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        this.style.color = "red";
    });
}