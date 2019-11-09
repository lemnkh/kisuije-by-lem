var $cases = [...document.getElementsByClassName('case')];
var $input = document.getElementById('guess');

var peopleToGuess = ['François Hollande'];

// révéler toute l'image à la fin
// rajouter autres personnes à deviner
// proposer de continuer ou arrêter jeu dans boîte de dialogue
// page finale de score

var time = 60;
var $score = 6000;
function gameTimer() {
    if ((time > 0) && ($score > 0)) {
        time--;
        $score = $score - 100;
        document.getElementById("timer").innerHTML = time;
        document.getElementById("score").innerHTML = $score;
        setTimeout(gameTimer, 1000)
        if ((time%1 === 0) && ($score%1 === 0)) {
            revealCase();
        }
        if (time === 0) {
            revealAll();
        }
    }
}

function revealCase() {
    var i = Math.floor(Math.random()*$cases.length);
    var $case = $cases[i];
    $case.classList.add('revealed');
    $cases.splice(i, 1);
}

function revealAll() {
    for (var i=0; i<$cases.length; i++) {
        var $case = $cases[i];
        $case.classList.add('revealed');
    }
}

function guessMe() {

    $input.addEventListener("input", function(event) {
        event.preventDefault(); //prevent pour qu'il prenne en compte le enter que sur le input
        if ($input.value === peopleToGuess[0]) {
             alert("Bien joué ! T'as " + $score + " points");
        }
    })
}

function startGame () {
    gameTimer();
    guessMe();
}


startGame();


