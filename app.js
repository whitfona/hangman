
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
let guess = document.getElementById('letterGuess');
const submitBtn = document.getElementById('submitBtn');

solutionWord = getSolution(); // Get random word generated from wordlist
console.log(solutionWord); // Show word to guess in console
hideSolution(); // Hides letters in solution but shows underline
checkSolution( guess, submitBtn );
usedLetters( guess, submitBtn ); // Show used letters at bottom of page

// Get random word from wordlist
function getSolution() {
    randomPositionFromArray = Math.floor((Math.random() * wordlist.length));
    answer = wordlist[randomPositionFromArray];
    return answer;
}

// Print each letter of solution array into #solution in DOM
solutionArray = solutionWord.toUpperCase().split('');
for( let i = 0; i < 13; i++ ) {
    idTag = 'l'+i;
    if (solutionArray[i] == undefined) {
        document.getElementById(idTag).classList.add('hide');
    } else {
        document.getElementById(idTag).innerHTML = solutionArray[i];
    }
}

// Hide letters in solution until they are selected
function hideSolution() {
    let lettersInSolution = Array.from(document.getElementsByTagName('p'));
    for (let i = 0; i < lettersInSolution.length; i++) {
        lettersInSolution[i].style.color = "transparent";
    }
}

// Display letters once it has been guessed
function usedLetters( guess, submitBtn) {
    lettersGuessed = [];
    submitBtn.addEventListener('click', (e) => {
        
        alphabet.forEach((letter) => {
            if (letter == guess.value.toUpperCase()) {
                indexOfLetterToChange = alphabet.indexOf(guess.value.toUpperCase());
                letterConversion = indexOfLetterToChange / 0.5;
            }
        });
        if (alphabet.includes(guess.value.toUpperCase())) {
            newArray = lettersGuessed.push(' ' + alphabet[indexOfLetterToChange]);      
            document.getElementById('usedLetters').innerHTML = lettersGuessed;
        } else {
            document.getElementById('errorMessage').style.display = 'block';
            setTimeout(function(){ document.getElementById('errorMessage').style.display = 'none'; }, 2000);
        }

        clearInputCell();
        e.preventDefault();
    });

}

// check if guess letter is in solution
function checkSolution(guess, submitBtn) {
    incorrectCounter = 0;
    correctCounter = 0;
    submitBtn.addEventListener('click', (e) => {
        flag = false;
        let hiddenLetters = Array.from(document.getElementsByTagName('p'));
        solutionArray.forEach((letter, index) => {

            if (letter.includes(guess.value.toUpperCase()) ) {
                hiddenLetters[index].style.color = "#000";
                flag = true;
                correctCounter ++;
                if (correctCounter == solutionWord.length){
                    showMessage('win');
                }
            } else {
                // console.log('wrong guess');
            };
        });
        if (flag == false) {
            incorrectCounter ++;
        };
        showBodyParts(incorrectCounter);
        e.preventDefault();
    });

}

// Show Body Parts for Wrong Guesses
function showBodyParts(incorrectGuessTotal) {
    if (incorrectGuessTotal == 1) {
        document.getElementById('head').className = "show";
    } if (incorrectGuessTotal == 2) {
        document.getElementById('torso').className = "show";
    } if (incorrectGuessTotal == 3) {
        document.getElementById('left-arm').className = "show";
    } if (incorrectGuessTotal == 4) {
        document.getElementById('right-arm').className = "show";
    } if (incorrectGuessTotal == 5) {
        document.getElementById('left-leg').className = "show";
    } if (incorrectGuessTotal == 6) {
        document.getElementById('right-leg').className = "show";
        showMessage('lose', solutionWord);
    }
}

// Display Win/Lost Message
function showMessage(outcome, solutionWord) {
    document.getElementById('winLosemessage').innerText = `You ${outcome}! Press 'Reset' to play again.`;
    if (outcome == 'lose') {
        solutionWord = solutionWord.toUpperCase();
        document.getElementById('solutionMessage').innerText = `Solution: ${solutionWord}`;
    }
    guess.disabled = true;
;}

// Clear input field
function clearInputCell() {
    guess.value = '';
}
