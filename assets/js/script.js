// Event listener for Start button
const startButton = document.getElementById('btn-start');

startButton.addEventListener('click', startGame);

// Event listener for how to button, opens & closes dialog box https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
const howToButton = document.getElementById('btn-dialog-on');
const closeDialog = document.getElementById('btn-dialog-off');
const dialog = document.getElementById('dialog-box');

howToButton.addEventListener('click', () => {
    dialog.showModal();
});

closeDialog.addEventListener('click', () => {
    dialog.close();
});

const menuBox = document.getElementById('menu-box');

// to make game area visible & hiding menu buttons https://www.w3schools.com/jsref/met_document_queryselector.asp
const gameArea = document.querySelector('.game-area');

// Starts the game & hides the start and how to buttons
function startGame() {
    menuBox.classList.add("hide");
    gameArea.classList.remove("hide");

};

// Gets to next question automatically when picked an answer
function selectAnswer() {
    // function getNextQuestion() {}
};

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
    ],

    question: 'BLUE',
    answers: [{
            text: 'Blue',
            correct: true
        },
        {
            text: 'Green',
            correct: false
        }
    ],

    question: 'GREEN',
    answers: [{
            text: 'Green',
            correct: true
        },
        {
            text: 'Yellow',
            correct: false
        }
    ],

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
}]