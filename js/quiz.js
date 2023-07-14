const questions = [
	{
		question: 'Wich is largest animal',
		answers: [
			{ text: 'Shark', correct: false },
			{ text: 'Whale', correct: true },
			{ text: 'Giraffe', correct: false },
			{ text: 'Elephant', correct: false },
		]
	},
	{
		question: 'Spider man is',
		answers: [
			{ text: 'Peter', correct: true },
			{ text: 'Whale', correct: false },
			{ text: 'Giraffe', correct: false },
			{ text: 'Elephant', correct: false },
		]
	}
];
const questions2 = [
	{
		question: 'gergergergerg',
		answers: [
			{ text: 'Shark', correct: false },
			{ text: 'Whale', correct: true },
			{ text: 'Giraffe', correct: false },
			{ text: 'Elephant', correct: false },
		]
	},
	{
		question: 'ergergergergerger',
		answers: [
			{ text: 'Peter', correct: true },
			{ text: 'Whale', correct: false },
			{ text: 'Giraffe', correct: false },
			{ text: 'Elephant', correct: false },
		]
	}
];

function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}



const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = 'Next';
	showQuestion();
}

function showQuestion() {
	resetState();
	var setup = randomInteger(0, 1);
	let currentQuestion;
	switch (setup) {
		case 0: currentQuestion = questions[currentQuestionIndex]; break;
		case 1: currentQuestion = questions2[currentQuestionIndex]; break;
	}
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement('button');
		button.innerHTML = answer.text;
		button.classList.add('btn');
		answerButtons.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
	});
}

function resetState() {
	nextButton.style.display = 'none';
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === 'true';
	if (isCorrect) {
		selectedBtn.classList.add('correct');
		score++;
	}
	else {
		selectedBtn.classList.add('incorrect');
	}
	Array.from(answerButtons.children).forEach(button => {
		if (button.dataset.correct === 'true') {
			button.classList.add('correct');
		}
		button.disabled = true;
	});
	nextButton.style.display = 'block';
}

function showScore() {
	resetState();
	questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
	nextButton.innerHTML = 'Play Again';
	nextButton.style.display = 'block';
}

function handleNextButton() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	}
	else {
		showScore();
	}
}

nextButton.addEventListener('click', () => {
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	}
	else {
		startQuiz();
	}
});


startQuiz();

