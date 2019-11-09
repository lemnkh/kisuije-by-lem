var $cases = [...document.getElementsByClassName('case')];
var $input = document.getElementById('guess');

var peopleToGuess = [p1,p2,p3,p4,p5,p6];

var p1 = {
    image: 'url(./../images/françois.jpg)',
    nom: 'François Hollande'
}

var p2 = {
    image: 'url(./../images/angela.jpg)',
    nom: 'Angela Merkel' 
}

var p3= {
    image: 'url(./../images/whitney.jpg)',
    nom: 'Whitney Houston' 
}

var p4 = {
    image: 'url(./../images/mariah.jpg)',
    nom: 'Mariah Carey' 
}

var p5= {
    image: 'url(./../images/obama.png)',
    nom: 'Barack Obama' 
}

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
        var i = Math.floor(Math.random()*$cases.length);
        if ($input.value === peopleToGuess[i]) {
             alert("Bien joué ! T'as " + $score + " points");
        }
    })
}

function startGame () {
    gameTimer();
    guessMe();
}


startGame();


