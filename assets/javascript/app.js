$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Which northern California mountain measures as the highest peak in the lower 48 states?',
	possibleAnswers : ['A. Mount Shasta',
				 'B. San Gorgino Mountain',
				 'C. Mount Whitney',
				 'D. Mount Williamson'],
	flags : [false, false, true, false],
	answer : 'C. Mount Whitney'
};

var q2 = {
	question: 'What northern California bay is considered the largest land locked harbor in the world?',
	possibleAnswers: ['A. Monterey Bay',
				 'B. San Francisco Bay',
				 'C. Grizzly Bay',
				 'D. San Rafael Bay'],
	flags : [false, true, false, false],
	answer : 'B. San Francisco Bay'
};

var q3 = {
	question : 'Which city is known for Monarch butterfly migrations?',
	possibleAnswers : ['A. Santa Barbara',
				 'B. Pacific Grove',
				 'C. Sacramento',
				 'D. San Diego'],
	flags : [false, true, false, false],
	answer : 'B. Pacific Grove'
};

var q4 = {
	question : 'What is the name of the most extensive system of caves in the Foothills region of the state?',
	possibleAnswers : ['A. California Caverns',
				 'B. Lake Shasta Caverns',
				 'C. Black Chasm Cavern',
				 'D. Crystal Cave'],
	flags : [true, false, false, false],
	answer : 'A. California Caverns'
};

var q5 = {
	question : 'Which of these towns sits atop the largest geothermal areas in the world?',
	possibleAnswers : ['A. Calistoga',
				 'B. Geyserville',
				 'C. Lassen',
				 'D. Coso Hot Springs'],
	flags : [false, true, false, false],
	answer : 'B. Geyserville'
};

var q6 = {
	question : 'Which of these mountains erupted less that 100 years ago?',
	possibleAnswers : ['A. Mount Lassen',
				 'B. Mount Shasta',
				 'C. Long Valley Caldera',
				 'D. Mount Rainier'],
	flags : [true, false, false, false],
	answer : 'A. Mount Lassen'
};

var q7 = {
	question : 'California raises more of which of the following birds than any other state?',
	possibleAnswers : ['A. Emu',
				 'B. Stork',
				 'C. Turkey',
				 'D. Ostrich'],
	flags : [false, false, true, false],
	answer : 'C. Turkey'
};

var q8 = {
	question : 'What is the name of that largest tree in the world, located in Sequia National Park?',
	possibleAnswers : ['A. Old Faithful',
				 'B. General Sherman',
				 'C. Big Branch',
				 'D. Woody'],
	flags : [false, true, false, false],
	answer : 'B. General Sherman'
};

var q9 = {
	question : 'What is the name of the largest municipal park west of the Mississippi river?',
	possibleAnswers : ['A. Griffith Park',
				 'B. Golden Gate Park',
				 'C. The Presidio',
				 'D. Bidwell Park'],
	flags : [false, false, false, true],
	answer : 'D. Bidwell Park'
};

var q10 = {
	question : 'Which wildlife refuge hosts the largest winter population of bald eagles in the continental United States?',
	possibleAnswers : ['A. Marin Island National Wildlife Refuge',
				  'B. Klamath Basin National Wildlife Refuge',
				  'C. Don Edwards San Francisco Bay National Wildlife Refuge',
				  'D. Antioch Dunes National Wildlife Refuge'],
	flags : [false, true, false, false],
	answer : 'B. Klamath Basin National Wildlife Refuge'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


});

