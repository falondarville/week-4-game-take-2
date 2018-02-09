$(document).ready(function() {

//user is given a random number at the beginning of the game
var randomNumber = Math.ceil(Math.random() * 100);
$("#randomNumber").html(randomNumber);
var totalScore = 0;
var wins = 0;
var losses = 0;

//generate random numbers for each button
var button1 = Math.ceil(Math.random() * 10);
var button2 = Math.ceil(Math.random() * 10);
var button3 = Math.ceil(Math.random() * 10);
var button4 = Math.ceil(Math.random() * 10);

//add countainer for total score
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

//issues with reset again

var resetGame = function() {
//user is given a random number at the beginning of the game
	var randomNumber = Math.ceil(Math.random() * 100);
	var totalScore = 0;

	//update stats
	$("#randomNumber").html(randomNumber);

//generate random numbers for each button
	var button1 = Math.ceil(Math.random() * 10);
	var button2 = Math.ceil(Math.random() * 10);
	var button3 = Math.ceil(Math.random() * 10);
	var button4 = Math.ceil(Math.random() * 10);
}

});