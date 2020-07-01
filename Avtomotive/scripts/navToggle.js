function navToggle(){
	let nav = document.querySelector('.navigation');
	let button = document.querySelector('.nav--toggle');
	let content = document.querySelector('.content');
	let contentOpen = 'content--active'
	let navOpen = 'navigation--open';

	if (nav.classList.contains(navOpen)) {
		nav.classList.remove(navOpen)
		button.classList.remove(navOpen)
		content.classList.remove(contentOpen)
	} else {
		nav.classList.add(navOpen);
		button.classList.add(navOpen);
		content.classList.add(contentOpen)
	}
}