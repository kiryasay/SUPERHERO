const API_KEY = '58800a88-49e6-4bce-acef-dd16c8f63c4e';
const API_URL_POPULAR =
	'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=6&order=RATING&type=ALL&ratingFrom=5&ratingTo=10&yearFrom=1000&yearTo=3000&page=5';
const API_URL_SEARCH =
	'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=';
const API_URL_MOVIE_DETAILS = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';

getMovies(API_URL_POPULAR);

async function getMovies(url) {
	const resp = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': API_KEY,
		},
	});
	const respData = await resp.json();
	showMovies(respData);
}

function getClassByRate(vote) {
	if (vote >= 7) {
		return 'green';
	} else if (vote > 5) {
		return 'orange';
	} else if (vote == 'null') {
		return 'white';
	} else {
		return 'red';
	}
}


function showMovies(data) {
	const moviesEl = document.querySelector('.movies');

	// Очищаем предыдущие фильмы
	document.querySelector('.movies').innerHTML = '';

	data.items.forEach((movie) => {
		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.innerHTML = `
				<div class="movie__cover-inner">
				<img
					src="${movie.posterUrlPreview}"
					class="movie__cover"
					alt="${movie.nameRu}"
				/>
				<div class="movie__cover--darkened"></div>
			</div>
			<div class="movie__info">
				<div class="movie__title">${(movie.nameRu != null) ? movie.nameRu : movie.nameOriginal}</div>
				<div class="movie__category">${movie.genres.map(
			(genre) => ` ${genre.genre}`
		)}</div>
				${(movie.ratingKinopoisk == 'null') ? 0 : movie.ratingKinopoisk &&
				`
				<div class="movie__average movie__average--${getClassByRate(
					movie.ratingKinopoisk
				)}">${(movie.ratingKinopoisk == 'null') ? 0 : movie.ratingKinopoisk}</div>
				`
			}
			</div>
				`;
		movieEl.addEventListener('click', () => openModal(movie.kinopoiskId));
		moviesEl.appendChild(movieEl);
	});
}

const form = document.querySelector('form');
const search = document.querySelector('.form-control');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
	if (search.value) {
		getMovies(apiSearchUrl);

		search.value = '';
	}
});

// Modal
const modalEl = document.querySelector('.modal');

async function openModal(id) {
	const resp = await fetch(API_URL_MOVIE_DETAILS + id, {
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': API_KEY,
		},
	});
	const respData = await resp.json();

	modalEl.classList.add('modal--show');
	document.body.classList.add('stop-scrolling');

	modalEl.innerHTML = `
		<div class="modal__card">
			<img class="modal__movie-backdrop" src="${respData.posterUrl}" alt="">
			<h2>
				<span class="modal__movie-title">${(respData.nameRu == null) ? respData.nameOriginal : respData.nameRu}</span>
				<span class="modal__movie-release-year"> - ${respData.year}</span>
			</h2>
			<ul class="modal__movie-info">
				<div class="loader"></div>
				<li class="modal__movie-genre">Жанр - ${respData.genres.map((el) => `<span>${el.genre}</span>`)}</li>
				${respData.filmLength ? `<li class="modal__movie-runtime">Время - ${respData.filmLength} минут</li>` : ''}
				<li >Сайт: <a class="modal__movie-site" href="${respData.webUrl}">${respData.webUrl}</a></li>
				<li class="modal__movie-overview">Описание - ${(respData.description == null) ? 'Отсутствует' : respData.description}</li>
			</ul>
			<button type="button" class="modal__button-close">Закрыть</button>
		</div>
	`;
	const btnClose = document.querySelector('.modal__button-close');
	btnClose.addEventListener('click', () => closeModal());
}

function closeModal() {
	modalEl.classList.remove('modal--show');
	document.body.classList.remove('stop-scrolling');
}

window.addEventListener('click', (e) => {
	if (e.target === modalEl) {
		closeModal();
	}
});

window.addEventListener('keydown', (e) => {
	if (e.keyCode === 27) {
		closeModal();
	}
});
