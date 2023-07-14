/* eslint-disable indent */
const questions1 = [ //звёздные войны 1
	{
		question: 'Кто из актёров работал плотником до съёмок фильма "Звёздные Войны: Новая надежда"?',
		answers: [
			{ text: 'Харрисон Форд', correct: true },
			{ text: 'Марк Хэмилл', correct: false },
			{ text: 'Питер Кушинг', correct: false },
			{ text: 'Кэрри Фишер', correct: false },
		]
	},
	{
		question: 'Кто возглавлял 501 легион во времена Войн клонов?',
		answers: [
			{ text: 'Энакин Скайуокер', correct: true },
			{ text: 'Асока Тано', correct: false },
			{ text: 'Капитан Рекс', correct: false },
			{ text: 'Командир Коуди', correct: false },
		]
	},
	{
		question: 'Каково настоящее имя Малыша Йоды?',
		answers: [
			{ text: 'Йаддль', correct: false },
			{ text: 'Неизвестно', correct: false },
			{ text: 'Грогу', correct: true },
			{ text: 'Минч', correct: false },
		]
	},
	{
		question: 'Кто сделал C-3PO?',
		answers: [
			{ text: 'Неизвестно', correct: false },
			{ text: 'Лея Органа', correct: false },
			{ text: 'Люк Скайуокер', correct: false },
			{ text: 'Энакин Скайуокер', correct: true },
		]
	},
	{
		question: 'На какой планете Йода провёл свои последние годы?',
		answers: [
			{ text: 'Татуин', correct: false },
			{ text: 'Дагоба', correct: true },
			{ text: 'Хот', correct: false },
			{ text: 'Датомир', correct: false },
		]
	},
	{
		question: 'Джа-Джа Бинкс - персонаж из какой расы?',
		answers: [
			{ text: 'Гаморреанцы', correct: false },
			{ text: 'Твилеки', correct: false },
			{ text: 'Кел-доры', correct: false },
			{ text: 'Гунганы', correct: true },
		]
	},
	{
		question: 'Кто из перечисленных пережил приказ 66?',
		answers: [
			{ text: 'Луминара Ундули', correct: false },
			{ text: 'Кит Фисто', correct: false },
			{ text: 'Кэл Кестис', correct: true },
			{ text: 'Пло Кун', correct: false },
		]
	},
	{
		question: 'Кто убил Хана Соло?',
		answers: [
			{ text: 'Кайло рен', correct: true },
			{ text: 'Дарт Вейдер', correct: false },
			{ text: 'Капитан Фазма', correct: false },
			{ text: 'Боба Фетт', correct: false },
		]
	},
	{
		question: 'Дарт Тиранус был также известен как?',
		answers: [
			{ text: 'Гранд-инквизитор', correct: false },
			{ text: 'Генерал Гривус', correct: false },
			{ text: 'Император Палпатин', correct: false },
			{ text: 'Граф дуку', correct: true },
		]
	},
	{
		question: 'Кто, будучи мастером джедаем, приказал создать армию клонов?',
		answers: [
			{ text: 'Квай-Гон Джинн', correct: false },
			{ text: 'Сайфо-Диас', correct: true },
			{ text: 'Оби-ван Кеноби', correct: false },
			{ text: 'Ки-Ади-Мунди', correct: false },
		]
	}
];
const questions2 = [ //звёздные войны 2
	{
		question: 'Кто был первым злодеем, с которым сталкивался Человек-паук?',
		answers: [
			{ text: 'Доктор Осьминог', correct: false },
			{ text: 'Хамелеон', correct: true },
			{ text: 'Носорог', correct: false },
			{ text: 'Зелёный гоблин', correct: false },
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
		question: 'В какой серии комиксов впервые появился Человек-паук?',
		answers: [
			{ text: 'Amazing Fantasy', correct: true },
			{ text: 'Friendly Neighborhood Spider-Man', correct: false },
			{ text: 'Venom', correct: false },
			{ text: 'Secret War', correct: false },
		]
	}
];

const questions3 = [ //аниме 1
	{
		question: 'Как Ванпанчмен обрёл свою силу?',
		answers: [
			{ text: 'Украл силу у другого героя', correct: false },
			{ text: 'Молился день и ночь', correct: false },
			{ text: 'Он прошёл через множество изнурительных тренировок', correct: true },
			{ text: 'Неизвестно', correct: false },
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

const questions4 = [ //аниме 2
	{
		question: 'Как Ванпанчмен обрёл свою силу?',
		answers: [
			{ text: 'Украл силу у другого героя', correct: false },
			{ text: 'Молился день и ночь', correct: false },
			{ text: 'Он прошёл через множество изнурительных тренировок', correct: true },
			{ text: 'Неизвестно', correct: false },
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

const questions5 = [ //dc comics 1
	{
		question: 'Как Ванпанчмен обрёл свою силу?',
		answers: [
			{ text: 'Украл силу у другого героя', correct: false },
			{ text: 'Молился день и ночь', correct: false },
			{ text: 'Он прошёл через множество изнурительных тренировок', correct: true },
			{ text: 'Неизвестно', correct: false },
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

const questions6 = [ //dc comics 2
	{
		question: 'Как Ванпанчмен обрёл свою силу?',
		answers: [
			{ text: 'Украл силу у другого героя', correct: false },
			{ text: 'Молился день и ночь', correct: false },
			{ text: 'Он прошёл через множество изнурительных тренировок', correct: true },
			{ text: 'Неизвестно', correct: false },
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

const questions7 = [ //marvel comics 1
	{
		question: 'Как Ванпанчмен обрёл свою силу?',
		answers: [
			{ text: 'Украл силу у другого героя', correct: false },
			{ text: 'Молился день и ночь', correct: false },
			{ text: 'Он прошёл через множество изнурительных тренировок', correct: true },
			{ text: 'Неизвестно', correct: false },
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

const questions8 = [ //marvel comics 2
	{
		question: 'Как Ванпанчмен обрёл свою силу?',
		answers: [
			{ text: 'Украл силу у другого героя', correct: false },
			{ text: 'Молился день и ночь', correct: false },
			{ text: 'Он прошёл через множество изнурительных тренировок', correct: true },
			{ text: 'Неизвестно', correct: false },
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

const questions9 = [ //черепашки
	{
		question: 'Как Ванпанчмен обрёл свою силу?',
		answers: [
			{ text: 'Украл силу у другого героя', correct: false },
			{ text: 'Молился день и ночь', correct: false },
			{ text: 'Он прошёл через множество изнурительных тренировок', correct: true },
			{ text: 'Неизвестно', correct: false },
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

const questions10 = [ //random
	{
		question: 'Как Ванпанчмен обрёл свою силу?',
		answers: [
			{ text: 'Украл силу у другого героя', correct: false },
			{ text: 'Молился день и ночь', correct: false },
			{ text: 'Он прошёл через множество изнурительных тренировок', correct: true },
			{ text: 'Неизвестно', correct: false },
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
	var setup = randomInteger(1, 10);
	console.log(setup);
	let currentQuestion;
	switch (setup) {
		case 1: currentQuestion = questions1[currentQuestionIndex]; break;
		case 2: currentQuestion = questions2[currentQuestionIndex]; break;
		case 3: currentQuestion = questions3[currentQuestionIndex]; break;
		case 4: currentQuestion = questions4[currentQuestionIndex]; break;
		case 5: currentQuestion = questions5[currentQuestionIndex]; break;
		case 6: currentQuestion = questions6[currentQuestionIndex]; break;
		case 7: currentQuestion = questions7[currentQuestionIndex]; break;
		case 8: currentQuestion = questions8[currentQuestionIndex]; break;
		case 9: currentQuestion = questions9[currentQuestionIndex]; break;
		case 10: currentQuestion = questions10[currentQuestionIndex]; break;
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
	questionElement.innerHTML = `You scored ${score} out of ${questions1.length}!`;
	nextButton.innerHTML = 'Play Again';
	nextButton.style.display = 'block';
}

function handleNextButton() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions1.length) {
		showQuestion();
	}
	else {
		showScore();
	}
}

nextButton.addEventListener('click', () => {
	if (currentQuestionIndex < questions1.length) {
		handleNextButton();
	}
	else {
		startQuiz();
	}
});


startQuiz();

