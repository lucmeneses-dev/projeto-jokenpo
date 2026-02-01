const result = document.querySelector('.result');
const myScore = document.querySelector('.my-score span');
const machineScore = document.querySelector('.machine-score span');

let myPoints = 0;
let machinePoints = 0;

// ENUMS
const GAME_CHOICES = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
};

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = [GAME_CHOICES.ROCK, GAME_CHOICES.PAPER, GAME_CHOICES.SCISSORS];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log('Jogador escolheu: ' + human + ' Maquina escolheu: ' + machine);

    if (human === machine) {
        result.innerHTML = 'Deu Empate! &#x1F610';
    } else if ((human === GAME_CHOICES.ROCK && machine === GAME_CHOICES.SCISSORS) ||
               (human === GAME_CHOICES.PAPER && machine === GAME_CHOICES.ROCK) ||
               (human === GAME_CHOICES.SCISSORS && machine === GAME_CHOICES.PAPER)) {
        myPoints++;
        myScore.innerHTML = myPoints;
        result.innerHTML = 'Você Ganhou! &#x1F601';
    } else {
        machinePoints++;
        machineScore.innerHTML = machinePoints;
        result.innerHTML = 'Você Perdeu! &#x1F62D';
    }
}