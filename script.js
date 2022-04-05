
//create question and choices,asnwer
var questions = [
  {
    question: "What is the extension of java code files?",
      text: [".js","txt",".class",".java"],
      answer: ".java"
  },
  {
    question: "What is printed (system.out.print(hello,\nworld!);?",
      text: ["hello,\nworld", "hello,world","Hello world","None of above"],
      answer: "None of above"
  },
  {
    question:
      "Which of the following variable declaration would Not compile in a java program?",
      text: ["int var;", "int VAR;","int var1","int1_var;"],
      answer: "int1_var;"
  },
  {
    question: "What is the size of boolean variable?",
      text: ["8 bit","16 bit"," 32 bit","not precisely defined"],
      answer: "16 bit"
  },
  {
    question: "Which of the following is true about String?",
      text: ["String is mutable","String is immutable","String is a data type","None of the above"],
      answer: "String is immutable"
  },
  {
    question: "What is a correct syntaxx to output (Hello world) in java?",
      text: ["System.out.print('hello world')","echo('hello world')", "System.println('hello world')"],
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

function render(currentQuestionindex) {
  questionContainerElement.innerText = "";
  ulCreate.innerText = "";

  for (var i = 0; i < questions.length; i++) {

    var numquestions = questions[currentQuestionindex].question;
    var choices = questions[currentQuestionindex].text;
    questionContainerElement.textContent = numquestions;
  }
  choices.forEach(function(item) {
    var listchoice = document.createElement("li")
    listchoice.textContent = item;
    questionContainerElement.appendChild(ulCreate);
    ulCreate.appendChild(listchoice);
    listchoice.addEventListener("click", (compare));
  })
}

function compare(event) {
  var answer = event.target;
  if (answer.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    if(answer.textContent == questions[currentQuestionindex].answer) {
      point++;
      createDiv.textContent = "Congra!!! the answer is: " + questions(currentQuestionindex).answer;
    } else {
      timeleft = timeleft - penalty;
      createDiv.textContent = "Opps! the correct answer is: " + questions[currentQuestionindex].answer;
    }
  }
  currentQuestionindex++;

  if( currentQuestionindex >= questions.length) {
    GameOver();
    createDiv.textContent = "Quiz end!" + "" + "You got " + point + "/" + questions.length + "Correct!";
  } else {
    render(currentQuestionindex);
  }
  questionContainerElement.appendChild(createDiv);
}

function GameOver() {
  questionContainerElement.innerText="Game Over";
  timerRemaining.innerText="";

  
  var createh1= document.createElement("h1");
  createh1.setAttribute("id", "createh1");
  createh1.textContent ="Finish!"

  createh1.appendChild(createh1)

  var createp= document.createElement("p");
  createp.setAttribute("id", "p");


  createp.appendChild(createp)
  
  if(timeleft >= 0) {
    var timerRemaining= timeleft;
    var createp2 = document.createElement("p");
    clearInterval(secondInterval);
    createp.textContent="final score: "+ timerRemaining;

    questionContainerElement.appendChild(createp2)
  }
} 

var label = document.createElement("label")
label.setAttribute("type", "text");
label.textContent = "Your Initials: ";

questionContainerElement.appendChild(label);


var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "Initials");
input.textContent = "";

questionContainerElement.appendChild(input);

var submit = document.createElement("button");
submit.setAttribute("id", "Submit");
submit.setAttribute("type", "Submit");