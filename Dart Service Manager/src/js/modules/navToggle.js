export default function navToglee({toglerSelector, navSelector, linkSelector, activeClass}){

	let togler = document.querySelector(toglerSelector),
		nav = document.querySelector(navSelector),
		link = document.querySelector(linkSelector);

	togler.addEventListener('click', () => {
		togler.classList.toggle(activeClass);
		nav.classList.toggle(activeClass);
		link.classList.toggle(activeClass);
	});
}