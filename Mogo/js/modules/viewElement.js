let elements = document.getElementsByClassName('head__link');
let links = document.getElementsByClassName('nav__link');

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, bot: rect.top + scrollTop + rect.height}
}

function Visible() {
	let elementPosition;
	let scrollHeight;

	for (let i = 0; i < 5; i++) {

		elementPosition = offset(elements[i]);

		scrollHeight = document.documentElement.scrollTop;

		if (i == 4) {
			elementPosition.top -= 300;
			elementPosition.bot +=300;

		}

		if (elementPosition.top < scrollHeight + 156 && elementPosition.bot > scrollHeight + 156) {
			for (let i = 0; i < 5; i++) {
				links[i].classList.remove('active');
			}
			links[i].classList.add('active');
		}

		else {
			links[i].classList.remove('active');
		}
	}
}

window.addEventListener('scroll', function() {
  	Visible();
});