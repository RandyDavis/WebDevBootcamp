var mongoose    = require('mongoose');
var Campground  = require('./models/campground');
var Comment     = require('./models/comment');

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm9.staticflickr.com/8286/7541483632_e1f311f594.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio dolore doloremque dolores earum est, molestias nesciunt numquam obcaecati perferendis quibusdam quidem sequi temporibus tenetur unde. Adipisci, consectetur consequatur debitis dolor error explicabo fugit labore, maiores nihil nulla obcaecati, quaerat quia similique sint voluptas! Atque blanditiis id impedit incidunt magni maxime modi obcaecati quae repudiandae!"
    },
    {
        name: "Glacial Peak",
        image: "https://farm6.staticflickr.com/5098/5496185186_d7d7fed22a.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio dolore doloremque dolores earum est, molestias nesciunt numquam obcaecati perferendis quibusdam quidem sequi temporibus tenetur unde. Adipisci, consectetur consequatur debitis dolor error explicabo fugit labore, maiores nihil nulla obcaecati, quaerat quia similique sint voluptas! Atque blanditiis id impedit incidunt magni maxime modi obcaecati quae repudiandae!"
    },
    {
        name: "Sandman's Way",
        image: "https://farm8.staticflickr.com/7148/6622139405_9753433ff9.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio dolore doloremque dolores earum est, molestias nesciunt numquam obcaecati perferendis quibusdam quidem sequi temporibus tenetur unde. Adipisci, consectetur consequatur debitis dolor error explicabo fugit labore, maiores nihil nulla obcaecati, quaerat quia similique sint voluptas! Atque blanditiis id impedit incidunt magni maxime modi obcaecati quae repudiandae!"
    },
];

function seedDB () {
    // REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        // ADD A FEW CAMPGROUNDS
        data.forEach(function (seed) {
            Campground.create(seed, function (err, campground) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // CREATE A COMMENT
                    Comment.create({
                        text: "This place is great, but I wish there was internet.",
                        author: "Homer"
                    }, function (err, comment) {
                        if (err) {
                          console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment.");
                        }
                    });
                }
            });
        });
    });


    // ADD A FEW COMMENTS
}

module.exports = seedDB;