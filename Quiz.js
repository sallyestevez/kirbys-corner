// Code taken from: https://www.sitepoint.com/simple-javascript-quiz/

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function CreateQuiz() {
  // variable to store HTML output
  const output = [];

  // for each question
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // for each available answer
    for (letter in currentQuestion.answers) {
      // add an HTML radio button
      answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // combine output list into one HTML string and add to page
  quizContainer.innerHTML = output.join("");
}

function GetResults() {}

CreateQuiz();

submitButton.addEventListener("click", GetResults);

const myQuestions = [
  {
    question: `Question 1: Who does Star Dream take control over?`,
    answers: {
      a: `Meta Knight`,
      b: `Haltmann`,
      c: `Kirby`,
      d: `Daroach`,
    },
    correctAnswer: "b",
  },
  {
    question: `Question 2: How long did Kirby: Right Back At Ya! run for?`,
    answers: {
      a: `56 episodes`,
      b: `10 episodes`,
      c: `24 episodes`,
      d: `100 episodes`,
    },
    correctAnswer: "d",
  },
  {
    question: `Question 3: Which of the following is one of Kirby's skills?`,
    answers: {
      a: `Interlink`,
      b: `Hover`,
      c: `Mach Tornado`,
      d: `Spin Dash`,
    },
    correctAnswer: "b",
  },
  {
    question: `Question 4: How tall is Kirby?`,
    answers: {
      a: `4 inches`,
      b: `8 feet`,
      c: `8 inches`,
      d: `4 feet`,
    },
    correctAnswer: "c",
  },
  {
    question: `Question 5: What is Kirby's catchphrase?`,
    answers: {
      a: `"Hiiiiii!"`,
      b: `"Bye!!!"`,
      c: `"Oof."`,
      d: `"Lightning Buster!`,
    },
    correctAnswer: "a",
  },
  {
    question: `Question 6: In Kirby Squeak Squad, what kind of cake is Kirby looking for?`,
    answers: {
      a: `strawberry shortcake`,
      b: `cheesecake`,
      c: `double chocolate`,
      d: `red velvet`,
    },
    correctAnswer: "a",
  },
  {
    question: `Question 7: What is Haltmann's full name?`,
    answers: {
      a: `it's just 'Haltmann'`,
      b: `Max Profitt Haltmann`,
      c: `Maxx Profit Haltmann`,
      d: `Min Profitt Haltmann`,
    },
    correctAnswer: "b",
  },
  {
    question: `Question 8: Where does Kirby live?`,
    answers: {
      a: `Shiver Star`,
      b: `Aionios`,
      c: `New Donk City`,
      d: `Pop Star`,
    },
    correctAnswer: "d",
  },
  {
    question: `Question 9: How many characters are playable in Kirby Star Allies?`,
    answers: {
      a: `38`,
      b: `25`,
      c: `6`,
      d: `13`,
    },
    correctAnswer: "a",
  },
  {
    question: `Question 10: Who are the Squeakers?`,
    answers: {
      a: `leaders of the Squeaks`,
      b: `final boss of Kirby Squeak Squad`,
      c: `random enemies`,
      d: `henchmen of the Squeaks`,
    },
    correctAnswer: "d",
  },
  {
    question: `Question 11: In which game were Copy Abilities first introduced?`,
    answers: {
      a: `Kirby's Dream Land`,
      b: `Kirby's Adventure`,
      c: `Kirby Squeak Squad`,
      d: `Kirby's Dream Land 2`,
    },
    correctAnswer: "b",
  },
  {
    question: `Question 12: Out of these, who is not Kirby's friend?`,
    answers: {
      a: `Magolor`,
      b: `King Dedede`,
      c: `Dark Nebula`,
      d: `Daroach`,
    },
    correctAnswer: "c",
  },
  {
    question: `Question 13: What is Kirby's favorite food?`,
    answers: {
      a: `chicken`,
      b: `cake`,
      c: `tomatoes`,
      d: `apples`,
    },
    correctAnswer: "c",
  },
  {
    question: `Question 14: What is the name of Kirby's theme song?`,
    answers: {
      a: `Pink Ball Activate!`,
      b: `Electro! Kirby`,
      c: `Space Explorer`,
      d: `Kirby of the Stars`,
    },
    correctAnswer: "d",
  },
  {
    question: `Question 15: In which game did Kirby debut?`,
    answers: {
      a: `Kirby Air Ride`,
      b: `Kirby's Return to Dream Land`,
      c: `Kirby's Dream Land`,
      d: `Kirby Super Star`,
    },
    correctAnswer: "c",
  },
];
