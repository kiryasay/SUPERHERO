const allTabsBody = document.querySelectorAll('.tab-body-single'); //powerstats
const searchFormLeft = document.querySelector('.app-header-search-left'); //search hero left
const searchFormRight = document.querySelector('.app-header-search-right'); //search hero left
let searchListLeft = document.getElementById('search-list-left'); //search dropdown
let searchListRight = document.getElementById('search-list-right'); //search dropdown
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

// event listeners
window.addEventListener('DOMContentLoaded', () => init());

const getInputValueLeft = (event) => {
	event.preventDefault();
	let searchText = searchFormLeft.search.value;
	fetchAllSuperHeroLeft(searchText);
};

const getInputValueRight = (event) => {
	event.preventDefault();
	let searchText = searchFormRight.search.value;
	fetchAllSuperHeroRight(searchText);
};

// search form submission
searchFormLeft.addEventListener('submit', getInputValueLeft);
searchFormRight.addEventListener('submit', getInputValueRight);

// api key => 106808315798405
const fetchAllSuperHeroLeft = async (searchText) => {
	let url = `https://www.superheroapi.com/api.php/106808315798405/search/${searchText}`;
	try {
		const response = await fetch(url);
		allData = await response.json();
		if (allData.response === 'success') {
			console.log('allData from fetchAllSuperHeroLeft:');
			console.log(allData);
			showSearchListLeft(allData.results);
		}
		else {
			showSearchListLeft(undefined);
		}
	} catch (error) {
		console.log(error);
	}
};

const fetchAllSuperHeroRight = async (searchText) => {
	let url = `https://www.superheroapi.com/api.php/106808315798405/search/${searchText}`;
	try {
		const response = await fetch(url);
		allData = await response.json();
		if (allData.response === 'success') {
			console.log('allData from fetchAllSuperHeroRight:');
			console.log(allData);
			showSearchListRight(allData.results);
		}
		else {
			showSearchListRight(undefined);
		}
	} catch (error) {
		console.log(error);
	}
};

const showSearchListLeft = (data) => {
	searchListLeft.innerHTML = '';
	data.forEach(dataItem => {
		const divElem = document.createElement('div');
		divElem.classList.add('search-list-item');
		divElem.innerHTML = `
				<div data-id = "${dataItem.id}" class = "searchListItem-wrapper">
					<img data-id = "${dataItem.id}" src = "${dataItem.image.url ? dataItem.image.url : ''}" alt = "">
					<p data-id = "${dataItem.id}">${dataItem.name}</p>
				</div>
		`;
		searchListLeft.appendChild(divElem);
	});
};

const showSearchListRight = (data) => {
	searchListRight.innerHTML = '';
	data.forEach(dataItem => {
		const divElem = document.createElement('div');
		divElem.classList.add('search-list-item');
		divElem.innerHTML = `
				<div data-id = "${dataItem.id}" class = "searchListItem-wrapper">
					<img data-id = "${dataItem.id}" src = "${dataItem.image.url ? dataItem.image.url : ''}" alt = "">
					<p data-id = "${dataItem.id}">${dataItem.name}</p>
				</div>
		`;
		searchListRight.appendChild(divElem);
	});
};

searchFormLeft.search.addEventListener('keyup', () => {
	if (searchFormLeft.search.value.length > 1) {
		fetchAllSuperHeroLeft(searchFormLeft.search.value);
	} else {
		searchListLeft.innerHTML = '';
	}
});

searchFormRight.search.addEventListener('keyup', () => {
	if (searchFormRight.search.value.length > 1) {
		fetchAllSuperHeroRight(searchFormRight.search.value);
	} else {
		searchListRight.innerHTML = '';
	}
});

searchListLeft.addEventListener('click', (event) => {
	let searchId = event.target.dataset.id;
	console.log(allData);
	let singleData = allData.results.filter(singleData => {
		console.log('searchId: ' + searchId);
		console.log('singleData.id: ' + singleData.id);
		return searchId === singleData.id;
	});
	showSuperheroDetails(singleData);
	searchListLeft.innerHTML = '';
});

searchListRight.addEventListener('click', (event) => {
	let searchId = event.target.dataset.id;
	console.log(allData);
	let singleData = allData.results.filter(singleData => {
		console.log('searchId: ' + searchId);
		console.log('singleData.id: ' + singleData.id);
		return searchId === singleData.id;
	});
	showSuperheroDetails(singleData);
	searchListRight.innerHTML = '';
});

const showSuperheroDetails = (data) => {
	console.log(data);
	document.querySelector('.app-body-content-thumbnail-left').innerHTML = `
		<img src ="${data[0].image.url}" alt="" class="thumbnail-left">
		<div class="name-left">${data[0].name}</div>
	`;

	document.querySelector('.powerstats').innerHTML = `
	<li>
		<span class="stats_value-left">${data[0].powerstats.intelligence}</span>
		<div>
			<div class="stats_icon">
				<i class="fa-solid fa-brain"></i>
			</div>
		</div>
		<span class="stats_value-right">?</span>
	</li>
	<li>
		<span class="stats_value-left">${data[0].powerstats.strength}</span>
		<div>
			<div class="stats_icon">
				<i class="fa-solid fa-dumbbell"></i>
			</div>
		</div>
		<span class="stats_value-right">?</span>
	</li>
	<li>
		<span class="stats_value-left">${data[0].powerstats.speed}</span>
		<div>
			<div class="stats_icon">
				<i class = "fa-solid fa-person-running"></i>
			</div>
		</div>
		<span class="stats_value-right">?</span>
	</li>
	<li>
		<span class="stats_value-left">${data[0].powerstats.durability}</span>
		<div>
			<div class="stats_icon">
				<i class = "fa-solid fa-shield"></i>
			</div>
		</div>
		<span class="stats_value-right">?</span>
	</li>
	<li>
		<span class="stats_value-left">${data[0].powerstats.power}</span>
		<div>
			<div class="stats_icon">
				<i class = "fa-solid fa-fire"></i>
			</div>
		</div>
		<span class="stats_value-right">?</span>
	</li>
	<li>
		<span class="stats_value-left">${data[0].powerstats.combat}</span>
		<div>
			<div class="stats_icon">
				<i class = "fa-solid fa-hand-fist"></i>
			</div>
		</div>
		<span class="stats_value-right">?</span>
	</li>
	`;

	const powerStatsSelector = document.querySelectorAll('.powerstats li > .stats_value-left');
	const dataLink = data[0].powerstats;
	let count = 0;
	for (let item in dataLink) {
		if (dataLink[item] === 'null') {
			powerStatsSelector[count++].innerHTML = '<span>-</span>';
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