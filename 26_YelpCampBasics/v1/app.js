var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1274/4670974422_ec49d65ab2.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1274/4670974422_ec49d65ab2.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1274/4670974422_ec49d65ab2.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
];

app.get('/', function (req, res) {
    res.render("landing");
});

app.get('/campgrounds', function (req, res) {

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post('/campgrounds', function (req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function (req, res) {
    res.render('new');
});


app.listen(3000, function () {
    console.log("Yelp Camp Server is running...");
});