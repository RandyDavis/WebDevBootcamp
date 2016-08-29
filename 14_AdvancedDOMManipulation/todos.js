/**
 * Created by randy on 8/28/16.
 */
var allLIs = document.querySelectorAll("li");;

for (var i = 0; i < allLIs.length; i++) {
    allLIs[i].addEventListener("mouseover", function () {
        this.classList.add("selected");
    })

    allLIs[i].addEventListener("mouseout", function () {
        this.classList.remove("selected");
    })

    allLIs[i].addEventListener("click", function () {
        this.classList.toggle("done");
    })
}
