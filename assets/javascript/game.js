$(document).ready(function() {

//function to generate random numbers
var generateNumber = function(min,max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}

//starting variable
var totalScore = 0;
var wins = 0;
var losses = 0;
var randomNumber = generateNumber(19,120);

//print random number to page
$("#randomNumber").html(randomNumber);

//generate random numbers for each button
var button1 = generateNumber(1,12)
var button2 = generateNumber(1,12)
var button3 = generateNumber(1,12)
var button4 = generateNumber(1,12)

//when I click a button, add random number to total number
$("#button-1").click(function() {
	totalScore += button1;
	$("#totalScore").html(totalScore);
	console.log(button1);
	checkNumber();
});

$("#button-2").click(function() {
	totalScore += button2;
	$("#totalScore").html(totalScore);
	console.log(button2);
	checkNumber();
});

$("#button-3").click(function() {
	totalScore += button3;
	$("#totalScore").html(totalScore);
	console.log(button3);
	checkNumber();
});

$("#button-4").click(function() {
	totalScore += button4;
	$("#totalScore").html(totalScore);
	console.log(button4);
	checkNumber();
});

//check if total score matches the random number
var checkNumber = function() {
	if (totalScore === randomNumber) {
		resetGame();
		alert("You Win!");
		wins++;
	} else if (totalScore > randomNumber) {
		resetGame();
		alert ("You lose!");
		losses++;
	};
	printStats();
};

var printStats = function() {
	$("#wins").html(wins);
	$("#losses").html(losses);
}

//resets game
var resetGame = function() {
	randomNumber = generateNumber(19,120);
	totalScore = 0;

	//update stats
	$("#randomNumber").html(randomNumber);
	$("#totalScore").html(totalScore);

//generate random numbers for each button
	var button1 = generateNumber(1,12)
	var button2 = generateNumber(1,12)
	var button3 = generateNumber(1,12)
	var button4 = generateNumber(1,12)
}

});