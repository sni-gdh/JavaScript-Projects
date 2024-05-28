let numberRandom = parseInt((Math.random()*100)+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = new Boolean(true);


if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    
    if(isNaN(guess)){
        alert('Please enter a valid Number');
    }else if(guess< 1){
        alert('Please enter a Number MORE than one');
    }else if(guess > 100){
        alert('Please enter a Number lesser than one');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${numberRandom} `);
            endGame()
        }
        else{
            displayGuess(guess);
            chechkGuess(guess);
        }
    }
}

function chechkGuess(guess){
    if(guess > numberRandom){
        displayMessage(`Number is TOOO!! high`);
    }else if(guess < numberRandom){
        displayMessage(`Number is TOOO!! low`);
    }else{
        displayMessage(`You Guessed it Right`);
        endGame();
    }
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML +=`${guess}, `;
    numGuess+=1;
    remaining.innerHTML = `${11 - numGuess}`;  
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');//key value pair
    p.classList.add('button');
    p.innerHTML= `<h2 id="newGame>start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
   const newGamebtn =  document.querySelector('#newGame');
   newGamebtn.addEventListener('click',function(e){
        numberRandom = parseInt((Math.random()*100)+1);
        prevGuess=[];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - newGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHigh.innerHTML = '';
        playGame = true;
   });
}



