// Fist version
// var userInput = "I like llamas and bees";
// var maxChar = 140;
// var wordsTyped = userInput.length;

// console.log("You have written " + userInput.length + " characters, you have " + String(maxChar - wordsTyped) + " characters left");

// Second version
var userInput = "I like llamas and bees";
var maxChar = 140;

var userInputUpper = userInput.toUpperCase();

console.log(userInputUpper)
console.log(userInput.toLowerCase())
console.log("You have written " + userInput.length + " characters, you have " + String(maxChar - userInput.length) + " characters left");