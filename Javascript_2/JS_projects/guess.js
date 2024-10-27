let random=(parseInt(Math.random()*100+1))

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const reamaining=document.querySelector('.lastResult')

const lowOrHi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true
if(playGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
        
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a valid number')}
    else if(guess>100){
        alert('Please enter a valid number')}
    else{
        prevGuess.push(guess)
        if (numGuess===11) {
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${random}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }


    }
        




function checkGuess(guess){
    if (guess===random) {
        displayMessage(`You won! The number was ${random}`)
        endGame()
        
    }
    else if(guess<random){
        displayMessage(`number is tooo low`)
    }
    else if(guess>random){
        displayMessage(`number is tooo High`)
    }


}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  , `
    numGuess++;
    reamaining.innerHTML=`${11-numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`


}

function endGame()
{
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML='<h2 id="newGame">Start new Game</h2>'
startover.appendChild(p)
playGame=false;
newGame()

}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        random=(parseInt(Math.random()*100+1))
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        reamaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        playGame=true;


    })


}
