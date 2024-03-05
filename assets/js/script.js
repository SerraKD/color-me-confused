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

// Starts the game & hides the start and how to buttons
function startGame() {
    menuBox.classList.add("hide");

};

// Gets to next question automatically when picked an answer
function selectAnswer() {
    // function getNextQuestion() {}
};