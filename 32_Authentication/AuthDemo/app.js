var express                 = require('express'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    bodyParser              = require('body-parser'),
    LocalStrategy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose'),
    User                    = require('./models/user');


mongoose.connect("mongodb://localhost/auth_demo_app");
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// Using express-session function in order for it to work w/Passport
app.use(require('express-session')({
    secret: "My kiddos are the cutest in the world",
    // Must include resave and saveUninitialized or else it will complain to you
    resave: false,
    saveUninitialized: false
}));

// Use the next 2 lines anytime you will be using Passport
app.use(passport.initialize());
app.use(passport.session());

// Important methods: responsible for encoding and decoding data from user session
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//======================================================================
//                              ROUTES
//======================================================================
app.get("/", function (req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
})


// ------------- AUTH ROUTES --------------------

// Show sign up form
app.get('/register' , function (req, res) {
    res.render("register");
});
// Handling user sign up
app.post('/register', function (req, res) {
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function (err, user) {
        if (err) {
          console.log(err);
            return res.render('register');
        }
        // Use 'local' strategy for user login (can be changed to 'twitter', 'facebook', 'google', etc. strategy if needed)
        passport.authenticate("local")(req, res, function () {
            res.redirect('/secret');
        });
    })
})

// --------------- LOGIN ROUTES ----------------------
// Render login form
app.get('/login', function (req, res) {
    res.render('login');
});
// Login Logic
app.post('/login', passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {

})

// --------------- LOGOUT ROUTES ----------------------
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
})

// ---------------- CUSTOM MIDDLEWARE ------------------
function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
}

app.listen(3000, function () {
    console.log('Server running on Port 3000...');
});