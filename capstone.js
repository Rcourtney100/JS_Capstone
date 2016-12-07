// To demonstrate understanding of front end web development.

// Assignment:

// This project is your time to shine and showcase your skills in front end web development. 

// A single page app allowing the user to play a simple game of Wheel of Fortune. 
// Use JavaScript to give the user a word to guess letter by letter. Will the user lose points as they 
// guess wrong? Will they try to beat the clock? Do they only get 3 guesses? You decide! Make it clear to 
// the user what their goal is. The app should be styled with simple but modern design trends and fun for 
// the user. Remember keep your user engaged.

// Grading criteria:

// Single page app

// Game works in Wheel of Fortune style
// Design and UI/UX carefully though and through
// JS throws no errors
// User can play several rounds of new words
// Hints are given to direct the user what the word is related to
// HTML/CSS is properly formatted
Capstone = {};
Capstone.wordArray = [];
Capstone.wordUsedArray =[];

Capstone.Lives = 9;
Capstone.NumInWordBank = Words.length;
Capstone.word = "test";
Capstone.wordUsed="";


var Capstone.pullWord = function(){
	Capstone.word = Words.List[(Math.floor(Math.random()*Capstone.NumInWordBank))];
}

var Capstone.setUnderLine = function(){
	Capstone.PullWord();
	for(i=0; i<Capstone.Word.length; i++){
		Capstone.wordArray[i] = Capstone.word.charAt(i);
		Capstone.wordUsedArray[i] = "_";
	}
	Capstone.wordUsed = Capstone.wordUsedArray.join("");
	document.getElementById("word").innerhtml = Capstone.wordUsed;

}

Capstone.setUnderLine = function(){
	Capstone.pullWord();
	for(i=0; i<Capston.word.length; i++){
		Capstone.wordArray[i]=Capstone.word.charAt(i);
		Capstone.wordArray[i] = "_";
	}
	Capstone.wordUsed = Capstone.wordUsedArray.join("");
	document.getElementById("word").innerhtml = Capstone.wordUsed;

}

Capstone.updateLetter = function(letter){
	Capstone.changes = 0;
	for(i=0; i<Capstone.word.length; i++){
		Capstone.wordArray[i] = Capstone.word.charAt(i);
		if(Capstone.word.charAt(i) == letter){
			Capstone.wordUsedArray[i] == letter;
			Capstone.Changes += 1;
		}
	}
}
if(Capstone.Changes<1){
	Capstone.Lives -=1;
	document.getElementById("lives").innerhtml = Capstone.Lives;
}

Capstone.wordUsed = Capstone.wordUsedArray.join("");
document.getElementById("word").innerhtml = Capstone.wordUsed;

Capstone.word1 = Capstone.wordArray.join("");
Capstone.word2 = Capstone.wordArray.join("");

if(Capstone.word1 == Capstone.word2){
	alert("You Win");
	window.location.reload();
}

if(Capstone.Lives < 1){
	document.getElementById("word").innerhtml == Capstone.word;
	alert("You Lose")
}

Capstone.pullWord();
Capstone.setUnderLine();





