var express     = require('express'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    app = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
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

// RESTful ROUTES
app.get('/', function (req, res) {
    res.redirect("/blogs");
});

app.get('/blogs', function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log("Error!");
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});




app.listen(3000, function () {
    console.log("Server is running on Port 3000...");
});