var express             = require('express'),
    expressSanitizer    = require('express-sanitizer'),
    mongoose            = require('mongoose'),
    bodyParser          = require('body-parser'),
    methodOverride      = require('method-override'),
    app                 = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost/restful_child_app");

/// MONGOOSE CONFIG
var childSchema = new mongoose.Schema({
    name: String,
    image: String,
    age: Number,
    funFact: String,
    created: {type: Date, default: Date.now}
});

var Child = mongoose.model("Child", childSchema);
// Starter Child Data...to be commented out after running first time
Child.create({
    name: "Randy",
    image: "http://graphics.fansonly.com/photos/schools/bay/sports/m-footbl/auto_headshot/p-davis.jpg",
    age: 37,
    funFact: "He loves to code in his free time!"
});


// ------------ RESTful ROUTES ----------------------
app.get('/', function (req, res) {
    res.redirect('/children');
});

// INDEX ROUTE
app.get('/children', function (req, res) {
    Child.find({}, function (err, children) {
        if (err) {
            console.log("Error!");
        } else {
            res.render('index', { children: children });
        }
    });
});



// NEW ROUTE


// CREATE ROUTE



// SHOW  ROUTE


// EDIT ROUTE


// UPDATE ROUTE



// DELETE ROUTE







// ----------------END RESTful ROUTES ---------------

app.listen(3000, function () {
    console.log("Server is running on Port 3000...");
})