var mongoose = require('mongoose');
var Post = require('./models/post');
var User = require('./models/user');

mongoose.connect("mongodb://localhost/blog_demo_2");

// CREATE STARTER USER DATA
// User.create({
//     email: "bob@email.com",
//     name: "Bob Belcher"
// });

// CREATE STARTER POST - UPDATE/SAVE MULTIPLE TIMES FOR TESTING PURPOSES SO WE HAVE MORE THAN 1 IN DB
Post.create({
    title: "How to Cook the Best Burger pt.4",
    content: 'The Most burgers 4 me are  blah blah blah burger good blah'
}, function (err, post) {
    User.findOne({email: "bob@email.com"}, function (err, foundUser) {
        if (err) {
          console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// FIND USER
// FIND ALL POSTS FOR THAT USER
// User.findOne({email: "bob@email.com"}).populate("posts").exec(function (err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });