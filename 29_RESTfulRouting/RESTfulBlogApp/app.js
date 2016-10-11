var express         = require('express'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    app = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost/restful_blog_app");

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String, // could set default like so... {type: String, default: "placeholderimg.jpg"}
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);
// Starter Blog Data...comment out after running the first time
// Blog.create({
//     title: "Test Blog",
//     image: "https://farm3.staticflickr.com/2326/2378867408_4cc90791d6.jpg",
//     body: "JavaScript is this that and the other from another mother.  We love the JS around these parts!"
// });

// ---- RESTful ROUTES ----

app.get('/', function (req, res) {
    res.redirect("/blogs");
});

// INDEX ROUTE
app.get('/blogs', function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log("Error!");
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});

// NEW ROUTE
app.get('/blogs/new', function (req, res) {
    res.render("new");
});

// CREATE ROUTE
app.post('/blogs', function (req, res) {
    // Create blog
    Blog.create(req.body.blog, function (err, newBlog) {
        if (err) {
            res.render('new');
        } else {
            // then redirect to the index
            res.redirect('/blogs');
        }
    });
});

// SHOW ROUTE
app.get('/blogs/:id', function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.render('show', { blog: foundBlog });
        }
    });
});

// EDIT ROUTE
app.get('/blogs/:id/edit', function(req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.render('edit', { blog: foundBlog });
        }
    });
});

// UPDATE ROUTE
app.put('/blogs/:id', function (req, res) {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedBlog) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete('/blogs/:id', function (req, res) {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs');
        }
    });
});

app.listen(3000, function () {
    console.log("Server is running on Port 3000...");
});