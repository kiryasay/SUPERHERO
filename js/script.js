'use strict';

// let image;

// image.src = '../img/marvel_bg.png';

// image.onload = function () {
// 	$('.element').css('background-image',
// 		'url(\'' + image.src + '\')');
// };

// ('.cards_block .card').hover(function () {
// 	(this).attr('src', 'img/marvel_logo.png');
// });

/* window.onload = () => {
	const transition_el = document.querySelector('.transition');
	const anchors = document.querySelectorAll('a');

	setTimeout(() => {
		transition_el.classList.remove('is-active');
	}, 500);

	for (let i = 0; i < anchors.length; i++) {
		const anchor = anchors[i];

		anchor.addEventListener('click', e => {
			e.preventDefault();
			let target = e.target.href;

			transition_el.classList.add('is-active');

			setTimeout(() => {
				window.location.href = target;
			}, 500);
		});
	}
}; */
VANTA.NET({
	el: '#intro',
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 980.00,
	minWidth: 1920.00,
	scale: 1.00,
	scaleMobile: 1.00,
	color: 0xDF2157,
	backgroundColor: 0x000C2C
});