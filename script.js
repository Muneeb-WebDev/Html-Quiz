
const questions = [
  {
    question: "What is the full form of HTML?",
    options: [
      "Hyperlinks Text Mark Language",
      "Hyper Text Markup Language",
      "High Tech Marking Language",
      "Home Tool Markup Language"
    ],
    answer: 2
  },
  {
    question: "Which tag is used for the main heading?",
    options: ["<p>", "<heading>", "<h1>", "<h6>"],
    answer: 3
  },
  {
    question: "What happens when you give space between words in HTML?",
    options: [
      "Extra lines are added",
      "HTML removes all spaces",
      "Only one space is kept",
      "All spaces are shown as it is"
    ],
    answer: 3
  },
  {
    question: "What is the correct HTML tag for a paragraph?",
    options: ["<para>", "<p>", "<pg>", "<text>"],
    answer: 2
  },
  {
    question: "Which tag inserts an image?",
    options: ["<src>", "<img>", "<image>", "<media>"],
    answer: 2
  },
  {
    question: "What is the use of the href attribute?",
    options: ["To add image", "To link CSS", "To add hyperlink", "To align text"],
    answer: 3
  },
  {
    question: "Which attribute is used to change the text color?",
    options: ["class", "style", "id", "src"],
    answer: 2
  },
  {
    question: "Which tag is used to show superscript like 2<sup>2</sup>?",
    options: ["<sub>", "<upper>", "<super>", "<sup>"],
    answer: 3
  },
  {
   question: "Which tag is used to create a hyperlink?",
   options: ["<a>", "<link>", "<href>", "<url>"],
   answer: 1
  },
{
  question: "What is the correct syntax to add an image in HTML?",
  options: [
    "<img href='image.jpg'>",
    "<img link='image.jpg'>",
    "<img src='image.jpg'>",
    "<image src='image.jpg'>"
  ],
  answer: 3
},
{
  question: "Which attribute is used to provide a CSS class in HTML?",
  options: ["id", "style", "class", "css"],
  answer: 3
},
{
  question: "Which HTML tag is used to show emphasized text?",
  options: ["<em>", "<strong>", "<i>", "<b>"],
  answer: 1
},
{
  question: "What does the 'align' attribute do?",
  options: [
    "Changes font color",
    "Aligns the element on the page",
    "Inserts spacing",
    "Makes text bold"
  ],
  answer: 2
},
{
  question: "Which tag is used for inserting a horizontal line?",
  options: ["<hr>", "<line>", "<break>", "<border>"],
  answer: 1
},
{
  question: "Which tag is used to display a short quote?",
  options: ["<blockquote>", "<quote>", "<q>", "<ref>"],
  answer: 2
}
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.textContent = option;
    div.classList.add("option");
    div.onclick = () => selectOption(index);
    optionsEl.appendChild(div);
  });
}

function selectOption(index) {
  const correct = questions[current].answer;
  if (index === correct) score++;
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = score + " / " + questions.length;
}

function restartQuiz() {
  current = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  showQuestion();
}

nextBtn.onclick = () => {
  if (current < questions.length) {
    showQuestion();
  }
};

showQuestion();
