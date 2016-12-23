var express = require('express');
var router  = express.Router();
var Campground  = require('../models/campground');

// INDEX - show all campgrounds
router.get('/', function (req, res) {
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
router.post('/', function (req, res) {
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
            res.redirect('/');
        }
    });
});

// NEW - show form to add new campground --- IMPORTANT -- DECLARE 'NEW' BEFORE :id ROUTE, always!
router.get('/new', isLoggedIn, function (req, res) {
    res.render('campgrounds/new');
});

// SHOW - show details page for a specific campground
router.get('/:id', function (req, res) {
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

// Middleware
function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;