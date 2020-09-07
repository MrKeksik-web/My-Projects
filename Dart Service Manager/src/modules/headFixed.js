export default function headerFixing({fixedClass, elementClass}){
	let header = document.querySelector(`.${elementClass}`),
	    introH = screen.height,
	    scrollHeight = 0;

	window.addEventListener('scroll',() => {
		scrollHeight = document.documentElement.scrollTop;
	
		if (scrollHeight >= introH) {
			header.classList.add(fixedClass);
		} else {
			header.classList.remove(fixedClass);
		}
	});
}