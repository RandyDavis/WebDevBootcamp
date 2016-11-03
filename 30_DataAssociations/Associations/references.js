var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo_2");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model('Post', postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model('User', userSchema);

// CREATE STARTER USER DATA
// User.create({
//     email: "bob@email.com",
//     name: "Bob Belcher"
// });

// CREATE STARTER POST - UPDATE/SAVE MULTIPLE TIMES FOR TESTING PURPOSES SO WE HAVE MORE THAN 1 IN DB
// Post.create({
//     title: "How to Cook the Best Burger pt.3",
//     content: 'The Most burgers blah blah blah burger good blah'
// }, function (err, post) {
//     User.findOne({email: "bob@email.com"}, function (err, foundUser) {
//         if (err) {
//           console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function (err, data) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

// FIND USER
// FIND ALL POSTS FOR THAT USER
User.findOne({email: "bob@email.com"}).populate("posts").exec(function (err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});