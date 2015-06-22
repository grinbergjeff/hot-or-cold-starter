
$(document).ready(function(){	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);

  	});
	
/*Code Below by Jeffrey Grinberg: */
	
	//Initialize Variables
	guessNumber = 0; // globalized
	var winner = false;
	var randomnumber = 0; // number generated from numberGenerator()
	var clickedguess = 0; // user inputted guess
	var difference = 0; // difference between random number and guess
	
	//Run Functions
	numberGenerator();
	newGame();
	userGuess();
	//checkguess();
});
//Allows users to start a new game
function newGame() {
	$('.new').click(function() {
	clearinputfield();
	numberGenerator();
	guessNumber = 0;
	$('#count').text(guessNumber);
	winner = false;
	})
}

//Function to generate a random number from 1 to 100
function numberGenerator() {
	randomnumber = Math.floor((Math.random() * 101) + 1);
	console.log(randomnumber);
}
//Function clears input field (necessary for not reloading on new game
function clearinputfield() {
	$('#userGuess').val('');
}
//Function store guesses by clicking the guess button 
function userGuess() {
	$('#guessButton').click(function() {
		clickedguess = $('#userGuess').val();
		if(clickedguess >= 1 && clickedguess <= 100 && clickedguess % 1 == 0) {
			displayguesses(clickedguess);	
			$('#userGuess').val('');
			guessNumber++;
			$('#count').text(guessNumber);
			//Calculate the difference between randomnumber and clicked guess
			difference = Math.abs(randomnumber - clickedguess);
			console.log('Difference is ' + difference);
		}
		else {
			feedbackDisplay('This is not a valid number!');
		}
	})	
}
//Function displays guesses
function displayguesses(userinput) {
	//display guess value
	$('.guessBox').append('<li>' + userinput + '</li>');
}
//Function displays feedback
function feedbackDisplay(feedback) {
	$('#feedback').text(feedback);
}
//Function checks if you are hot or cold
/*function checkguess(variable) {
	difference = Math.abs(randomnumber - variable);
	console.log('Difference is ' + difference);
}*/