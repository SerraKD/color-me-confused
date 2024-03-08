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

// Event listener for Start button
startButton.addEventListener('click', startGame);
//  Event listener for Logo, returns to home page
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

// Starts the game & hides the start and how to buttons
function startGame() {
    menuBox.classList.add("hide");
    gameArea.classList.remove("hide");
    randomQuestion = questions.sort(() => Math.random() - 0.5);
    presentQuestion = 0;
    console.log(randomQuestion);
    getNextQuestion();

};

// * get the next color question
function viewQuestion(question) {
    questionElm.innerText = question.question;
}

function getNextQuestion() {
    viewQuestion(randomQuestion[presentQuestion]);
    selectAnswer();
}

// ADD TIMER TO GAME!! 

// Gets to next question automatically when picked an answer
function selectAnswer() {
    const answerButtons = document.querySelectorAll('#answer-box button');
    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add check answer here
            // when answer is selected, move to the next question
            presentQuestion++;
            if (presentQuestion < randomQuestion.length) {
                getNextQuestion();
            } else {
                // game over
            }
        });
    });
}

// create questions
const questions = [{
    question: 'YELLOW',
    answers: [{
            text: 'Yellow',
            correct: true
        },
        {
            text: 'Red',
            correct: false
        }
    ]
}, {
    question: 'BLUE',
    answers: [{
            text: 'Blue',
            correct: true
        },
        {
            text: 'Green',
            correct: false
        }
    ]
}, {
    question: 'GREEN',
    answers: [{
            text: 'Green',
            correct: true
        },
        {
            text: 'Yellow',
            correct: false
        }
    ]
}, {
    question: 'RED',
    answers: [{
            text: 'Red',
            correct: true
        },
        {
            text: 'Blue',
            correct: false
        }
    ]
}];