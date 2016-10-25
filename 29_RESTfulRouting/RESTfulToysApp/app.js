var express             = require('express'),
    expressSanitizer    = require('express-sanitizer'),
    bodyParser          = require('body-parser'),
    methodOverride      = require('method-override'),
    mongoose            = require('mongoose'),
    app                 = express();

// APP CONFIG
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// MONGOOSE CONFIG
mongoose.connect('mongodb://localhost/restful_toys_app');
var toySchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number,
    inStock: Boolean,
    rating: Number,
    created: {type: Date, default: Date.now}
});

var Toy = mongoose.model('Toy', toySchema);
// Starter Toy data
// Toy.create({
//     name: "Star Wars Rogue One Stormtrooper",
//     image: "https://i5.wal.co/asr/e4166984-ef32-4f28-8782-670214f87371_1.9b0f1a59c58d0475662862a0e324236e.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
//     description: "Stormtrooper action figure from Star Wars Rogue One movie.  Blaster and shield included.",
//     price: 7.47,
//     inStock: true,
//     rating: 8
// });

//-------------------RESTful ROUTES------------------------------
app.get('/', function (req, res) {
    res.redirect('/toys');
});

// INDEX ROUTE
app.get('/toys', function (req, res) {
    Toy.find({}, function(err, toys) {
        if (err) {
            console.log("Error!");
        } else {
            res.render('index', {toys: toys});
        }
    });
});


// NEW ROUTE
app.get('/toys/new', function (req, res) {
    res.render('new');
});

// CREATE ROUTE
app.post('/toys', function (req, res) {
    Toy.create(req.body.toy, function (err, newToy) {
        if (err) {
            console.log("Error!");
            res.render('new');
        } else {
            res.redirect('/toys');
        }
    });
});


// SHOW ROUTE
app.get('/toys/:id', function (req, res) {
    Toy.findById(req.params.id, function (err, foundToy) {
        if (err) {
            res.render('index');
        } else {
            res.render('show', {toy: foundToy});
        }
    });
});


// EDIT ROUTE
app.get('/toys/:id/edit', function (req, res) {
    Toy.findById(req.params.id, function (err, foundToy) {
        if (err) {
            res.render('index');
        } else {
            res.render('edit', {toy: foundToy});
        }
    });
});


// UPDATE ROUTE
app.put('/toys/:id', function (req, res) {
    req.body.toy.body = req.sanitize(req.body.toy.body);
    Toy.findByIdAndUpdate(req.params.id, req.body.toy, function (err, updatedToy) {
        if (err) {
            res.redirect('/toys');
        } else {
            res.redirect('/toys/' + req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete('/toys/:id', function (req, res) {
    Toy.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect('/toys');
        } else {
            res.redirect('/toys');
        }
    });
});

//------------------- END RESTful ROUTES------------------------------


app.listen(3000, function () {
    console.log('Server running on Port 3000...');
});