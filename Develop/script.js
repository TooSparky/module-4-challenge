// Global Scope Variables
var timerElement = document.getElementById("timer");
var highScore = document.getElementById("high-scores");
var startButton = document.getElementById("button");
var count = document.getElementById("count");
var questionDisplay = document.getElementById("h1");
var answerDisplay = document.getElementById("p");

var timer;
var timerCount;

// Starts running the program when the start button is pressed
startButton.addEventListener('click', function(event) {
    event.preventDefault();



    startTimer();
    renderQuestions();

});

// Starts the timer after start button is pressed
function startTimer() {
    timer = setInterval(() => {
        timerCount--;
        timerElement.textContent = timerCount;


    }, 1000);
}

// To load the questions after start button is pressed
function renderQuestions() {
    var questions = 5;
    
    for (var i = 0; i < questions; i++) {
        if (i <= 1) {
            var questionOne = "Commonly used data types DO NOT include: ";
            questionDisplay.textContent = questionOne;

            var answerOne = ["strings", "booleans", "alerts", "numbers"];
            var theAnswerToOne = answerOne[2];
            
            if (theAnswerToOne === answerOne[2]) {
                console.log('correct');
                savedScore();
            }
            else {
                console.log('wrong');
            }
        }
        else if (i <= 2) {
            var questionTwo = "An if / else statement is enclosed with: ";

        }
        else if (i <= 3) {

        }
        else if (i <= 4) {

        }
        else if (i <= 5) {

        }
    }
}

// To save the high scores to
function savedScore() {
}

// To clear the high scores when button is pressed
function clearScore() {
}




// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score