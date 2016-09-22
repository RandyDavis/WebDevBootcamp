// function average(scoresArr) {
//     var arrTotal = 0;
//     for(var i = 0; i < scoresArr.length; i++) {
//         arrTotal += scoresArr[i]
//     }
//     var result = (arrTotal / scoresArr.length).toFixed();
//     console.log(result);
//     return result;
// }

// OR

function average(scores) {
    var total = 0;
    scores.forEach(function(score) {
        total += score;
    });

    var avg = total/scores.length;
    console.log(Math.round(avg));
    return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); //should return 68