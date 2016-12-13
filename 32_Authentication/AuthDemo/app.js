var express                 = require('express'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    bodyParser              = require('body-parser'),
    LocalStragegy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose'),
    User                    = require('./models/user');


mongoose.connect("mongodb://localhost/auth_demo_app");
var app = express();
app.set('view engine', 'ejs');
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
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", function (req, res) {
    res.render("home");
});

app.get("/secret", function (req, res) {
    res.render("secret");
})


app.listen(3000, function () {
    console.log('Server running on Port 3000...');
});