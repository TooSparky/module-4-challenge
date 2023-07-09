// Global Scope Variables
var timerElement = document.getElementById("timer");
var highScore = document.getElementById("high-scores");
var startButton = document.getElementById("button");
var count = document.getElementById("count");
var questionDisplay = document.getElementById("h1");
var answerDisplay = document.getElementById("p");

var timerCount = 75;

// Starts running the program when the start button is pressed
startButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Runs these functions when 'start quiz' is clicked
    startTimer();
    renderQuestions();

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

// All 5 of my quiz questions
var myQuestions = [
    {
        question: 'Commonly used data types DO NOT include: ',
        answers: {
            answerChoice1: 'strings',
            answerChoice2: 'numbers',
            answerChoice3: 'alerts',
            answerChoice4: 'booleans'
        },
        correctAnswer: 'answerChoice3'
    },
    {
        question: 'An if / else statement is enclosed with: ',
        answers: {
            answerChoice1: "curly brackets",
            answerChoice2: "quotes",
            answerChoice3: "square brackets",
            answerChoice4: "parenthesis"
        },
        correctAnswer: 'answerChoice4'
    },
    {
        question: 'Arrays in JavaScript can be used to store: ',
        answers: {
            answerChoice1: 'numbers and strings',
            answerChoice2: 'booleans',
            answerChoice3: 'objects',
            answerChoice4: 'all of the above'
        },
        correctAnswer: 'answerChoice4'
    },
    {
        question: 'A very useful tool for debugging is ',
        answers: {
            answerChoice1: 'for loops',
            answerChoice2: 'cascading style sheets',
            answerChoice3: 'console.log',
            answerChoice4: 'bash terminal'
        },
        correctAnswer: 'answerChoice3'
    },
    {
        question: 'How do you get an ID using QuerySelector?',
        answers: {
            answerChoice1: 'querySelectorAll',
            answerChoice2: "querySelector('.ID')",
            answerChoice3: "querySelector('#ID')",
            answerChoice4: "querySelector('ID')"
        },
        correctAnswer: 'answerChoice3'
    }
];

// To load the questions after the start button is pressed
function renderQuestions(questions, quizContainer) {
    // Local scope variables
    var answers;
    var answerChoice;
    var output = [];
    var questionCounter = 5;

    for (var i = 0; i < questionCounter; i++) {
        startButton.remove();
        answers = [];

        // myQuestions.question
        // myQuestions.answers.answerChoice1
        // myQuestions.correctAnswer

        for (answerChoice in questions[i].answers) {
            answers.push('<label>' + '<input type="radio" name="question' + i + '" value="' + answerChoice + '">'
            + answerChoice + ': ' + questions[i].answers[answerChoice] + '</label>');
        }

        output.push('<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>');
    }

    quizContainer.textContent = output.join('');

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


// function renderQuestions() {
//     var questions = 5;
    
//     for (var i = 0; i < questions; i++) {
//         if (i <= 1) {
//             var questionOne = "Commonly used data types DO NOT include: ";
            

//             questionOne = questionDisplay.textContent;

//             var answerOne = ["strings", "booleans", "alerts", "numbers"];
//             var theAnswerToOne = answerOne[2];
            
//             if (theAnswerToOne === answerOne[2]) {
//                 console.log('correct');
//                 savedScore();
//             }
//             else {
//                 console.log('wrong');
//             }
//         }
//         else if (i <= 2) {
//             var questionTwo = "An if / else statement is enclosed with: ";

//         }
//         else if (i <= 3) {

//         }
//         else if (i <= 4) {

//         }
//         else if (i <= 5) {

//         }
//     }
// }