var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("landing");
});

app.get('/campgrounds', function (req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1274/4670974422_ec49d65ab2.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
    ];
    res.render("campgrounds", {campgrounds: campgrounds});
});


app.listen(3000, function () {
    console.log("Yelp Camp Server is running...");
});