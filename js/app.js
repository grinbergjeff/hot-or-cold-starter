
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
	var randomnumber = 0; // number generated from numberGenerator()
	var clickedguess = 0; // user inputted guess
	var difference = 0; // difference between random number and guess
	
	//Run Functions
	numberGenerator();
	newGame();
	userGuess();
});
//Allows users to start a new game
function newGame() {
	$('.new').click(function() {
		feedbackDisplay('Make your Guess!');
		clearFields();
		numberGenerator();
		guessNumber = 0;
		$('#count').text(guessNumber);
	})
}

//Function to generate a random number from 1 to 100
function numberGenerator() {
	randomnumber = Math.floor((Math.random() * 101) + 1);
	console.log(randomnumber);
}
//Function clears input field (necessary for not reloading on new game
function clearFields() {
	$('#userGuess').val('');
	$('ul.guessBox li').remove();
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
			generateFeedback(difference, clickedguess, randomnumber);
			return false;
		}
		else if (clickedguess === '') {
				//Show the bubble message showing where to input
		}
		else {
			feedbackDisplay('This is not a valid number!');
			return false;
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
//Function generates feedback based on difference
function generateFeedback(variable1, variable2, variable3) {
	if (variable1 >= 50) {
		feedbackDisplay('Frozen!');
	}
	else if(variable1 >= 30 && variable1 < 50 && variable2 > variable3) {
		feedbackDisplay('Brrrr it is chilly! Guess lower!');
	}
	else if(variable1 >= 30 && variable1 < 50 && variable2 < variable3) {
		feedbackDisplay('Brrrr it is chilly! Guess higher!');
	}
	else if(variable1 >= 20 && variable1 <= 29 && variable2 > variable3) {
		feedbackDisplay('Nuetral! Guess lower!');
	}
	else if(variable1 >= 20 && variable1 <= 29 && variable2 < variable3) {
		feedbackDisplay('Neutral! Guess higher!');
	}
	else if(variable1 >= 10 && variable1 <= 19 && variable2 > variable3)  {
		feedbackDisplay('Warm! Guess lower!');
	}
	else if(variable1 >= 10 && variable1 <= 19 && variable2 < variable3)  {
		feedbackDisplay('Warm! Guess higher!');
	}
	else if(variable1 >= 5 && variable1 <= 9 && variable2 > variable3) {
		feedbackDisplay('Need an AC here! Guess lower');
	}
	else if(variable1 >= 5 && variable1 <= 9 && variable2 < variable3) {
		feedbackDisplay('Need an AC here! Guess higher!');
	}
	else if(variable1 >= 1 && variable1 <= 4 && variable2 > variable3) {
		feedbackDisplay("I'm melting! Aghhh! Guess lower!");
	}
	else if(variable1 >= 1 && variable1 <= 4 && variable2 < variable3) {
		feedbackDisplay("I'm melting! Aghhh! Guess higher!");
	}
	else {
		feedbackDisplay('You won! Start a new game!');
	}
}