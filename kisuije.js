var $cases = [...document.getElementsByClassName('case')];
var $sections = [...document.querySelectorAll('section')];
var $input = document.getElementById('guess');

var $fondPlayboard = document.querySelector('.fond-playboard');

var $start = document.getElementById('start-button');
$start.onclick = function () {
    console.log('starting');
    
    startGame();

    $sections[0].classList.remove('active');
    $sections[1].classList.add('active');
  };

var p1 = {
    image: "url('images/françois.jpg')",
    nom: 'François Hollande'

 // $background.style.backgroundImage = 
}

var p2 = {
    image: "url('images/angela.png')",
    nom: 'Angela Merkel' 
}

var p3 = {
    image: "url('images/whitney.jpg')",
    nom: 'Whitney Houston' 
}

var p4 = {
    image: "url('images/mariah.jpg')",
    nom: 'Mariah Carey' 
}

var p5 = {
    image: "url('images/obama.png')",
    nom: 'Barack Obama' 
}

var peopleToGuess = [];

peopleToGuess.push(p1);
peopleToGuess.push(p2);
peopleToGuess.push(p3);
peopleToGuess.push(p4);
peopleToGuess.push(p5);


// proposer de continuer ou arrêter jeu dans boîte de dialogue
// page finale de score

var time = 60;
var $scoreFinal = 0;
var $score = $scoreFinal + 6000;

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

    var i = Math.floor(Math.random()*peopleToGuess.length);
    
    $fondPlayboard.style.backgroundImage = peopleToGuess[i].image;

    $input.addEventListener("input", function(event) {
        event.preventDefault(); //prevent pour qu'il prenne en compte le enter que sur le input
        // if ($input.value === peopleToGuess[i].nom) {
        //      alert("Bien joué ! T'as " + $score + " points");
        // }

        if ($input.value === peopleToGuess[i].nom) {
            alert("Bien joué ! T'as " + $score + " points");
            // if (window.confirm("Bien joué ! Cliquez sur OK pour continuer.")) { 
            //     window.location.reload();
            // }

            $sections[1].classList.remove('active');
            $sections[2].classList.add('active');

            $scoreFinal = Number(document.getElementById("score-final").innerHTML);
           
            $scoreFinal = $scoreFinal + Number($score);
            
            document.getElementById("score-final").innerHTML = $scoreFinal;

            document.getElementById("message").innerHTML = "Bien joué, t'as l'œil toi !";
        }
        
        if ((time === 0) && ($input.value != peopleToGuess[i].nom)) {
            $sections[1].classList.remove('active');
            $sections[2].classList.add('active');

            var $scoreFinal = document.getElementById("score-final").innerHTML;
            document.getElementById("score-final").innerHTML = $scoreFinal;

            document.getElementById("message").innerHTML = "Oh-oh. Bon, peut-être une prochaine fois ?"

            //cacher continuer et montrer recommencer
        }
    })
}

function startGame () {
    gameTimer();
    guessMe();
}

var $start = document.getElementById('start-button');
$start.onclick = function () {
    console.log('starting');
    
    startGame();

    $sections[0].classList.remove('active');
    $sections[1].classList.add('active');
  };

var $continue = document.getElementById('continue-button');
$continue.onclick = function () {
    startGame();

    $sections[0].classList.remove('active');
    $sections[2].classList.remove('active');
    $sections[1].classList.add('active');
}

// function startOver () {
//     $scoreFinal = 0;

// }

