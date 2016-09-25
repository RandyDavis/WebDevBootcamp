var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get('/', function (req, res) {
    res.send("Hi there!");
})

// "/bye" => "Goodbye!"
app.get('/bye', function (req, res) {
    res.send("Goodbye!");
})

// "/dog" => "Meow!!"
app.get('/dog', function (req, res) {
    console.log("Someone made a request to '/dog'");
    res.send("MEOW!!");
})

app.get('/r/:subredditName', function (req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " +  subreddit.toUpperCase() + " SUBREDDIT!");
})

// place ":" in front of any variable being used in your call
app.get('/r/:subredditName/comments/:id/:title', function (req, res) {
    console.log(req.params);
    res.send("Welcome to the comments page!");
})

// "/anything that doesn't have a route" => "You are a Star!"; IMPORTANT - always put this catch-all below all other requests as it will block them from running if above them
app.get("*", function (req, res) {
    res.send("You are a Star!");
})

// Tell Express to listen for requests (start server)
app.listen(3000, function () {
    console.log("Server has started!");
});