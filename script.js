// Dom Object
var startbutton = document.getElementById("#start");
var quiz = document.getElementById("#quiz");
var question = document.getElementById("#question");
var totaltime = document.getElementById("#timer")
var questionnumb = document.getElementById("#question-num");
var timeRemain  = document.getElementById("#time-remain");
var timeUse = document.getElementById("#time-use");
var choiceA = document.getElementById("#A");
var choiceB = document.getElementById("#B");
var choiceC = document.getElementById("#C");
var ChoiceD = document.getElementById("#D");
var Answer = document.getElementById("#Answer")

var progress = document.getElementById("progress")
var scoreContainer = document.getElementById("scoreContainer")

//varibles


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
let QuestionIndex = question.length -1;
let runningquestionIndex = 0;

function renderQuestion() {
  let q = question [runningquestionIndex];
  question.innerHTML = "<p>" + q.question+ "</p";
  ChoiceA.innerHTML = q.choiceA;
  ChoiceB.innerHTML = q.ChoiceB;
  ChoiceC.innerHTML = q.ChoiceC;
  ChoiceD.innerHTML = q.ChoiceD; 
}
function answerIscorrect() {
  document.getElementById(runningquestionIndex).style.backgroundColor ="green"
}
function answerIswrong() {
  document.getElementById(runningquestionIndex).style.backgroundColor ="red"
}

var questionTime = 10;
var timerwidth = 150;
let count = 0;
var timeProgressUnit = timerwidth / questionTime;

function timer() {
  if (count<= questionTime) {
    Counter.innerHTML = count;
    timegauge.style.width = timeProgressUnit * count + "px";
    count++;
  }
  else {
    count = 0;
    answerIswrong();
    if( runningquestionIndex < QuestionIndex) {
      runningquestionIndex++;
      renderQuestion();
    }
    else{
      clearInterval(TIMER);
      scorerender();
    }
  }
}
let TIMER=
setInterval(time,1000);

function checkAnswer(Answer) {
  if (question[runningquestionIndex].Answer == Answer){
    score++;
    answerIscorrect
  }
}
