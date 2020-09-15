export default function navToggle({navSelector, toglerSelector, contentSelector, contentOPenClass, navOpenClass}){
	let nav = document.querySelector(navSelector),
	    button = document.querySelector(toglerSelector),
	    content = document.querySelector(contentSelector),
	    contentOpen = contentOPenClass,
	    navOpen = navOpenClass;

	button.addEventListener('click', () => {
		nav.classList.toggle(navOpen);
		button.classList.toggle(navOpen);
		content.classList.toggle(contentOpen);
	});
}