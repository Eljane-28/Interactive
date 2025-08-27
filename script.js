// Get DOM elements
const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Quiz data
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "What color do you get when you mix red and white?",
    options: ["Pink", "Purple", "Orange", "Gray"],
    correctAnswer: "Pink"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific"
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to render the current question
function renderQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionDiv.textContent = currentQuestion.question;
  optionsDiv.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      checkAnswer(option);
      if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
      } else {
        showResult();
      }
    });
    optionsDiv.appendChild(button);
  });

  // Enable/disable previous and next buttons
  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === quizQuestions.length - 1;
}

// Function to check the answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }
}

// Previous button
prevButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
});

// Next button
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showResult();
  }
});

// Function to show the quiz result
function showResult() {
  questionDiv.textContent = `Your Score: ${score}/${quizQuestions.length}`;
  optionsDiv.innerHTML = "";
  prevButton.disabled = true;
  nextButton.disabled = true;
}

// Initial rendering
renderQuestion();
