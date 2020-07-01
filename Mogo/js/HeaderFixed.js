const element_new_class =  'header--fixed';
const element_class = 'header';

let header = document.getElementsByClassName(element_class)[0];
const introH = screen.height;
let scrollHeight = 0;

window.onscroll = function() {
	scrollHeight = document.documentElement.scrollTop;

	if (scrollHeight >= introH) {
		console.log(header);
		header.classList.add(element_new_class);
	} else {
		header.classList.remove(element_new_class);
	}
}