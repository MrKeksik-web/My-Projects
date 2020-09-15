export default function accordionOnResize(){
	window.onresize = function() {
		let image = document.getElementsByClassName("accordion__image")[0],
		    elements = document.getElementsByClassName("accordion__scroll");
		
		elements.forEach(elem => {
			elem.style.height = image.getBoundingClientRect().height - 248 + 'px';
		});
	}
}