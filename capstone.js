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
$(document).ready(function(){

var word = {
	secretWord: "",
	allLetters:[],
	correctLetters:[],
	wrongLetters: [],
	revealSecretWord: "",
	hintLetter:"",
	wordList :["newspaper","pigskin","baseball","seinfeld", "television", "soccer","rudolph", "terminator","broccoli","Santa"]
}

 var getSecretWord = function(){
	this.revealSecretWord = "";
	this.secretWord = _.shuffle(this.wordList)[0];
	for (var i = 0; i < this.secretWord.length; i++){
		this.revealSecretWord += ("_");
}
	document.getElementById("answer").innerHTML=word.revealSecretWord;

},

// $.getJSON('answers.json', function(data){
// 	for (i=0; i<data.answerList.length; i++){
// 		questionBank[i]= new Array;
// 		questionBank[i][0]= data.answerList[i].word;
// 		questionBank[i][1]= data.answerList[i].hint;
// 	}
// 	alert(questionBank);
// }) //getJSON

});



