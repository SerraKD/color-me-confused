const startButton = document.getElementById('btn-start');
const logo = document.getElementById('logo');
const howToButton = document.getElementById('btn-dialog-on');
const closeDialog = document.getElementById('btn-dialog-off');
const dialog = document.getElementById('dialog-box');
const menuBox = document.getElementById('menu-box');
const questionElm = document.getElementById('question-box');
// to make game area visible & hiding menu buttons https://www.w3schools.com/jsref/met_document_queryselector.asp
const gameArea = document.querySelector('.game-area');

let randomQuestion, presentQuestion;
const gameTimer = 8000;
let timer;
let correctScore = 0;
let incorrectScore = 0;
const correctScoreElm = document.querySelector('#correct');
const incorrectScoreElm = document.querySelector('#incorrect');

// create questions array
const questions = [{
    question: 'Yellow',
}, {
    question: 'Blue',
}, {
    question: 'Green',
}, {
    question: 'Red',
}];

// Event listener for Start button
startButton.addEventListener('click', startGame);
// Event listener for Logo, returns to home page
logo.addEventListener('click', () => {
    window.location.assign("./index.html");
});
// Event listener for how to button, opens & closes dialog box https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
howToButton.addEventListener('click', () => {
    dialog.showModal();
});

closeDialog.addEventListener('click', () => {
    dialog.close();
});

// Starts the game & hides the start and how to buttons https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
function startGame() {
    try {
        menuBox.classList.add("hide");
        gameArea.classList.remove("hide");
        randomQuestion = questions.sort(() => Math.random() - 0.5);
        presentQuestion = 0;
        // adds timer and gives user 15 seconds to complete whole game https://www.w3schools.com/jsref/met_win_settimeout.asp
        timer = setTimeout(() => {
            // shows user that the time limit reached, game is over
            gameArea.classList.add("hide");
            const timeUp = document.createElement('p');
            timeUp.innerText = 'Time is up, You lost.';
            document.body.appendChild(timeUp);
            timeUp.style.color = '#ffffff';
            // create restart button that links back to landingpage
            const buttonRestart = document.createElement('button');
            buttonRestart.innerText = 'Restart';
            document.body.appendChild(buttonRestart);
            buttonRestart.addEventListener('click', () => {
                window.location.assign("./index.html");
            });
        }, gameTimer);
        getNextQuestion();
        const answerButtons = document.querySelectorAll('#answer-box button');
        answerButtons.forEach(button => {
            button.addEventListener('click', () => {
                let selectedAnswer = button.innerText;
                checkCorrectAnswer((randomQuestion[presentQuestion]), selectedAnswer);
                // removes event listener for answer buttons so user can only select one answer per question
                button.removeEventListener('click', selectAnswer);
                selectAnswer();
            });
        });
    } catch (error) {
        console.error('error');
    }
}

// view current question
function viewQuestion(question) {
    questionElm.innerText = question.question;
}

// get the next color question
function getNextQuestion() {
    viewQuestion(randomQuestion[presentQuestion]);
}

// Gets to next question automatically when picked an answer
function selectAnswer() {
    presentQuestion++;
    if (presentQuestion < randomQuestion.length) {
        getNextQuestion();
    } else {
        // inform user game over, clear timer and remove game area
        clearInterval(timer);
        gameArea.classList.add("hide");
        const gameOver = document.createElement('p');
        gameOver.innerText = 'Game Over';
        document.body.appendChild(gameOver);
        gameOver.style.color = '#ffffff';
        // template strings to show user their score
        const finalScore = document.createElement('p');
        finalScore.innerText = `Your Score is: ${correctScore}`;
        document.body.appendChild(finalScore);
        finalScore.style.color = '#ffffff';
        const buttonRestart = document.createElement('button');
        buttonRestart.innerText = 'Restart';
        document.body.appendChild(buttonRestart);
        buttonRestart.addEventListener('click', () => {
            window.location.assign("./index.html");
        });
    }
}

// check answers 
function checkCorrectAnswer(question, selectedAnswer) {
    if (selectedAnswer === question.question) {
        correctScore++;
        correctScoreElm.textContent = correctScore;
    } else {
        incorrectScore++;
        incorrectScoreElm.textContent = incorrectScore;
    }
}