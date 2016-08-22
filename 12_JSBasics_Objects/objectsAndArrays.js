/**
 * Created by randy on 8/21/16.
 */

/* **** NESTED OBJECTS AND ARRAYS ***** */
// ARRAYS
var arrPosts = [
    {
        title: "Cats are mediocre",
        author: "Randy",
        comment: ["Awesome Post", "Funny Post"]
    },
    {
        title: "Cats are not cool",
        author: "Cat Hater",
        comment: ["Terrible Post", "Funny Post"]
    }
]


// OBJECTS Exercise 2
var someObject = {
    friends: [
        { name: "Malfoy"},
        { name: "Crabbe"},
        { name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

// Write code to retrieve "Malfoy" from someObject
// Go one "layer" at a time!

console.log(someObject.friends[0].name);



