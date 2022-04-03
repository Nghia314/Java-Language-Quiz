// Dom Object
var QestionContaienr = document.getElementById("QestionContaienr");
var question = document.getElementById("question");
var Answer = document.getElementById("Answer");
var Timerplace = document.getElementById("Timerplace");
var scoreplace = document.getElementById("scoreplace");
var startButton = document.getElementById("startButton");
var showscore = document.getElementById("showscore");
//varibles
let Timer = 48;
let runningTimer;
let score = 0;
let qNumber ;
let finalScore;
let Max_Score = 6

//funtion to start game and see highscore
startButton.addEventListener("click",startGame);
showscore.addEventListener("click", displayScores);

function startGame() {
  startButton.classList.add("hide");
  scoreArea.classList.add("hide");
  AnswerButton.classList.remove("hide");
  qNumber=0;
  scoreplace.innerHTML= "";
  startClock();
  while (AnswerButton.firstChild);{
    AnswerButton.removeChild(AnswerButton.firstChild);
  }
  showQuestion(question[qNumber]);
}
//display question after hit start
function showQuestion(question) {
  question.innerHTML = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerHTML.add("btn");
    if (answer.Answer) {
      button.dataset.Answer = answer.Answer;
    }
    button.addEventListener("click", SelectAnswer);
    answersButton.appendChild(button);
  });
}
//create question and choices,asnwer
let questions = [
   { 
     question:"What is the extension of java code files?",
     ChoiceA:".js",
     ChoiceB:"txt",
     ChoiceC:".class",
     ChoiceD:".java",
     Answer: D
   },
   {
    question:"What is printed (system.out.print(hello,\nworld!);?",
    ChoiceA:"hello,\nworld",
    ChoiceB:"hello,world",
    ChoiceC:"Hello world",
    ChoiceD:"None of above",
    Answer: D
  },
  {
    question:"Which of the following variable declaration would Not compile in a java program?",
    ChoiceA:"int var;",
    ChoiceB:"int VAR;",
    ChoiceC:"int var1",
    ChoiceD:"int1_var;",
    Answer: D
  },
  {
    questions:"What is the size of boolean variable?",
    ChoiceA:"8 bit",
    ChoiceB:"16 bit",
    ChoiceC:" 32 bit",
    ChoiceD:"not precisely defined",
    Answer: B
  },
  {
    questions:"Which of the following is true about String?",
    ChoiceA:"String is mutable",
    ChoiceB:"String is immutable",
    ChoiceC:"String is a data type",
    ChoiceD:"None of the above",
    Answer: B
  },
  {
    questions:"What is a correct syntaxx to output (Hello world) in java?",
    ChoiceA:"System.out.print('hello world')",
    ChoiceB:"echo('hello world')",
    ChoiceC:"print('Hello World')",
    Answer: A
  },
];