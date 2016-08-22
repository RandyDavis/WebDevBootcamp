/**
 * Created by randy on 8/21/16.
 */
/*
    Create an array of movie objects.  Each movie should have a title, rating, and
    hasWatched properties.  Iterate through the array and print out something that looks like:
    - You have watched "In Bruges" - 5 stars
    - You have not seen "Froze" - 4.5 stars
    - You have seen "Mad Max Fury Road" - 3.5 stars
    - You have not seen "Les Miserables" - 3.5 stars

    USE YOUR OWN MOVIES!
 */

var movies = [
    {
        title: "The Avengers: Age of Ultron",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Suicide Squad",
        hasWatched: false,
        rating: "N/A"
    },
    {
        title: "Batman V Superman",
        hasWatched: true,
        rating: 4.5
    },
    {
        title: "Captain America: Civil War",
        hasWatched: true,
        rating: 5
    },
];

movies.forEach(function (movie) {
    if (movie.hasWatched) {
        console.log("You have seen " + "\"" + movie.title + "\"" + " - " + movie.rating + " stars");
    } else {
        console.log("You have not watched " + "\"" + movie.title + "\"" + " - " + movie.rating + " stars");
    }
});

// Another way to do it using result variable to build a string
movies.forEach(function(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "seen ";
    } else {
        result += "not watched ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
});

// Optional refactoring of string builder as a function
function buildString(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "seen ";
    } else {
        result += "not watched ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function (movie) {
    console.log(buildString(movie));
});