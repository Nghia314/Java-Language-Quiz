var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("questions-container");
var questionElement = document.getElementById("question");
var answerElementButton = document.getElementById("answer-buttons");

let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener("click", startgame);

function startgame() {
  console.log("started");
  startButton.classList.add("hide");
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(shuffledQuestion[currentQuestionIndex]);
}
function showQuestion(questions) {
  questionElement.innerText = questions.questions
  questions.Answer.forEach(Answer =>{
    const button = document.createElement("button")
    button.innerText = asnwer.Choice
    button.classList.add("btn")
  })
}

function selectAnswer() {}

//create question and choices,asnwer
var questions = [
  {
    question: "What is the extension of java code files?",
    Answer: [
      { Choice: ".js", correct: false },
      { Choice: "txt", correct: false },
      { Choice: ".class", correct: false },
      { Choice: ".java", correct: true },
    ],
  },
  {
    question: "What is printed (system.out.print(hello,\nworld!);?",
    Answer: [
      { Choice: "hello,\nworld", correct: false },
      { Choice: "hello,world", correct: false },
      { Choice: "Hello world", correct: false },
      { Choice: "None of above", correct: true },
    ],
  },
  {
    question:
      "Which of the following variable declaration would Not compile in a java program?",
    Answer: [
      { Choice: "int var;", correct: false },
      { Choice: "int VAR;", correct: false },
      { Choice: "int var1", correct: false },
      { Choice: "int1_var;", correct: true },
    ],
  },
  {
    questions: "What is the size of boolean variable?",
    Answer: [
      { Choice: "8 bit", correct: false },
      { Choice: "16 bit", correct: true },
      { Choice: " 32 bit", correct: false },
      { Choice: "not precisely defined", correct: false },
    ],
  },
  {
    questions: "Which of the following is true about String?",
    Answer: [
      { Choice: "String is mutable", correct: false },
      { Choice: "String is immutable", correct: true },
      { Choice: "String is a data type", correct: false },
      { Choice: "None of the above", correct: false },
    ],
  },
  {
    questions: "What is a correct syntaxx to output (Hello world) in java?",
    Answer: [
      { Choice: "System.out.print('hello world')", correct: true },
      { Choice: "echo('hello world')", correct: false },
      { Choice: "print('Hello World')", correct: false },
    ],
  },
];
