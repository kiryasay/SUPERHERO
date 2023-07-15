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
			{ text: 'Он был собран на дженозийской фабрике дроидов', correct: false },
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
			{ text: 'Эйла Секура', correct: false },
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
		question: 'Как Эзра Бриджер получил свой первый световой меч?',
		answers: [
			{ text: 'Он купил его на рынке Лотала', correct: false },
			{ text: 'Асока Тано подарила ему меч в качестве сувенира', correct: false },
			{ text: 'Он украл его во время службы в Империи', correct: false },
			{ text: 'Он собрал его из деталей, найденных экипажом "Призрака"', correct: true },
		]
	},
	{
		question: 'Кем был Гранд-инквизитор до того как получил свой титул?',
		answers: [
			{ text: 'Стражником в Храме Джедаев', correct: true },
			{ text: 'Он работал в секретном архиве на Корусанте', correct: false },
			{ text: 'Мусорщиком на Татуине', correct: false },
			{ text: 'Он был падаваном Императора Палпатина', correct: false },
		]
	},
	{
		question: 'Где была Асока Тано, когда Палпатин отдал приказ 66?',
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
		question: 'Абоба?',
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
		question: 'Как Питер Паркер стал Человеком-Пауком?',//done1
		answers: [
			{ text: 'Его укусил радиоактивный паук', correct: true },
			{ text: 'Его облучили радиацией', correct: false },
			{ text: 'Он получил способности из-за несчастного случая на работе', correct: false },
			{ text: 'Силы были у него с рождения', correct: false },
		]
	},
	{
		question: 'Кто смог уничтожить всю вселенную Marvel в одиночку?',//done2
		answers: [
			{ text: 'Dardevil', correct: false },
			{ text: 'Thor', correct: false },
			{ text: 'Iron Man', correct: false },
			{ text: 'Deadpool', correct: true },
		]
	},
	{
		question: 'Кто был первым носителем Венома?',//done3
		answers: [
			{ text: 'Стив Роджерс', correct: false },
			{ text: 'Эдди Брок', correct: false },
			{ text: 'Питер Паркер', correct: true },
			{ text: 'Норман Озборн', correct: false },
		]
	},
	{
		question: 'Как Ник Фьюри в киновселенной Marvel потерял глаз?',//done4
		answers: [
			{ text: 'Во время битвы с Капитан Марвел', correct: false },
			{ text: 'Его поцарапал пришелец в обличии кота', correct: true },
			{ text: 'Из-за несчастного случая в детстве', correct: false },
			{ text: 'На самом деле он прячет за повязкой здоровый глаз', correct: false },
		]
	},
	{
		question: 'Какой универститет закончил Тони Старк?',//done5
		answers: [
			{ text: 'M.I.T.', correct: true },
			{ text: 'Caltech', correct: false },
			{ text: 'Он самоучка', correct: false },
			{ text: 'Oxford', correct: false },
		]
	},
	{
		question: 'Кто скрывался за маской Совершенного Человека-Паука?',//done6
		answers: [
			{ text: 'Питер Паркер', correct: false },
			{ text: 'Уейд Уилсон', correct: false },
			{ text: 'Доктор Осьминог', correct: true },
			{ text: 'Майлз Моралес', correct: false },
		]
	},
	{
		question: 'Кем Веному приходится Карнаж?',//done7
		answers: [
			{ text: 'Дядей', correct: false },
			{ text: 'Они никак не связаны', correct: false },
			{ text: 'Братом', correct: false },
			{ text: 'Сыном', correct: true },
		]
	},
	{
		question: 'Как называется молот Тора?',//done8
		answers: [
			{ text: 'Мьёльнир', correct: true },
			{ text: 'Гром', correct: false },
			{ text: 'Сонм Богов', correct: false },
			{ text: 'Разрушитель', correct: false },
		]
	},
	{
		question: 'Какие три предмета, по словам Рокетs, ему нужны, чтобы сбежать из тюрьмы, в фильме Стражи Галактики?',//done9
		answers: [
			{ text: 'Нож, провода кабеля и микстейп Питера', correct: false },
			{ text: 'Защитная карта, батарея и протез ноги', correct: true },
			{ text: 'Бинокль, детонатор и протез ноги', correct: false },
			{ text: 'Карта безопасности, вилка и голеностопный монитор', correct: false },
		]
	},
	{
		question: 'Сколько существует Камней Бесконечности?',//done10
		answers: [
			{ text: '7', correct: false },
			{ text: '5', correct: false },
			{ text: '4', correct: false },
			{ text: '6', correct: true },
		]
	},
];

const questions8 = [ //marvel comics 2
	{
		question: 'В каком году Человек-паук впервые появился в комиксе?',//done1
		answers: [
			{ text: 'В 1963', correct: false },
			{ text: 'В 1972', correct: false },
			{ text: 'В 1962', correct: true },
			{ text: 'В 1958', correct: false },
		]
	},
	{
		question: 'В каком комиксе состоялось первое появление Человека-Паука?',//done2
		answers: [
			{ text: 'Marvel comics #1', correct: false },
			{ text: 'Action Comics #1', correct: false },
			{ text: 'Amazing Spider-man #1', correct: false },
			{ text: 'Amazing Fantasy #15', correct: true },
		]
	},
	{
		question: 'Какого из перечисленных псевдонимов у Человека-паука никогда не было?',//done3
		answers: [
			{ text: 'Аннигилятор', correct: true },
			{ text: 'Сумрак', correct: false },
			{ text: 'Продиджи', correct: false },
			{ text: 'Рикошет', correct: false },
		]
	},
	{
		question: 'Кто такой Бен Рейли (Алый Паук)?',//done4
		answers: [
			{ text: 'Сводный брат Майлза Моралеса', correct: false },
			{ text: 'Брат Стива Роджерса', correct: false },
			{ text: 'Клон Питера Паркера', correct: true },
			{ text: 'Отец Тони Старка', correct: false },
		]
	},
	{
		question: 'Какая была последняя фраза Гоблина (трилогия Сэма Рэйми)?',//done5
		answers: [
			{ text: 'Не говори Гарри', correct: true },
			{ text: 'Будь ты проклят Человек-Паук!', correct: false },
			{ text: 'Питер, я твой отец', correct: false },
			{ text: 'Это я убил твоего дядю', correct: false },
		]
	},
	{
		question: 'Выбери вариант продолжения фразы Отто Октавиуса (трилогия Сэма Рэйми)?',//done6
		answers: [
			{ text: 'Интеллект это не привилегия а дар, и он не должен служить на благо!', correct: false },
			{ text: 'Интеллект это привилегия а не дар, и он должен служить на благо!', correct: false },
			{ text: 'Интеллект это не привилегия а дар, и он должен служить на благо!', correct: true },
			{ text: 'Интеллект это дар, и он должен служить на благо', correct: false },
		]
	},
	{
		question: 'Как зовут дочь Питера Паркера?',//done7
		answers: [
			{ text: 'Филиция', correct: false },
			{ text: 'Мишель', correct: false },
			{ text: 'Гвен ', correct: false },
			{ text: 'Мэй ', correct: true },
		]
	},
	{
		question: 'В фильме «Человек-Паук: Возвращение домой» Паучок борется с бандой налетчиков в масках Мстителей. К чему отсылает эта сцена?',//done8
		answers: [
			{ text: 'К номеру 42 серии комиксов Ultimate Spider-Man, где один из грабителей носил маску Бэтмена.', correct: true },
			{ text: 'Ни к чему, оригинальная находка фильма', correct: false },
			{ text: 'Ко второй части «Железного человека», где ребенок носил похожую маску супергероя. ', correct: false },
			{ text: 'К номеру 649 серии комиксов The Amazing Spider-Man, где бандиты Кнгпина используют маски супергероев для ограбления лаборатории Horizon Labs', correct: false },
		]
	},
	{
		question: 'Кто был первым злодеем, с которым сталкивался Человек-паук?',//done 9
		answers: [
			{ text: 'Доктор Осьминог', correct: false },
			{ text: 'Хамелеон', correct: true },
			{ text: 'Носорог', correct: false },
			{ text: 'Зелёный гоблин', correct: false },
		]
	},
	{
		question: 'Чью свадьбу остановил Человек-паук?',//done10
		answers: [
			{ text: 'Гвен Стейсти и Майла Моралеса', correct: false },
			{ text: 'Тони Старка и Пеппер Потс', correct: false },
			{ text: 'Тети Мей и Доктора Осьминога', correct: true },
			{ text: 'Мери Джейн и Флеша Томпсона', correct: false },
		]
	},
];

const questions9 = [ //черепашки
	{
		question: 'В честь кого названы Черепаки Ниндзя?',//done1
		answers: [
			{ text: 'Самураев', correct: false },
			{ text: 'Ученых которые создали мутаген', correct: false },
			{ text: 'Художников Эпохи Возрождения', correct: true },
			{ text: 'Персонажей комиксов DC', correct: false },
		]
	},
	{
		question: 'Какой любимый супергерой у Черепашек Ниндзя?',//done2
		answers: [
			{ text: 'Бэтмэн', correct: true },
			{ text: 'Человек-Паук', correct: false },
			{ text: 'Супериен', correct: false },
			{ text: 'Халк', correct: false },
		]
	},
	{
		question: 'Где живут Черепашки Ниндзя?',//done3
		answers: [
			{ text: 'Под мостом', correct: false },
			{ text: 'В доме', correct: false },
			{ text: 'В квартире', correct: false },
			{ text: 'В канализации', correct: true },
		]
	},
	{
		question: 'Из какого измерения прибыли Кренги во вселенной Черепашек Ниндзя?',//done4
		answers: [
			{ text: 'Измерение игрик', correct: false },
			{ text: 'Измерение икс', correct: true },
			{ text: 'Измерение пси', correct: false },
			{ text: 'Альфа Центавра', correct: false },
		]
	},
	{
		question: 'Любимая еда Черепашек Ниндзя?',//done5
		answers: [
			{ text: 'Паста', correct: false },
			{ text: 'Роллы', correct: false },
			{ text: 'Пицца', correct: true },
			{ text: 'Бургеры', correct: false },
		]
	},
	{
		question: 'Как звали питомца Рафаэля из Черепашек Ниндзя?',//done6
		answers: [
			{ text: 'Спайк', correct: true },
			{ text: 'Гайк', correct: false },
			{ text: 'Кожеголовый', correct: false },
			{ text: 'Найк', correct: false },
		]
	},
	{
		question: 'Какое Настоящие имя у Сплинтера из Черепашек Ниндзя',//done7
		answers: [
			{ text: 'Акиро Йоши', correct: false },
			{ text: 'Хамато Йоши', correct: true },
			{ text: 'Ороку Саки', correct: false },
			{ text: 'Хамато Вива', correct: false },
		]
	},
	{
		question: 'Кто такой Шредер из Черепашек Ниндзя',//done8
		answers: [
			{ text: 'Человек', correct: true },
			{ text: 'Мутант', correct: false },
			{ text: 'Пришелец', correct: false },
			{ text: 'Робот', correct: false },
		]
	},
	{
		question: 'Любимая фраза Микеланджело из Черепашек Ниндзя',//done9
		answers: [
			{ text: 'Все вместе', correct: false },
			{ text: 'Кей О', correct: false },
			{ text: 'Погнали', correct: false },
			{ text: 'Буякаша', correct: true },
		]
	},
	{
		question: 'Какую фразу выкрикивают все Черепашки Ниндзя',//done10
		answers: [
			{ text: 'Аригато', correct: false },
			{ text: 'Кавабанга', correct: true },
			{ text: 'Погнали', correct: false },
			{ text: 'Сайонара', correct: false },
		]
	},
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

