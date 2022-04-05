
//create question and choices,asnwer
var questions = [
  {
    questions: "What is the extension of java code files?",
      text: ".js",
      text: "txt",
      text: ".class",
      text: ".java",
      answer: ".java"
  },
  {
    questions: "What is printed (system.out.print(hello,\nworld!);?",
      text: "hello,\nworld",
      text: "hello,world",
      text: "Hello world",
      text: "None of above",
      answer: "None of above"
  },
  {
    questions:
      "Which of the following variable declaration would Not compile in a java program?",
      text: "int var;",
      text: "int VAR;",
      text: "int var1",
      text: "int1_var;",
      answer: "int1_var;"
  },
  {
    questions: "What is the size of boolean variable?",
      text: "8 bit",
      text: "16 bit",
      text: " 32 bit",
      text: "not precisely defined",
      answer: "16 bit"
  },
  {
    questions: "Which of the following is true about String?",
      text: "String is mutable",
      text: "String is immutable",
      text: "String is a data type",
      text: "None of the above",
      answer: "String is immutable"
  },
  {
    questions: "What is a correct syntaxx to output (Hello world) in java?",
      text: "System.out.print('hello world')",
      text: "echo('hello world')",
      text: "System.println('hello world')",
      answer: "System.out.print('hello world')"
  },
];

var point = 0;
var currentQuestionindex = 0;

//declare variable
var container = document.getElementById("container")
var questionContainerElement = document.getElementById("questioncontainer")
var timer = document.getElementById("start-btn")
var timerRemaining = document.getElementById("timeRemaining")

var timeleft = 60;

var secondInterval = 0;

var penalty = 10;

var ulCreate = document.createElement("ul")

timer.addEventListener("click", function() {
  if ( secondInterval === 0) {
    secondInterval = setInterval(function () {
      timeleft--;
      timerRemaining.textContent= "Time Remaining: " + timeleft;

      if (timeleft <= 0) {
        clearInterval(secondInterval);
        GameOver();
        timerRemaining.textContent = "All Done";
      }
    },1000);
  }
  render(currentQuestionindex);
});

function render(currentQuestion) {
  questionContainerElement.innerText = "";
  ulCreate.innerText = "";

  for (var i = 0; i < questions.length; i++) {

    var questions = questions[currentQuestionindex].questions;
    var choices = questions[currentQuestionindex].text;
    questionContainerElement.textContent = questions;
  }
  choices.forEach(function(newitem) {
    var listchoice = document.createElement("li")
    listchoice.textContent = newitem;
    questionContainerElement.appendChild(ulCreate);
    ulCreate.appendChild(listchoice);
    listchoice.addEventListener("click", (compare));
  })
}

