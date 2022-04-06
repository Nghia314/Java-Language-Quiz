
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
//set point and question index
let point = 0;
var currentQuestionindex = 0;

//declare variable
var container = document.getElementById("container")
var questionContainerElement = document.getElementById("questioncontainer")
var timer = document.getElementById("start-btn")
var timerRemaining = document.getElementById("timeRemaining")
// each question is 10s
var timeleft = 60;
// let secondInterval to hold time
var secondInterval = 0;
// time will minus on user if they get it wrong
var penalty = 10;

var ulCreate = document.createElement("ul")
//function the start button when it click it, and start the time as well
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
  // have the question appear a cross the site
  render(currentQuestionindex);
});

function render(currentQuestionindex) {
  questionContainerElement.innerText = "";
  ulCreate.innerText = "";
// make the render(currentQuestionindex) going through all six question
  for (var i = 0; i < questions.length; i++) {
// reveal the question
    var numquestions = questions[currentQuestionindex].question;
    // reveal the choices the user gonna have for every question
    var choices = questions[currentQuestionindex].text;
    questionContainerElement.textContent = numquestions;
  }
  // set the choices gonna change fit to the question
  choices.forEach(function (item) {
    // create list of choices
    var listchoice = document.createElement("li")
    listchoice.textContent = item;
    questionContainerElement.appendChild(ulCreate);
    ulCreate.appendChild(listchoice);
    listchoice.addEventListener("click", (compare));
  })
}
// compare the user choices with answer
function compare(event) {
  var answerelement = event.target;

  if (answerelement.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    //if the user answer it right the point will go up
    if(answerelement.textContent == questions[currentQuestionindex].answer) {
      point++;
      createDiv.textContent = "Congra!!! the answer is: " + questions[currentQuestionindex].answer;
      console.log("plus 1")
      //  the user answer it wrong point will go down
    } else {
      timeleft = timeleft - penalty;
      createDiv.textContent = "Opps! the correct answer is: " + questions[currentQuestionindex].answer;
      console.log("Minus 10s")
    }
  }
  currentQuestionindex++;
// if the user time is less than the timeleft or finish the text iis game over
  if( currentQuestionindex >= questions.length) {
    GameOver();
    createDiv.textContent = "Quiz end!" + " " + "You got " + point + "/" + questions.length + "Correct!";
  } else {
    render(currentQuestionindex);
  }
  questionContainerElement.appendChild(createDiv);
}
// function Game Over
function GameOver() {
  questionContainerElement.innerText="Game Over";
  timerRemaining.innerText="";

  
  var createh1= document.createElement("h1");
  createh1.setAttribute("id", "createh1");
  createh1.textContent ="Finish!" 

  createh1.appendChild(createh1)

  var createp= document.createElement("p");
  createp.setAttribute("id", "createp");


  createp.appendChild(createp)
  
  if (timeleft >= 0) {
    var timerRemain= timeleft;
    var createp2 = document.createElement("p");
    clearInterval(secondInterval);
    createp.textContent="final score: "+ timerRemain;

    questionContainerElement.appendChild(createp2)
  }
}
// create a placeholder for initial and submit button
var label = document.createElement("label")
label.setAttribute("type", "label");
label.textContent = "Your Initials: ";

questionContainerElement.appendChild(label);


var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "Initials");
input.textContent = "";

questionContainerElement.appendChild(input);

var submit = document.createElement("button");
submit.setAttribute("id", "Submit");
submit.setAttribute("type", "submit");
submit.textContent = "Submit";

questionContainerElement.appendChild(submit);

submit.addEventListener("click", function() {
  var Initials= input.value;

  if (Initials === null) {
    console.log("No value entered!");
  } else {
    var finalscore= {
      Initials: Initials,
      point: timerRemain
    }
    var allscores = localStorage.getItem("allscores");
    if (allscores === null) {
      allscores = [];
    } else {
      allscores = JSON.parse(allscores);
    }
    allscores.push(finalscore);
    var newscore= JSON.stringify(allscores);
    localStorage.setItem("allscores", newscore);

    window.location.replace("./score.html")
  }
});