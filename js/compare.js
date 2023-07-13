const allTabsBody = document.querySelectorAll('.tab-body-single'); //powerstats biography appearance connections
const allTabsHead = document.querySelectorAll('.tab-head-single'); //buttons for hero descr
const searchForm = document.querySelector('.app-header-search'); //search hero
let searchList = document.getElementById('search-list'); //search dropdown
const modal = document.querySelector('#modal');

let activeTab = 1, allData;

const init = () => {
	showActiveTabBody();
};


const showActiveTabBody = () => {
	hideAllTabBody();
	allTabsBody[activeTab - 1].classList.add('show-tab'); //active content
};

const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));

// event listeners
window.addEventListener('DOMContentLoaded', () => init());

// button event listeners
allTabsHead.forEach(singleTabHead => {
	singleTabHead.addEventListener('click', () => {
		hideAllTabHead();
		activeTab = singleTabHead.dataset.id;
		showActiveTabBody();
	});
});

const getInputValue = (event) => {
	event.preventDefault();
	let searchText = searchForm.search.value;
	fetchAllSuperHero(searchText);
};

// search form submission
searchForm.addEventListener('submit', getInputValue);

// api key => 106808315798405
const fetchAllSuperHero = async (searchText) => {
	let url = `https://www.superheroapi.com/api.php/106808315798405/search/${searchText}`;
	try {
		const response = await fetch(url);
		allData = await response.json();
		if (allData.response === 'success') {
			console.log('allData from fetchAllSuperHero:');
			console.log(allData);
			showSearchList(allData.results);
		}
		else {
			showSearchList(undefined);
		}
	} catch (error) {
		console.log(error);
	}
};

const showSearchList = (data) => {
	searchList.innerHTML = '';
	data.forEach(dataItem => {
		const divElem = document.createElement('div');
		divElem.classList.add('search-list-item');
		divElem.innerHTML = `
				<div data-id = "${dataItem.id}" class = "searchListItem-wrapper">
					<img data-id = "${dataItem.id}" src = "${dataItem.image.url ? dataItem.image.url : ''}" alt = "">
					<p data-id = "${dataItem.id}">${dataItem.name}</p>
				</div>
		`;
		searchList.appendChild(divElem);
	});
};

searchForm.search.addEventListener('keyup', () => {
	if (searchForm.search.value.length > 1) {
		fetchAllSuperHero(searchForm.search.value);
	} else {
		searchList.innerHTML = '';
	}
});

searchList.addEventListener('click', (event) => {
	let searchId = event.target.dataset.id;
	console.log(allData);
	let singleData = allData.results.filter(singleData => {
		console.log('searchId: ' + searchId);
		console.log('singleData.id: ' + singleData.id);
		return searchId === singleData.id;
	});
	showSuperheroDetails(singleData);
	searchList.innerHTML = '';
});

const showSuperheroDetails = (data) => {
	console.log(data);
	document.querySelector('.app-body-content-thumbnail').innerHTML = `
		<img src = "${data[0].image.url}" alt="" class= "thumbnail">
	`;
	document.querySelector('.name').textContent = data[0].name;

	document.querySelector('.powerstats').innerHTML = `
	<li>
		<div>
			<div class="stats_icon">
				<i class="fa-solid fa-brain"></i>
			</div>
			<span>Интеллект</span>
		</div>
		<span>${data[0].powerstats.intelligence}</span>
	</li>
	<li>
		<div>
			<div class="stats_icon">
				<i class="fa-solid fa-dumbbell"></i>
			</div>
			<span>Сила</span>
		</div>
		<span>${data[0].powerstats.strength}</span>
	</li>
	<li>
		<div>
			<div class="stats_icon">
				<i class = "fa-solid fa-person-running"></i>
			</div>
			<span>Скорость</span>
		</div>
		<span>${data[0].powerstats.speed}</span>
	</li>
	<li>
		<div>
			<div class="stats_icon">
				<i class = "fa-solid fa-shield"></i>
			</div>
			<span>Стойкость</span>
		</div>
		<span>${data[0].powerstats.durability}</span>
	</li>
	<li>
		<div>
			<div class="stats_icon">
				<i class = "fa-solid fa-fire"></i>
			</div>
			<span>Энергия</span>
		</div>
		<span>${data[0].powerstats.power}</span>
	</li>
	<li>
		<div>
			<div class="stats_icon">
				<i class = "fa-solid fa-hand-fist"></i>
			</div>
			<span>Сражение</span>
		</div>
		<span>${data[0].powerstats.combat}</span>
	</li>
	`;

	const powerStatsSelector = document.querySelectorAll('.powerstats li > span');
	const dataLink = data[0].powerstats;
	let count = 0;
	for (let item in dataLink) {
		if (dataLink[item] === 'null') {
			powerStatsSelector[count++].innerHTML = '<span>Неизвестно</span>';
			continue;
		}
		if (dataLink[item] >= 0 && dataLink[item] < 25) {
			powerStatsSelector[count++].classList.add('bad');
		} else if (dataLink[item] >= 25 && dataLink[item] < 50) {
			powerStatsSelector[count++].classList.add('mid');
		} else if (dataLink[item] >= 50 && dataLink[item] < 75) {
			powerStatsSelector[count++].classList.add('good');
		} else if (dataLink[item] >= 75 && dataLink[item] <= 100) {
			powerStatsSelector[count++].classList.add('nice');
		}
	}
	modal.show();
};