// Dom object
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("questions-container");
var questionElement = document.getElementById("questions");
var answerElementButton = document.getElementById("answer-buttons");
var Timer = document.getElementById("time");
var Point = document.getElementById("Points")
// varibles for timer and point
let Timer = 48;
let shuffledQuestion,currentQuestionindex

startButton.addEventListener("click", startgame)
nextButton.addEventListener("click", () => {
  currentQuestionindex++
  setNextQuestion()
})

function startgame() {
  startButton.classList.add('hide')
  shuffledQuestion = questions.sort(() => Math.random() - .5)
  currentQuestionindex = 0
  startclock();
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function startClock() {
  Timer.innerHTML = "Time Remaining: " + Timer;
  if (Timer <=0) {
    gameover()
  } else {
    Timer -=1;
    runningTimer = setTimeout(startClock, 1000);
  }
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestion[currentQuestionindex])
}
function showQuestion(questions) {
questionElement.innerText = questions.questions
questions.Answer.forEach(answer => {  
  const button = document.createElement("button")
  button.innerText = answer.text
  button.classList.add("btn");
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerElementButton.appendChild(button)
})
}
function resetState () {
  clearStatusClass( document.body)
  nextButton.classList.add('hide')
  while (answerElementButton.firstChild) {
    answerElementButton.removeChild(answerElementButton.firstChild)
  }
}
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusclass(document.body, correct)
  Array.from(answerElementButton.children).forEach(button => {
    setStatusclass(button, button.dataset.correct)
  })
  //look intothis
  if(shuffledQuestion.length > currentQuestionindex +1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
  }
}
//look in to this
function setStatusclass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add("wrong")
  }
}
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
//create question and choices,asnwer
var questions = [
  {
    questions: "What is the extension of java code files?",
    Answer: [
      { text: ".js", correct: false },
      { text: "txt", correct: false },
      { text: ".class", correct: false },
      { text: ".java", correct: true },
    ],
  },
  {
    questions: "What is printed (system.out.print(hello,\nworld!);?",
    Answer: [
      { text: "hello,\nworld", correct: false },
      { text: "hello,world", correct: false },
      { text: "Hello world", correct: false },
      { text: "None of above", correct: true },
    ],
  },
  {
    questions:
      "Which of the following variable declaration would Not compile in a java program?",
    Answer: [
      { text: "int var;", correct: false },
      { text: "int VAR;", correct: false },
      { text: "int var1", correct: false },
      { text: "int1_var;", correct: true },
    ],
  },
  {
    questions: "What is the size of boolean variable?",
    Answer: [
      { text: "8 bit", correct: false },
      { text: "16 bit", correct: true },
      { text: " 32 bit", correct: false },
      { text: "not precisely defined", correct: false },
    ],
  },
  {
    questions: "Which of the following is true about String?",
    Answer: [
      { text: "String is mutable", correct: false },
      { text: "String is immutable", correct: true },
      { text: "String is a data type", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    questions: "What is a correct syntaxx to output (Hello world) in java?",
    Answer: [
      { text: "System.out.print('hello world')", correct: true },
      { text: "echo('hello world')", correct: false },
      { text: "print('Hello World')", correct: false },
    ],
  },
];
