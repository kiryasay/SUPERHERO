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
		question: 'Кто был учителем Квай-Гон Джинна?',
		answers: [
			{ text: 'Ки-Ади-Мунди', correct: false },
			{ text: 'Йода', correct: false },
			{ text: 'Мейс Винду', correct: false },
			{ text: 'Дуку', correct: true },
		]
	},
	{
		question: 'Где была Асока Тано, когда Палпатин отдал приказ 66?',
		answers: [
			{ text: 'На Мандалоре', correct: false },
			{ text: 'На республиканском звёздном разрушителе типа "Венатор"', correct: true },
			{ text: 'На руспубликанском фригате', correct: false },
			{ text: 'На Корусанте', correct: false },
		]
	},
	{
		question: 'Как погиб Дарт Мол?',
		answers: [
			{ text: 'Асока победила его в дуэли на Мандалоре', correct: false },
			{ text: 'Оби-ван победил его в дуэли на Набу', correct: false },
			{ text: 'Оби-ван победил его в дуэли на Татуине', correct: true },
			{ text: 'Его съел Сарлакк', correct: false },
		]
	},
	{
		question: 'Сколько языков знает C-3PO?',
		answers: [
			{ text: '7 000 000', correct: true },
			{ text: '6 000 000', correct: false },
			{ text: '6 465 765', correct: false },
			{ text: '9 620 342', correct: false },
		]
	},
	{
		question: 'На какой планете Гален Эрсо и его семья прятались от Империи?',
		answers: [
			{ text: 'Вобани', correct: false },
			{ text: 'Явин IV', correct: false },
			{ text: 'Иду', correct: false },
			{ text: 'Ла\'му', correct: true },
		]
	},
	{
		question: 'На какой планете находится замок Дарта Вейдера?',
		answers: [
			{ text: 'Мустафар', correct: true },
			{ text: 'Мортис', correct: false },
			{ text: 'Набу', correct: false },
			{ text: 'Эндор', correct: false },
		]
	},
	{
		question: 'Почему у Мейса Винду фиолетовый световой меч?',
		answers: [
			{ text: 'На съёмочной площадке не осталось мечей другого цвета', correct: false },
			{ text: 'Это остаётся в тайне', correct: false },
			{ text: 'Это была задумка Джорджа Лукаса (режиссера фильма)', correct: false },
			{ text: 'Такой цвет клинка выбрал актёр, игравший персонажа (Сэмюэл Л. Джексон)', correct: true },
		]
	},
	{
		question: 'Кто из клонов первым узнал о приказе 66? (до его объявления)',
		answers: [
			{ text: 'CT-5555, также известный как "Файвс"', correct: true },
			{ text: 'КС-7567, также известный как "Капитан Рекс", командир 501 легиона', correct: false },
			{ text: 'Никто из клонов не знал об этом', correct: false },
			{ text: 'КК-4142, также известный как "Лок"', correct: false },
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
			{ text: 'Он заключил контракт с демоном', correct: false },
		]
	},
	{
		question: 'Наруто - представитель какого клана?',
		answers: [
			{ text: 'Учиха', correct: false },
			{ text: 'Узумаки', correct: true },
			{ text: 'Инузука', correct: false },
			{ text: 'Сарутоби', correct: false },
		]
	},
	{
		question: 'Когда Наруто получил ранг Чунина?',
		answers: [
			{ text: 'После мировой войны шиноби', correct: false },
			{ text: 'Во время тренировок с Джирайей, до начала войны', correct: false },
			{ text: 'В начале мировой войны шиноби', correct: false },
			{ text: 'Он никогда не был чунином', correct: true },
		]
	},
	{
		question: 'Какой ранг получил Сайтама после теста в 1 сезоне?',
		answers: [
			{ text: 'Класс C', correct: true },
			{ text: 'Класс A', correct: false },
			{ text: 'Класс B', correct: false },
			{ text: 'Класс C', correct: false },
		]
	},
	{
		question: 'Где находился Гоку, когда он впервые превращался в Супер Сайяна?',
		answers: [
			{ text: 'Планета Намек', correct: false },
			{ text: 'Планета Земля', correct: false },
			{ text: 'Планета Веджета', correct: true },
			{ text: 'Планета Кайшин', correct: false },
		]
	},
	{
		question: 'Кем был Сайтама до того, как он стал героем?',
		answers: [
			{ text: 'Учеником старшей школы', correct: false },
			{ text: 'Бизнесменом', correct: true },
			{ text: 'Доставщиком еды', correct: false },
			{ text: 'Профессиональным атлетом', correct: false },
		]
	},
	{
		question: 'Как звали альтернативную версию Наруто в фильме "Наруто Фильм: Путь Ниндзя"?',
		answers: [
			{ text: 'Курама', correct: false },
			{ text: 'Саске', correct: false },
			{ text: 'Минато', correct: false },
			{ text: 'Менма', correct: true },
		]
	},
	{
		question: 'Кто сделал из Геноса киборга?',
		answers: [
			{ text: 'Доктор Генус', correct: false },
			{ text: 'Доктор Кусено', correct: true },
			{ text: 'Доктор Вайли', correct: false },
			{ text: 'Доктор Фукегао', correct: false },
		]
	},
	{
		question: 'В какую игру на консоли играл Кинг в аниме Ванпанчмен?',
		answers: [
			{ text: 'Супер Битва', correct: false },
			{ text: 'Милая милашка', correct: false },
			{ text: 'Сёстры Доки Доки', correct: true },
			{ text: 'Идеальное свидание', correct: false },
		]
	},
	{
		question: 'Кто был четвёртым хокаге?',
		answers: [
			{ text: 'Минато Намиказе', correct: true },
			{ text: 'Цунаде', correct: false },
			{ text: 'Хирузен Сарутоби', correct: false },
			{ text: 'Какаши Хатаке ', correct: false },
		]
	}
];

const questions4 = [ //аниме 2
	{
		question: 'Самый кассовый аниме фильм?',
		answers: [
			{ text: 'Твоё имя', correct: false },
			{ text: 'Истребитель демонов: Поезд «Бесконечный»', correct: true },
			{ text: 'Унесённые призраками', correct: false },
			{ text: 'Судзумэ, закрывающая двери	', correct: false },
		]
	},
	{
		question: 'Борос (из Ванпанчмена) - лидер какой группы?',
		answers: [
			{ text: 'Пришельцев завоевателей', correct: false },
			{ text: 'Ассоциации монстров', correct: false },
			{ text: 'Похитителей темной материи', correct: true },
			{ text: 'Альянса черной материи	', correct: false },
		]
	},
	{
		question: 'Какой класс получил Генос после прохождения теста в 1 сезоне аниме ванпанчмен?',
		answers: [
			{ text: 'S', correct: true },
			{ text: 'A', correct: false },
			{ text: 'C', correct: false },
			{ text: 'B', correct: false },
		]
	},
	{
		question: 'Во время битвы с Боросом Сайтама долетает до ...?',
		answers: [
			{ text: 'Америки', correct: false },
			{ text: 'Марса', correct: false },
			{ text: 'Луны', correct: true },
			{ text: 'Солнца', correct: false },
		]
	},
	{
		question: 'Почему Саске ушёл из деревни?',
		answers: [
			{ text: 'Чтобы стать сильнее Наруто', correct: false },
			{ text: 'Чтобы стать сильнее и убить Итачи', correct: true },
			{ text: 'Он хотел найти остальных выживших клана Учиха', correct: false },
			{ text: 'Ему не нравилось в Конохе', correct: false },
		]
	},
	{
		question: 'Почему Саске ушёл из деревни?',
		answers: [
			{ text: 'Чтобы стать сильнее Наруто', correct: false },
			{ text: 'Чтобы стать сильнее и убить Итачи', correct: true },
			{ text: 'Он хотел найти остальных выживших клана Учиха', correct: false },
			{ text: 'Ему не нравилось в Конохе', correct: false },
		]
	}
];

const questions5 = [ //dc comics 1
	{
		question: 'C кем из персонажей Marvel в первом кроссовере издателей сражался Супермен?',//done1
		answers: [
			{ text: 'Веном', correct: false },
			{ text: 'Халк', correct: false },
			{ text: 'Железный Человек', correct: false },
			{ text: 'Человек-Паук', correct: true },
		]
	},
	{
		question: 'Имя настоящего отца Супермена?',//done2
		answers: [
			{ text: 'Джон-эл', correct: false },
			{ text: 'Джордж-эл', correct: false },
			{ text: 'Джор-Эл', correct: true },
			{ text: 'Карл-эл', correct: false },
		]
	},
	{
		question: 'Кто носил мантию Робина, и кого убил Джокер в арке "Смерть в Семье"?',//done3
		answers: [
			{ text: 'Джейсон Тодд', correct: true },
			{ text: 'Дик Грейсон', correct: false },
			{ text: 'Дэмиан Уэйе', correct: false },
			{ text: 'Тим Дрейк', correct: false },
		]
	},
	{
		question: 'Кто из персонажей был членом, как "Мстителей", так и "Лиги Справедливости"?',//done4
		answers: [
			{ text: 'Супермен', correct: false },
			{ text: 'Бэтемен', correct: false },
			{ text: 'Соколиный Глаз', correct: true },
			{ text: 'Человек-Паук', correct: false },
		]
	},
	{
		question: 'Кличка пса Супермена?',//done5
		answers: [
			{ text: 'Плуто', correct: false },
			{ text: 'Крипто', correct: true },
			{ text: 'Супер', correct: false },
			{ text: 'Брюс', correct: false },
		]
	},
	{
		question: 'К какому цвету Зеленый Фонарь испытывает слабость?',//done6
		answers: [
			{ text: 'Черный', correct: false },
			{ text: 'Голубой', correct: false },
			{ text: 'Красный', correct: false },
			{ text: 'Желтый', correct: true },
		]
	},
	{
		question: 'Где Барри Аллен хранит свой костюм Флэша?',//done7
		answers: [
			{ text: 'Под одеждой', correct: false },
			{ text: 'В ботинках', correct: false },
			{ text: 'В кольце', correct: true },
			{ text: 'Дома', correct: false },
		]
	},
	{
		question: 'От какого издания произошло сокращение в названии DC Comics?',//done8
		answers: [
			{ text: 'Detective Comics', correct: true },
			{ text: 'Dark Comisc', correct: false },
			{ text: 'Doolitle Comics', correct: false },
			{ text: 'Dangerous Comics', correct: false },
		]
	},
	{
		question: 'Кто носит имя - Оракул в комиксах про Бэтмена?',//done9
		answers: [
			{ text: 'Лоис Лейн', correct: false },
			{ text: 'Джим Гордон', correct: false },
			{ text: 'Брюс Уейн', correct: false },
			{ text: 'Барбара Гордон', correct: true },
		]
	},
	{
		question: 'Кто является лидером команды "Юные Титаны"?',//done10
		answers: [
			{ text: 'Бэтмен', correct: false },
			{ text: 'Робин', correct: true },
			{ text: 'Киборг', correct: false },
			{ text: 'Флэш', correct: false },
		]
	},
];

const questions6 = [ //dc comics 2
	{
		question: 'Какой злодей скрывается за именем Эдвард Нигма?',//done1
		answers: [
			{ text: 'Джокер', correct: false },
			{ text: 'Мистер Фриз', correct: false },
			{ text: 'Убийца Крок', correct: false },
			{ text: 'Загадочник', correct: true },
		]
	},
	{
		question: 'Какой персонаж DC Comics первоначально не планировался в комиксах более одного раза?',//done2
		answers: [
			{ text: 'Бэтмен', correct: false },
			{ text: 'Супермен', correct: false },
			{ text: 'Джокер', correct: true },
			{ text: 'Загадочник', correct: false },
		]
	},
	{
		question: 'Кто является дворецким Бэтмена?',//done3
		answers: [
			{ text: 'Альфред Уйен', correct: false },
			{ text: 'Альфред Пенниуорт', correct: true },
			{ text: 'Дик Грейсон', correct: false },
			{ text: 'Демиан Уейн', correct: false },
		]
	},
	{
		question: 'Где родился Супермен?',//done4
		answers: [
			{ text: 'Криптон', correct: true },
			{ text: 'Квинс', correct: false },
			{ text: 'Марс', correct: false },
			{ text: 'Плутон', correct: false },
		]
	},
	{
		question: 'Кем Харли Квинн была до того, как стала суперзлодейкой и подружкой Джокера?',//done5
		answers: [
			{ text: 'Воровкой', correct: false },
			{ text: 'Актрисой', correct: false },
			{ text: 'Гимнасткой', correct: false },
			{ text: 'Психиатором', correct: true },
		]
	},
	{
		question: 'Кто скрывается за именем Двуликий?',//done6
		answers: [
			{ text: 'Хэл Джордан', correct: false },
			{ text: 'Барри Ален', correct: false },
			{ text: 'Харви Дент', correct: true },
			{ text: 'Брюс Уейн', correct: false },
		]
	},
	{
		question: 'Что означает на криптонианском логотип Супермена?',//done7
		answers: [
			{ text: 'Гармония', correct: false },
			{ text: 'Сила', correct: false },
			{ text: 'Справедливость', correct: false },
			{ text: 'Надежда', correct: true },
		]
	},
	{
		question: 'Кому удалось убить Супермена в арке "Смерть Супермена"?',//done8
		answers: [
			{ text: 'Думсдэй', correct: true },
			{ text: 'Дарксайд', correct: false },
			{ text: 'Бэтмен', correct: false },
			{ text: 'Лекс Лютор', correct: false },
		]
	},
	{
		question: 'Какой персонаж DC Comics появлялся во Вселенной чаще всего за историю издательства?',//done9
		answers: [
			{ text: 'Флэш', correct: false },
			{ text: 'Аквамен', correct: false },
			{ text: 'Бэтмен', correct: true },
			{ text: 'Супермен', correct: false },
		]
	},
	{
		question: 'Назовите имя оригинального Зеленого Фонаря?',//done10
		answers: [
			{ text: 'Барри Ален', correct: false },
			{ text: 'Кал эл', correct: false },
			{ text: 'Хэл Джордан', correct: true },
			{ text: 'Джор эл', correct: false },
		]
	},
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
		question: 'Кто придумал идею фильмов об Индиане Джонсе?',//done1
		answers: [
			{ text: 'Гильермо Дель Торо', correct: false },
			{ text: 'Стивен Спилберг', correct: false },
			{ text: 'Джордж Лукас', correct: true },
			{ text: 'Дэвид Линч', correct: false },
		]
	},
	{
		question: 'Какое настоящее имя Индианы Джонса?',//done2
		answers: [
			{ text: 'Генри', correct: true },
			{ text: 'Индиана', correct: false },
			{ text: 'Анри', correct: false },
			{ text: 'Абнер', correct: false },
		]
	},
	{
		question: 'Какое имя нельзя произносить?',//done3
		answers: [
			{ text: 'Альбус Дамблдор', correct: false },
			{ text: 'Гарри Поттер', correct: false },
			{ text: 'Волан-де-Морт', correct: true },
			{ text: 'Рон Уизли', correct: false },
		]
	},
	{
		question: 'Какой патронус у Гарри Поттера?',//done4
		answers: [
			{ text: 'Лось', correct: false },
			{ text: 'Персидский Кот', correct: false },
			{ text: 'Лань', correct: false },
			{ text: 'Олень', correct: true },
		]
	},
	{
		question: 'Какой из волшебников чистокровный?',//done5
		answers: [
			{ text: 'Невил Долгопупс', correct: true },
			{ text: 'Волан-де-Морт', correct: false },
			{ text: 'Альбус Дамблдор', correct: false },
			{ text: 'Римус Люпин', correct: false },
		]
	},
	{
		question: 'Какое заклинание использовал Гарри, чтобы убить лорда Волан-де-Морта?',//done6
		answers: [
			{ text: 'Экспекто патронум', correct: false },
			{ text: 'Accio', correct: false },
			{ text: 'Авада Кедавра', correct: true },
			{ text: 'Экспеллиармус', correct: false },
		]
	},
	{
		question: 'Настоящее имя Волан-де-Морта?',//done7
		answers: [
			{ text: 'Альбус Дамблдор', correct: false },
			{ text: 'Том Рэдл', correct: true },
			{ text: 'Сиверус Снейп', correct: false },
			{ text: 'Том Поттер', correct: false },
		]
	},
	{
		question: 'Какое зелье приносит удачу тому, кто его выпьет?',//done8
		answers: [
			{ text: 'Оборотное зелье', correct: false },
			{ text: 'Парацетамол', correct: false },
			{ text: 'Амортенция', correct: false },
			{ text: 'Феликс Фелицис', correct: true },
		]
	},
	{
		question: 'Сколько игроков в команде по квиддичу?',//done9
		answers: [
			{ text: '6', correct: false },
			{ text: '7', correct: true },
			{ text: '8', correct: false },
			{ text: '5', correct: false },
		]
	},
	{
		question: 'Что за волшебное существо Арагог?',//done10
		answers: [
			{ text: 'Гигантский паук-акромантул. ', correct: true },
			{ text: 'Василиск', correct: false },
			{ text: 'Грифон', correct: false },
			{ text: 'Оборотень', correct: false },
		]
	},
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

