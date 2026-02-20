// Beginner-friendly JavaScript for "Are You a Human?" test

document.getElementById("startTest").addEventListener("click", function() {
  
  // Initialize score
  let score = 0;

  // Question 1: Hours of sleep
  let sleep = parseInt(prompt("How many hours do you sleep per day?"));
  if (sleep >= 4) {
    score += 1;
  }

  // Question 2: Likes music
  let music = prompt("Do you enjoy music? (yes/no)").toLowerCase();
  if (music === "yes") {
    score += 1;
  }

  // Question 3: Gets tired
  let tired = prompt("Do you get tired? (yes/no)").toLowerCase();
  if (tired === "yes") {
    score += 1;
  }

  // Optional Question 4: Bonus human logic
  let math = parseInt(prompt("What is 2 + 2?"));
  if (math === 4) {
    score += 1;
  }

  // Show final result
  if (score >= 3) {
    alert("You are definitely human! ✅");
  } else if (score >= 1) {
    alert("Half human, half robot! 🤖");
  } else {
    alert("Robot detected! 🤖");
  }
});