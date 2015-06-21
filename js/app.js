
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
	newGame();
});
//Allows users to start a new game
function newGame() {
	numbergenerator();
	
	
}

//Function to generate a random number from 1 to 100
function numbergenerator() {
	var randomnumber = Math.floor((Math.random() * 101) + 1);
}