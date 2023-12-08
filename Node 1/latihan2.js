const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Read quiz data from JSON file
const quizData = JSON.parse(fs.readFileSync("./quiz.json", "utf-8"));

let currentQuestion = 0;
let score = 0;

// Function to display a question
function displayQuestion(question) {
  console.log("Quiz Time!");
  console.log(`Question ${currentQuestion + 1}: ${question.question}`);

  for (let i = 0; i < question.options.length; i++) {
    console.log(`(${String.fromCharCode(65 + i)}) ${question.options[i]}`);
  }
}

// Function to get user's answer
async function getAnswer() {
  return new Promise((resolve) => {
    rl.question("Your answer: ", (answer) => {
      resolve(answer.trim().toUpperCase());
    });
  });
}

// Function to check the user's answer
function checkAnswer(answer) {
  const question = quizData.questions[currentQuestion];

  if (answer === question.correctAnswer) {
    score++;
    console.log("Correct!");
  } else {
    console.log(`Incorrect. The correct answer is ${question.correctAnswer}`);
  }
}

// Main quiz loop
async function startQuiz() {
  while (currentQuestion < quizData.questions.length) {
    displayQuestion(quizData.questions[currentQuestion]);
    const userAnswer = await getAnswer();
    checkAnswer(userAnswer);
    currentQuestion++;
  }

  console.log(`Your final score is: ${score}/${quizData.questions.length}`);
  rl.close();
}

// Start the quiz
startQuiz();
