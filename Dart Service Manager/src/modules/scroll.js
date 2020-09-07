import navToggle from './navToggle';

export default function scroll({navSelector, openClass, navToggleSelector}){
	let nav = document.querySelector(navSelector);

	nav.addEventListener('click', function(elem) {

		let scrollTo = document.querySelector(elem.target.getAttribute('data'));
		console.log(1);
		if (nav.classList.contains(openClass)) {
			navToggle(nav,navToggleSelector,openClass);
			scrollTo.scrollIntoView({block: 'center',behavior:'smooth'});
		} else scrollTo.scrollIntoView({block: 'center',behavior:'smooth'});
	});
}



