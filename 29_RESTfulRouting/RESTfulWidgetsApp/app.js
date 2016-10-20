var express             = require('express'),
    expressSanitizer    = require('express-sanitizer'),
    bodyParser          = require('body-parser'),
    methodOverride      = require('method-override'),
    mongoose            = require('mongoose'),
    app                 = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
mongoose.connect('mongodb://localhost/restful_widgets_app');

// MONGOOSE CONFIG
var widgetSchema = new mongoose.Schema({
    name: String,
    description: String,
    inStock: Boolean,
    gigaWatts: Number,
    speed: Number,
    created: {type: Date, default: Date.now}
});

var Widget = mongoose.model("Widet", widgetSchema);
// Starter widget data
// Widget.create({
//     name: "Flux Capacitor",
//     description: "Power module needed to power time machine.",
//     inStock: false,
//     gigaWatts: 1.21,
//     speed: 1000
// });


// ------------------------ RESTful ROUTES -----------------------

app.get('/', function (req, res) {
    res.redirect('/widgets');
});

// INDEX ROUTE
app.get('/widgets', function (req, res) {
    Widget.find({}, function (err, widgets) {
        if (err) {
            console.log("Error!");
        } else {
            res.render('index', { widgets: widgets });
        }
    });
});

// NEW ROUTE
app.get('/widgets/new', function (req, res) {
    res.render('new');
})

// CREATE ROUTE
app.post('/widgets', function (req, res) {
    req.body.widget.body = req.sanitize(req.body.widget.body);
    Widget.create(req.body.widget, function(err, newWidget) {
        if (err) {
            res.render('new');
        } else {
            res.redirect('/widgets');
        }
    });
});

// SHOW ROUTE
app.get('/widgets/:id', function (req, res) {
    Widget.findById(req.params.id, function(err, foundWidget) {
        if (err) {
            console.log("Error!");
            res.redirect('/widgets');
        } else {
            res.render('show', { widget: foundWidget });
        }
    });
});


// EDIT ROUTE
app.get('/widgets/:id/edit', function (req, res) {
    Widget.findById(req.params.id, function (err, foundWidget) {
        if (err) {
            res.redirect('/widgets');
        } else {
            res.render('edit', { widget: foundWidget });
        }
    });
});


// UPDATE ROUTE
app.put('/widgets/:id', function (req, res) {
    req.body.widget.body = req.sanitize(req.body.widget.body);
    Widget.findByIdAndUpdate(req.params.id, req.body.widget, function (err, updatedWidget) {
        if (err) {
            res.redirect('/widgets');
        } else {
            res.redirect('/widgets/' + req.params.id);
        }
    });
});


// DELETE ROUTE
app.delete('/widgets/:id', function (req, res) {
    Widget.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect('/widgets');
        } else {
            res.redirect('/widgets');
        }
    });
});





// ------------------------ RESTful ROUTES -----------------------

app.listen(3000, function () {
    console.log("Server running on Port 3000...");
})