export default function navToggle(element_class{openClass, navSelector, toglerSelector}) {
	// const openClass = 'nav-toggle--open',
	const nav = document.querySelector(navSelector),
			button = document.querySelector(toglerSelector);

	if (button.classList.contains(openClass)) {
		button.classList.remove(openClass);
		nav.classList.remove(openClass);

	}	else {
		button.classList.add(openClass);
		nav.classList.add(openClass);
	}
}