var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require('./models/campground'),
    Comment     = require('./models/comment'),
    seedDB      = require('./seeds');


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
seedDB();

// CREATE A NEW CAMPGROUND
// Campground.create({
//     name: "Granite Hill",
//     image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg",
//     description: "Thsi is a huge granite hill, no bathrooms. No Water...just granite below the ground."
// }, function (err, campground) {
//     if (err) {
//       console.log(err);
//     } else {
//         console.log("Newly created campground: ");
//         console.log(campground);
//     }
// });

app.get('/', function (req, res) {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get('/campgrounds', function (req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

// CREATE - add new campground to DB
app.post('/campgrounds', function (req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = { name: name, image: image, description: desc };
    // CREATE A NEW CAMPGROUND AND SAVE TO DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect('/campgrounds');
        }
    });
});

// NEW - show form to add new campground --- IMPORTANT -- DECLARE 'NEW' BEFORE :id ROUTE, always!
app.get('/campgrounds/new', function (req, res) {
    res.render('campgrounds/new');
});

// SHOW - show details page for a specific campground
app.get('/campgrounds/:id', function (req, res) {
    // FIND THE CAMPGROUND WITH PROVIDED ID
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            // RENDER SHOW TEMPLATE WITH THAT CAMPGROUND
            res.render('campgrounds/show', {campground: foundCampground});
        }
    });
});


//====================================
//  COMMENTS ROUTES
//====================================
app.get('/campgrounds/:id/comments/new', function(req, res) {
    // find campground by id
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
          console.log(err);
        } else {
            res.render('comments/new', {campground: campground});
        }
    })
});


app.listen(3000, function () {
    console.log("Yelp Camp Server is running...");
});