// LET 
let playerOne = document.getElementById('playerOne')
let playerTwo = document.getElementById('playerTwo')

let score1 = document.getElementById('score1')
let score2 = document.getElementById('score2')
let currentScore1 = document.getElementById('currentScore1')
let currentScore2 = document.getElementById('currentScore2')
let diceImg = document.getElementById('diceImg')
let dice = document.getElementById('dice');


// vynulovanie / textcontent
scoreOne = 0
scoreTwo = 0
currentScoreOne = 0
currentScoreTwo = 0
dice.style.display = 'none'

score1.textContent = scoreOne
score2.textContent = scoreTwo
currentScore1.textContent = currentScoreOne
currentScore2.textContent = currentScoreTwo

// on click Roll Dice ....roll dice
roundScore = 0
scorePlayer1 = 0


// Funkcia rollovanie efekt
function rollEffect(){
    dice.style.display = 'block'
    let diceNumber = Math.ceil(Math.random()*6)
    diceImg.src = `img/${diceNumber}.jpg`


}

function rollDice(){
    dice.style.display = 'block'
    
    let diceNumber = Math.ceil(Math.random()*6)
    diceImg.src = `img/${diceNumber}.jpg`
    
    roundScore = roundScore + diceNumber
    
    if (diceNumber !== 1 && activePlayer === 0) {
        currentScore1.textContent = roundScore 
    }
    else if(diceNumber !== 1 && activePlayer === 1){
        currentScore2.textContent = roundScore
    } else if (diceNumber == 1 ){
        toggle()
        roundScore = 0
    }
}


// Prepina medzi active playerom
activePlayer = 0

function toggle(){
    if (activePlayer === 0) {
        activePlayer = 1
        currentScore1.textContent = 0
        playerOne.classList.remove('active')
        playerTwo.classList.add('active')
    } else {
        activePlayer = 0
        currentScore2.textContent = 0
        playerTwo.classList.remove('active')
        playerOne.classList.add('active')
    }
}

// podrzi score a prepne hraca
function holdScore(){

    if (activePlayer === 0 ) {
        scoreOne = scoreOne + roundScore
        score1.textContent = scoreOne
        activePlayer = 1
        playerOne.classList.remove('active') 
        playerTwo.classList.add('active')
        currentScore1.textContent = 0
        currentScore2.textContent = 0
        roundScore = 0
    } else {
        scoreTwo = scoreTwo + roundScore
        score2.textContent = scoreTwo
        activePlayer = 0
        playerTwo.classList.remove('active')
        playerOne.classList.add('active')
        currentScore1.textContent = 0
        currentScore2.textContent = 0
        roundScore = 0
    } 
    
    let rollDice = document.getElementById('rollDice')
    let holdScore = document.getElementById('holdScore')
    if (scoreOne >= 10 || scoreTwo >= 10){
        rollDice.disabled = true
        holdScore.disabled = true
        playerTwo.classList.remove('active')
        playerOne.classList.remove('active') 
    }
    
    // PRida Clasu s vytaz hracovy co vyhral.
    if(scoreOne >= 10){
        playerOne.classList.add('active')
        score1.textContent = 'WINNER'
    } else if(scoreTwo >= 10){
        playerTwo.classList.add('active')
        score2.textContent = 'WINNER'
    }
}

// New game button
function newGame(){
    location.reload();
}

// dice shake function
function shake(){
    dice.classList.add('shake')
    
    function removeShake(){
        dice.classList.remove('shake')
    }
    setTimeout(removeShake,800)
}


