let Player = document.getElementById('player');
let Score = document.getElementById('score');
let RealScore = 0;
let Timer = document.getElementById('Timer');
let RealTimer = 20;
let IntervalCounter = 300;
let LoseGameSound = new Audio('sounds/LoseGame.mp3');
let GameSound = new Audio('sounds/GameSound.mp3');
let WinGameSound = new Audio('sounds/WinSound.mp3');


let interval = setInterval(StartTimer, IntervalCounter);

Player.addEventListener('click', function() {
    RealScore++;
    Score.textContent = 'Score ' + RealScore;
    RealTimer += 3;
    Timer.textContent = 'Timer ' + RealTimer;

    let RandomPosX = Math.floor(Math.random() * 450);
    let RandomPosY = Math.floor(Math.random() * 500);
    let RandomScale = Math.floor(Math.random() * 100);

    if(RandomScale < 15) {
        RandomScale = 20;
        Player.style.width = RandomScale + 'px';
        Player.style.height = RandomScale + 'px';
    }

    Player.style.marginLeft = RandomPosX + 'px';
    Player.style.marginTop = RandomPosY + 'px';
    Player.style.width = RandomScale + 'px';
    Player.style.height = RandomScale + 'px';
});

function StartTimer() {
    GameSound.play();
    RealTimer--;
    Timer.textContent = 'Timer ' + RealTimer;
    if(RealTimer < 1) {
        EndGame();
    }
}

function EndGame() {
    if(RealScore >= 20){
        Swal.fire('დრო ამოიწურა, მოიგე!!! :) შენი ქულაა' + RealScore);
        GameSound.pause();
        WinGameSound.play();
    } else if(RealScore < 20) {
        Swal.fire('OOPS დრო ამოიწურა, წააგე!!!  :( ' + 'შენი ქულაა ' + RealScore);
        GameSound.pause();
        LoseGameSound.play();
    }

    clearInterval(interval);
}