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
			A: 'Happy Turtles Munching Lettuce',
			B: 'Hypertext Markup Language',
			C: 'Hypertime Machine Learning'
		},
		correctAnswer: 'B'
	},
	{
		question: "What does CSS stand for?",
		answers: {
			A: 'Cascading Super Savers',
			B: 'Cats Saving Saucers',
			C: 'Cascading Style Sheets'
		},
		correctAnswer: 'C'
	},
	{
		question: "What is the common coding practice of typing likeThis called?",
		answers: {
			A: 'Monkey Case',
			B: 'Camel Case',
			C: 'Apple Case'
		},
		correctAnswer: 'B'
	}
];

function showResults() {
	document.getElementById("timer").style.display = "none";
	document.getElementById("submit").style.display = "none";
	var answerContainers = quizContainer.querySelectorAll('.answers');
	var userAnswer = '';
	var numCorrect = 0;

	for (var i = 0; i < myQuestions.length; i++) {

		userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

		if (userAnswer === myQuestions[i].correctAnswer) {
			numCorrect++;

			answerContainers[i].style.color = 'lightgreen';
		} else {
			answerContainers[i].style.color = 'red';
		}
	}
	resultsContainer.style.color = "white";
	resultsContainer.innerHTML = 'You got ' + numCorrect + ' questions correct out of ' + myQuestions.length;
}

function startQuiz() {
	document.getElementById("start").style.display = "none";
	showQuestions();
	var count = 120;
	var interval = setInterval(function () {
		document.querySelector("#timer").innerHTML = `You have ${count} second(s) remaining`;
		count--;
		if (count === 0) {
			clearInterval(interval);
			alert("You're out of time!");
		}
	}, 1000);


	function showQuestions() {
		var output = [];
		var answers;

		for (var i = 0; i < myQuestions.length; i++) {

			answers = [];

			for (letter in myQuestions[i].answers) {

				answers.push(
					'<label>'
					+ '<input type="radio" name="question' + i + '" value="' + letter + '">'
					+ letter + ': '
					+ myQuestions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + myQuestions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}

}


document.querySelector("#start").addEventListener("click", startQuiz);
document.querySelector("#submit").addEventListener("click", showResults);
