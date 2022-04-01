//create question and choices,asnwer
var questions = [
   {
     Numb: 1,
     questions:"What is the extension of java code files?",
     A:".js",
     B:"txt",
     C:".class",
     D:".java",
     Answer: D
   },
   {
    Numb: 2,
    questions:"What is printed (system.out.print(hello,\nworld!);?",
    A:"hello,\nworld",
    B:"hello,world",
    C:"Hello world",
    D:"None of above",
    Answer: D
  },
  {
    Numb: 3,
    questions:"Which of the following variable declaration would Not compile in a java program?",
    A:"int var;",
    B:"int VAR;",
    C:"int var1",
    D:"int1_var;",
    Answer: D
  },
  {
    Numb: 4,
    questions:"What is the size of boolean variable?",
    A:"8 bit",
    B:"16 bit",
    C:" 32 bit",
    D:"not precisely defined",
    Answer: B
  },
  {
    Numb: 5,
    questions:"Which of the following is true about String?",
    A:"String is mutable",
    B:"String is immutable",
    C:"String is a data type",
    D:"None of the above",
    Answer: B
  },
  {
    Numb: 6,
    questions:"What is a correct syntaxx to output (Hello world) in java?",
    A:"System.out.print('hello world')",
    B:"echo('hello world')",
    C:"print('Hello World')",
    Answer: A
  },
];
 //varible for score
 var score = 0
 
 //create variable for element
 var time = document.querySelector("#timerArea")
 var questioncontain = document.querySelector("#question-container")
 var point = document.querySelector("#points")
 var timer = document.querySelector("#startbutton")
 var highestpoint = document.querySelector("#showscores")

 //second left is 8s per question
var secondleft = 48;
// hold time
var holdInterval = 0;
// penalty
var penalty = 10;

var ulCreate = document.createElement("ul");



timer.addEventListener("click", function() {

  if (holdInterval === 0) {
    holdInterval = setInterval(function(){
      secondleft--;
      time.textContent = "time: " + secondleft;

      if (secondleft<=0) {
        clearInterval(holdInterval);
        alldone();
        time.textContent = "time's up";

      }
      
    }, 1000);
  }
});


