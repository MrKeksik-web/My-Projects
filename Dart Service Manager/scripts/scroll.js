let nav = document.querySelector('.nav');

nav.addEventListener('click', function(elem) {

	let scrollTo = document.querySelector(elem.target.getAttribute('data'));

	if (nav.classList.contains('nav--toggle--open')) {
		navToggle('.nav','.nav--toggle','nav--toggle--open');
		scrollTo.scrollIntoView({block: 'center',behavior:'smooth'});
	} else scrollTo.scrollIntoView({block: 'center',behavior:'smooth'});
});



