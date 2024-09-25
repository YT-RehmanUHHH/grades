// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;

  document.getElementById("eng-letter").innerHTML = percent(engPercent);
  document.getElementById("soc-letter").innerHTML = percent(socPercent);
  document.getElementById("math-letter").innerHTML = percent(mathPercent);
  document.getElementById("sci-letter").innerHTML = percent(sciPercent);
}

function percent(percent1) {
  let letter;
  if (percent1 >= 80) {
    letter = "A";
  } else if (percent1 >= 65) {
    letter = "B";
  } else if (percent1 >= 55) {
    letter = "C";
  } else if (percent1 >= 50) {
    letter = "D";
  } else {
    letter = "F";
  }
  return letter;
}
