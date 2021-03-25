//  DOM VARIABLES
var questionContainer = document.getElementById("start-page");
var correctAnswerButton = document.getElementById("correct-answer");
var incorrectAnswerButtonAlpha = document.getElementById(
  "incorrect-answer-alpha"
);
var incorrectAnswerButtonBeta = document.getElementById(
  "incorrect-answer-beta"
);
var incorrectAnswerButtonCharlie = document.getElementById(
  "incorrect-answer-charlie"
);
// JAVASCRIPT VARIABLES
var arrayOfQuestions = [
  "Commonly used data types DO NOT include:",
  "The condition in an if/else statement is enclosed within ____.",
  "Arrays in JavaScript can be used to store ____.",
  "String values must be enclosed within ____ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
];
var currentIndex = 0;
// FUNCTION DEFINITIONS

function displayQuestion() {
  // clears out previous question
  questionContainer.innerHTML = "";
  // element
  var questionEl = document.createElement("h1");
  // add content
  questionEl.textContent = arrayOfQuestions[currentIndex];
  // append to existing element
  questionContainer.append(questionEl);
}

// EVENT LISTENERS
correctAnswerButton.addEventListener("click", function () {
  console.log("You choose wisely");
  // ran a check to cycle through index and test. marked out as note when test successful - b/c I want quiz to have a beginning and conclusion.
  // if(currentIndex < arrayOfQuestions.length - 1){
  currentIndex++;
  // } else {
  //     currentIndex = 0;
  // }
  displayQuestion();
});
incorrectAnswerButtonAlpha.addEventListener("click", function () {
  console.log("You choose poorly");

  currentIndex++;

  displayQuestion();
});
incorrectAnswerButtonBeta.addEventListener("click", function () {
  console.log("You choose poorly");

  currentIndex++;

  displayQuestion();
});
incorrectAnswerButtonCharlie.addEventListener("click", function () {
  console.log("You choose poorly");

  currentIndex++;

  displayQuestion();
});
// FUNCTION CALLS
displayQuestion();

// START PAGE TEXT?
// "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!",
