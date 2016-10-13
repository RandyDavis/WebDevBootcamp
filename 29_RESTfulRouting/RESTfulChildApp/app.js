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
// Child.create({
//     name: "Jimmy",
//     image: "https://farm1.staticflickr.com/111/274485967_bd199008fa.jpg",
//     age: 6,
//     funFact: "Little Jimmy has style for days in his favorite neon yellow hoodie with the prep look happening!"
// });


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
app.get('/children/new', function (req, res) {
    res.render('new');
})


// CREATE ROUTE
app.post('/children', function (req, res) {
    // Create child
    req.body.child.body = req.sanitize(req.body.child.body);
    Child.create(req.body.child, function (err, newChild) {
        if (err) {
            res.render('new');
        } else {
            res.redirect('/children');
        }
    });
});

// SHOW  ROUTE
app.get('/children/:id', function (req, res) {
    Child.findById(req.params.id, function (err, foundChild) {
        if (err) {
            res.redirect('/children');
        } else {
            res.render('show', { child: foundChild });
        }
    });
});


// EDIT ROUTE
app.get('/children/:id/edit', function (req, res) {
    Child.findById(req.params.id, function (err, foundChild) {
        if (err) {
            res.redirect('/children');
        } else {
            res.render('edit', { child: foundChild });
        }
    });
});


// UPDATE ROUTE
app.put('/children/:id', function (req, res) {
    req.body.child.body = req.sanitize(req.body.child.body)
    Child.findByIdAndUpdate(req.params.id, req.body.child, function (err, updatedChild) {
        if (err) {
            res.redirect('/children');
        } else {
            res.redirect('/children/' + req.params.id);
        }
    });
});


// DELETE ROUTE
app.delete('/children/:id', function (req, res) {
    Child.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect('/children');
        } else {
            console.log("Delete Successful");
            res.redirect('/children');
        }
    });
});

// ----------------END RESTful ROUTES ---------------

app.listen(3000, function () {
    console.log("Server is running on Port 3000...");
})