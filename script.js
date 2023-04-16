var runButton;
var outputText;

document.addEventListener("DOMContentLoaded", function () {
  runButton = document.getElementById("runButton");
  outputText = document.getElementById("factText");

  runButton.addEventListener("click", fact);
});

// 1. Write function called "fortune" that will take one argument (visitor's name)
// and prints a random "fortune teller style" fortune into an element of your page
function fact() {
  var facts = [
    `Kirby is popular in his own universe, but he doesn't let his fame get to his head.`,
    `Kirby is officially 20 centimeters, or 8 inches, tall.`,
    `Kirby is boneless. He also has no teeth.`,
    `Kirby's feet are not shoes.`,
    `Kirby's stomach is believed to be a black hole. After all, where does he put everything he eats?`,
    `Kirby has a special title in the Japanese versions of his games, which is Hoshi no Kābī,
        or "Kirby of the Stars." This is also the name of his theme song.`,
    `Tomatoes are Kirby's favorite food.`,
    `Kirby can't read.`,
    `Kirby even got his own anime! It ran in the early 2000s for a total of 100 episodes.`,
  ];

  var randomFact = facts[Math.floor(Math.random() * facts.length)];

  outputText.innerHTML = randomFact;

  // console.log(inputText);
}
