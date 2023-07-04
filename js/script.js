'use strict';

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
	el: "#intro",
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.00,
	minWidth: 200.00,
	scale: 1.00,
	scaleMobile: 1.00,
	color: 0x500505,
	backgroundColor: 0x1e
  })