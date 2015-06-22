
$(document).ready(function(){
/* Template Code Below */	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);

  	});
/*Template Code Above*/
	
/*Code by Jeffrey Grinberg below: */
	//Initialize Variables
	var guesscount = 0;
	//Run Functions
	newGame();
	enterguess();
	clickguess();
});
//Allows users to start a new game
function newGame() {
	$('.new').on('mousedown', '.new', function() {
	clearinputfield();
	numbergenerator();
	}
}

//Function to generate a random number from 1 to 100
function numbergenerator() {
	var randomnumber = Math.floor((Math.random() * 101) + 1);
}
//Function clears input field (necessary for not reloading on new game
function clearinputfield() {
	$('#userGuess').val('');
}
//Function store guesses by hitting enter
function enterguess() {
	$('#userGuess').keydown(function(ent) {
	if (ent.which == 13) {
		var enteredguess = $('#userGuess').val();
		if(enteredguess >= 1 || enteredguess <= 100 || enteredguess == 0) {
		displayguesses(enteredguess);
		//Reset input field back to placeholder			
		$(this).val('');
		guesscount += 1;
		}
		else {
			alert('This is not a valid number!')
		}
	}	
}
//Function store guesses by clicking the guess button 
function guessclick() {
	$('#guessButton').on('mousedown', '#guessButton', function() {
		var clickedguess = $('#userGuess').val();
		if(clickedguess >= 1 || clickedguess <= 100 || clickedguess == 0) {
		displayguesses(clickedguess);
		$('#userGuess').val('');
		guesscount += 1;
		}
		else {
			alert('This is not a valid number!')
		}
	})	
}
//Function displays guesses
function displayguesses(userinput) {
	//display guess count number
	$('#count').val(guesscount);
	//display guess value
	$('.guessBox').append('<li>' + userinput + '</li>');
}