/* eslint-disable indent */
const questions = [
	{
		question: 'Кто работал плотником до съёмок фильма "Звёздные Войны: Новая надежда"?',
		answers: [
			{ text: 'Харрисон Форд', correct: true },
			{ text: 'Марк Хэмилл', correct: false },
			{ text: 'Питер Кушинг', correct: false },
			{ text: 'Кэрри Фишер', correct: false },
		]
	},
	{
		question: 'В какой серии комиксов впервые появился Человек-паук?',
		answers: [
			{ text: 'Amazing Fantasy', correct: true },
			{ text: 'Friendly Neighborhood Spider-Man', correct: false },
			{ text: 'Venom', correct: false },
			{ text: 'Secret War', correct: false },
		]
	},
	{
		question: 'Кто был первым злодеем, с которым сталкивался Человек-паук?',
		answers: [
			{ text: 'Доктор Осьминог', correct: false },
			{ text: 'Хамелеон', correct: true },
			{ text: 'Носорог', correct: false },
			{ text: 'Зелёный гоблин', correct: false },
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
	},
	{
		question: 'Как Ванпанчмен обрёл свою силу?',
		answers: [
			{ text: 'Украл силу у другого героя', correct: false },
			{ text: 'Молился день и ночь', correct: false },
			{ text: 'Он прошёл через множество изнурительных тренировок', correct: true },
			{ text: 'Неизвестно', correct: false },
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
	resetState(); //убирает кнопку next и обновляет кнопки с вариантами ответа
	var setup = randomInteger(1, 4);
	console.log(setup);
	let currentQuestion;
	switch (setup) {
		case 1: currentQuestion = questions[currentQuestionIndex]; break;
		case 2: currentQuestion = questions2[currentQuestionIndex]; break;
		case 3: currentQuestion = questions[currentQuestionIndex]; break;
		case 4: currentQuestion = questions[currentQuestionIndex]; break;
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

