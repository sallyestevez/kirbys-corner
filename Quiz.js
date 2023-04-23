var q1Result;
var q2Result;
var q3Result;
var q4Result;
var q5Result;
var q6Result;
var q7Result;
var q8Result;
var q9Result;
var q10Result;
var q11Result;
var q12Result;
var q13Result;
var q14Result;
var q15Result;
var results;
var totalScore = 0;

document.addEventListener("DOMContentLoaded", function () {
  runButton = document.getElementById("runButton");
  outputText = document.getElementById("quizResult");

  runButton.addEventListener("click", QuizResult);
});

function QuizResult() {
  // hide submit button
  document.getElementById('runButton').style.display='none';
  // Question 1 math
  q1Result = Number($("input[name='question1']:checked").val());
  if (q1Result == 1) {
    totalScore += 1;
  }

  // Question 2 math
  q2Result = Number($("input[name='question2']:checked").val());
  if (q2Result == 1) {
    totalScore += 1;
  }

  // Question 3 math
  q3Result = Number($("input[name='question3']:checked").val());
  if (q3Result == 1) {
    totalScore += 1;
  }

  // Question 4 math
  q4Result = Number($("input[name='question4']:checked").val());
  if (q4Result == 1) {
    totalScore += 1;
  }

  // Question 5 math
  q5Result = Number($("input[name='question5']:checked").val());
  if (q5Result == 1) {
    totalScore += 1;
  }

  // Question 6 math
  q6Result = Number($("input[name='question6']:checked").val());
  if (q6Result == 1) {
    totalScore += 1;
  }

  // Question 7 math
  q7Result = Number($("input[name='question7']:checked").val());
  if (q7Result == 1) {
    totalScore += 1;
  }

  // Question 8 math
  q8Result = Number($("input[name='question8']:checked").val());
  if (q8Result == 1) {
    totalScore += 1;
  }

  // Question 9 math
  q9Result = Number($("input[name='question9']:checked").val());
  if (q9Result == 1) {
    totalScore += 1;
  }

  // Question 10 math
  q10Result = Number($("input[name='question10']:checked").val());
  if (q10Result == 1) {
    totalScore += 1;
  }

  // Question 11 math
  q11Result = Number($("input[name='question11']:checked").val());
  if (q11Result == 1) {
    totalScore += 1;
  }

  // Question 12 math
  q12Result = Number($("input[name='question12']:checked").val());
  if (q12Result == 1) {
    totalScore += 1;
  }

  // Question 13 math
  q13Result = Number($("input[name='question13']:checked").val());
  if (q13Result == 1) {
    totalScore += 1;
  }

  // Question 14 math
  q14Result = Number($("input[name='question14']:checked").val());
  if (q14Result == 1) {
    totalScore += 1;
  }

  // Question 15 math
  q15Result = Number($("input[name='question15']:checked").val());
  if (q15Result == 1) {
    totalScore += 1;
  }

  outputText.innerHTML = `<button onClick="window.location.reload();" class="ResultsButton">Retake Quiz!</button>`;

  if (totalScore === 0){
    return ($(".GetResults").append("<h3>You got " + totalScore + " points. I don't think you tried...</3>"));
  } else if (totalScore === 1){
    return $(".GetResults").append("<h3>" + totalScore + " point! I think you should play some Kirby games.</h3>");
  }  else if (totalScore > 1 && totalScore <= 5) {
    return $(".GetResults").append("<h3>" + totalScore + " points! I think you should play some Kirby games.</h3>");
  } else if (totalScore > 5 && totalScore <= 10) {
    return $(".GetResults").append("<h3>You got " + totalScore + " points! You should brush up on your Kirby lore!</h3>");
  } else if (totalScore > 10 && totalScore <= 14) {
    return $(".GetResults").append("<h3>So close! You got " + totalScore + " points!</h3>");
  } else if (totalScore === 15) {
    return $(".GetResults").append("<h3>" + " points! You're a Kirby expert!</h3>");
  }
  
}
