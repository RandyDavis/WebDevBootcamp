var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    Campground      = require('./models/campground'),
    Comment         = require('./models/comment'),
    User            = require('./models/user'),
    seedDB          = require('./seeds');


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
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

// PASSPORT CONFIGURATION
app.use(require("express-session") ({
    secret: "My kids are the best!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
})

app.get('/', function (req, res) {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get('/campgrounds', function (req, res) {
    //console.log(req.user);
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
app.get('/campgrounds/new', isLoggedIn, function (req, res) {
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
app.get('/campgrounds/:id/comments/new', isLoggedIn, function(req, res) {
    // find campground by id
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
          console.log(err);
        } else {
            res.render('comments/new', {campground: campground});
        }
    })
});

app.post('/campgrounds/:id/comments', isLoggedIn, function (req, res) {
    // 1 - lookup campground using ID
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
          console.log(err);
            res.redirect("/campgrounds");
        } else {
            // 2 - create new comment
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                  console.log(err);
                } else {
                    // 3 - connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    // 4 - redirect campground show page
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    })
});

//====================================
//  AUTH ROUTES
//====================================

// Show register form
app.get("/register", function (req, res) {
    res.render("register");
})

// Handle signup logic
app.post("/register", function (req, res) {
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
          console.log(err);
          return res.render('register');
        }
        // User 'local' strategy for login
        passport.authenticate('local')(req, res, function () {
            res.redirect('/campgrounds');
        });
    });
});

//  ------------ Show Login Form ------------
app.get("/login", function (req, res) {
    res.render('login');
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function (req, res) {

});

//  ------------ Show Logout Route ------------
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/campgrounds');
});

// ------------- Custom Middleware ------------
function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
}

app.listen(3000, function () {
    console.log("Yelp Camp Server is running...");
});