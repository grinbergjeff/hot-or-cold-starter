
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
	var guessNumber = 0;
	var winner = false;
	
	//Run Functions
	numberGenerator();
	newGame();
	userGuess();
});
//Allows users to start a new game
function newGame() {
	$('.new').click(function() {
	clearinputfield();
	numbergenerator();
	guessNumber = 0;
	$('#count').text(guessNumber);
	winner = false;
	})
}

//Function to generate a random number from 1 to 100
function numberGenerator() {
	var randomnumber = Math.floor((Math.random() * 101) + 1);
	console.log(randomnumber);
}
//Function clears input field (necessary for not reloading on new game
function clearinputfield() {
	$('#userGuess').val('');
}
//Function store guesses by clicking the guess button 
function userGuess() {
	$('#guessButton').click(function() {
		var clickedguess = $('#userGuess').val();
		if(clickedguess >= 1 && clickedguess <= 100 && clickedguess % 1 == 0) {
		displayguesses(clickedguess);	
		$('#userGuess').val('');
		guessNumber+= 1;
		$('#count').text(guessNumber);
		}
		else {
			alert('This is not a valid number!')
		}
	})	
}
//Function displays guesses
function displayguesses(userinput) {
	//display guess value
	$('.guessBox').append('<li>' + userinput + '</li>');
}