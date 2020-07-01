window.onresize = function() {
let image = document.getElementsByClassName("accordion__image")[0];
	let elements = document.getElementsByClassName("accordion__scroll");

	for (let i = 0; i < 3; i ++) {
		elements[i].style.height = image.getBoundingClientRect().height - 248 + 'px';
	};
}