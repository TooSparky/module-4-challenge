// Global Scope Variables
var timerElement = document.getElementById("timer");
var highScore = document.getElementById("high-scores");
var startButton = document.getElementById("button");
var count = document.getElementById("count");
var questionDisplay = document.getElementById("h1");
var answerDisplay = document.getElementById("p");
var buttonChanger = document.getElementById("btn-wrapper");
var highscoreDisplay = document.getElementById("highscore-display");
var clearScore = document.getElementById("clear-scores");

var timerCount = 75;
var numCorrect = 0;

startButton.classList.remove('hide');

// Starts running the program when the start button is pressed
startButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Runs these functions when 'start quiz' is clicked
    startTimer();
    renderQuestions();
    showAnswerBtns();

});

// Starts the timer after start button is pressed
function startTimer() {

    // Local scope variable
    var timer = setInterval(() => {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;

        //need to clear interval
        if (timerCount === 0) {
            clearInterval(timer);
        }

    }, 1000);
}

// All 5 of my quiz questions in an array
var myQuestions = [
    {
        // Question 1
        question: 'Commonly used data types DO NOT include: ',
        answers: {
            answerChoice1: 'strings',
            answerChoice2: 'numbers',
            answerChoice3: 'alerts',
            answerChoice4: 'booleans'
        },
        correctAnswer: 'alerts'
    },
    {
        // Question 2
        question: 'An if / else statement is enclosed with _____.',
        answers: {
            answerChoice1: "curly brackets",
            answerChoice2: "quotes",
            answerChoice3: "square brackets",
            answerChoice4: "parenthesis"
        },
        correctAnswer: 'parenthesis'
    },
    {
        // Question 3
        question: 'Arrays in JavaScript can be used to store _____.',
        answers: {
            answerChoice1: 'numbers and strings',
            answerChoice2: 'booleans',
            answerChoice3: 'objects',
            answerChoice4: 'all of the above'
        },
        correctAnswer: 'all of the above'
    },
    {
        // Question 4
        question: 'A very useful tool for debugging is _____.',
        answers: {
            answerChoice1: 'for loops',
            answerChoice2: 'cascading style sheets',
            answerChoice3: 'console.log',
            answerChoice4: 'bash terminal'
        },
        correctAnswer: 'console.log'
    },
    {
        // Question 5
        question: 'How do you get an ID using QuerySelector?',
        answers: {
            answerChoice1: 'querySelectorAll',
            answerChoice2: "querySelector('.ID')",
            answerChoice3: "querySelector('#ID')",
            answerChoice4: "querySelector('ID')"
        },
        correctAnswer: "querySelector('#ID')"
    }
];

// Loads the questions after the start button is pressed
function renderQuestions() {
    // Local scope variables
    var answers = [];
    var answerChoice;
    var output = [];
    var questionCounter = 5;

    for (var i = 0; i < questionCounter; i++) {
        startButton.classList.add('hide');
        questionDisplay.remove();
        answers = [];

            // Loop for answer choices
            for (answerChoice in myQuestions[i].answers) {
                answers.push('<label>' + '<input type="radio" name="question' + i +
                 '" value="' + myQuestions[i].answers[answerChoice] + '">' 
                 + myQuestions[i].answers[answerChoice] + '</label>');
            }
    
            // Actual output displays ALL QUESTIONS & ANSWERS
            output.push('<div class="question">' + myQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join(' ') + '</div>');

            // Output being displayed
            answerDisplay.innerHTML = output;

            // This allows a 'next question' button to appear
            var nextQuestion = document.getElementById("button-next");
            nextQuestion.textContent = 'Next Question';
            nextQuestion.classList.remove('hide');

    }
    // Runs the showResults function
    showResults();
}

// Created answer buttons to click for next
function showAnswerBtns() {
    answerBtn.setAttribute('style', 'visibility: visible');
}

// Checks if the answers are correct or not
function showResults() {
    // Local variables
    var userAnswer = '';
    var answerPenalty = 10;

    // For loop to check answer value
    for (var i = 0; i < myQuestions.length; i++) {
        userAnswer = (answerDisplay[i].querySelector('input[name=question' + i + ']:checked')).value;

        if (userAnswer === myQuestions[i].correctAnswer) {
            numCorrect++;
            console.log('points added');
        }
        else {
            // Subtracts time when answered incorrectly (hopefully)
            timerElement.textContent = timerCount - answerPenalty;
            console.log('no points for you');
        }
    }

    // Displays how many questions the user got correct
    highscoreDisplay.textContent = 'You got ' + numCorrect + ' out of 5 questions correct';

    // Runs savedScore function to save the score
    savedScore();
}

// To save the high scores
function savedScore() {
    //Save score and add initials
    highscoreDisplay.textContent = 'You finished the quiz! Please enter your initials';

    //NEED to add spot to put initials, take that value and save to highscores tab
    //Cannot do without question display

}

// To clear the high scores when button is pressed
clearScore.addEventListener('click', function() {
    //Resets the numCorrect from what it was to 0
    numCorrect = 0;
    highscoreDisplay.textContent = 'There are no currect highscores';
});
