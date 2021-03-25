//  DOM VARIABLES 
var questionContainer = document.getElementById("start-page");

// JAVASCRIPT VARIABLES 
var arrayOfQuestions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed within ____.",
    "Arrays in JavaScript can be used to store ____.",
    "String values must be enclosed within ____ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:",
];

// FUNCTION DEFINITIONS

function displayQuestion(){
    var questionEl = document.createElement("h1");

    questionEl.textContent = arrayOfQuestions[2];

    questionContainer.append(questionEl);
}

// EVENT LISTENERS

// FUNCTION CALLS
displayQuestion();