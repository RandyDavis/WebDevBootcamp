/**
 * Created by randy on 8/25/16.
 */

/*  ************ MY VERSION *****************
var player1Score = 0;
var player2Score = 0;
// var playingTo = 0;

var p1ScoreBtn = document.getElementById("p1");
var p2ScoreBtn = document.getElementById("p2");
var resetBtn = document.getElementById("reset");
var playingToSelect = document.getElementById("playTo");


function startGame () {

    setPlayToScore();

    //addPoints();

    resetScore();


}


function setPlayToScore () {
    playingToSelect.addEventListener("click", function () {
        var playingTo = document.getElementById("playTo").valueAsNumber;
        document.getElementById("playingTo").textContent = playingTo;
    });
    // return playingTo;
    addPoints();
}

function addPoints () {
    if ((player1Score || player2Score) !== playingToSelect.valueAsNumber) {
        p1ScoreBtn.addEventListener("click", function () {
            showScore("p1Score", player1Score);
            if (player1Score !== playingToSelect.valueAsNumber ) {
                player1Score += 1;
            } else {
                endGame();
                document.getElementById("p1Score").style.color = "green";
            }
        });

        p2ScoreBtn.addEventListener("click", function () {
            showScore("p2Score", player2Score);
            if (player2Score !== playingToSelect.valueAsNumber ) {
                player2Score += 1;
            } else {
                endGame();
                document.getElementById("p2Score").style.color = "green";
            }
        });
    } else {
        endGame();
    }

}


function resetScore () {
    resetBtn.addEventListener("click", function () {
        document.getElementById("p1Score").style.color = "black";
        document.getElementById("p2Score").style.color = "black";
        player1Score = 0;
        player2Score = 0;
        showScore("p1Score", player1Score);
        showScore("p2Score", player2Score);
    })
}

function showScore (playerScoreEl, playerScore) {
    document.getElementById(playerScoreEl).textContent = playerScore;
}

function endGame () {
    p1ScoreBtn.addEventListener("click", function () {
        player1Score += 0;
    });
    p2ScoreBtn.addEventListener("click", function () {
        player2Score += 0;
    });
}

startGame();
*/  /* *********** MY VERSION END ***************** */


/* *********** COLT VERSION **************** */
var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var resetBtn = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var p1ScoreDisplay = document.querySelector("#p1Score");
var p2ScoreDisplay = document.querySelector("#p2Score");
var playingToSelect = document.querySelector("#playTo");
var playingToDisplay = document.querySelector("#playingTo");
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1ScoreDisplay.classList.add("winner");
            gameOver = true;
        }
        p1ScoreDisplay.textContent = p1Score;
    }
})

p2Btn.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2ScoreDisplay.classList.add("winner");
            gameOver = true;
        }
        p2ScoreDisplay.textContent = p2Score;
    }
})

resetBtn.addEventListener("click", reset);

playingToSelect.addEventListener("change", function () {
    console.log("input changed!");
    playingToDisplay.textContent = playingToSelect.valueAsNumber;
    winningScore = playingToSelect.valueAsNumber;
    reset();
})

function reset () {
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
    p1ScoreDisplay.classList.remove("winner");
    p2ScoreDisplay.classList.remove("winner");
    gameOver = false;
}