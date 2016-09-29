var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get('/results', function (req, res) {
    request("http://www.omdbapi.com/?s=Transformers", function (error, response, body) {
        if(!error && response.statusCode == 200) {
            var results = JSON.parse(body);
            res.send(results["Search"][0]["Title"]);
        }
    })
});


app.listen(3000, function () {
    console.log("Movie App has started on Port 3000!!!");
});