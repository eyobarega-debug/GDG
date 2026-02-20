document.getElementById("checkButton").addEventListener("click", function() {
  // Ask user for inputs
  let budget = parseFloat(prompt("Enter your budget amount:"));
  let itemPrice = parseFloat(prompt("Enter the item price:"));
  let savings = parseFloat(prompt("Enter your savings (optional, leave blank for 0):") || 0);

  // Use if/else to decide
  if ((budget + savings) >= itemPrice) {
    alert("You can afford this item! ✅");
  } else {
    alert("Sorry, you cannot afford this item. ❌");
  }
});