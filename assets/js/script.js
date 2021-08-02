var quizContainer = document.querySelector("#quiz");
var resultsContainer = document.querySelector("#results");
var startButton = document.querySelector("#start");
var submitBtn = document.querySelector("submit");
var score = 0;
var timer = document.querySelector("#timer");
var quiz = document.querySelector("#quiz");
var myQuestions = [
	{
		question: "What does HTML stand for?",
		answers: {
			a: 'Happy Turtles Munching Lettuce',
			b: 'Hypertext Markup Language',
			c: 'Hypertime Machine Learning'
		},
		correctAnswer: 'b'
	},
	{
		question: "What does CSS stand for?",
		answers: {
			a: 'Cascading Super Savers',
			b: 'Cats Saving Saucers',
			c: 'Cascading Style Sheets'
		},
		correctAnswer: 'c'
	}
];

function startQuiz(){
    showQuestions();
    var count = 120;
    var interval = setInterval(function(){
  document.querySelector("#timer").innerHTML= count + " second(s) remaining";
  count--;
  if (count === 0){
    clearInterval(interval);
    alert("You're out of time!");
  }
}, 1000);


function showQuestions(){
  // code will go here
  document.querySelector("#quiz").innerHTML= myQuestions[0];
}

function showResults(){
  // code will go here
}



	// when user clicks submit, show results
	document.querySelector("#submit").addEventListener("click", showResults);
}






document.querySelector("#start").addEventListener("click", startQuiz);