// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body) // Show the HTML for the Google homepage.
//     }
// })

var request = require('request');
request('http://www.google.com', function (error, response, body) {
    if (error) {
        console.log("SOMETHING WENT WRONG!");
        console.log(error);
    } else {
        if (response.statusCode == 200) {
            // THINGS WORKED!
            console.log(body);
        }
    }
})