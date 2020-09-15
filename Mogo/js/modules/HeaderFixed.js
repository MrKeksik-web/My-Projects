export default function headerFixed({headerFixClass, headerSelector}){
	const introH = screen.height;
	
	let header = document.getElementsByClassName(headerSelector)[0],
	    scrollHeight = 0;
	
	window.onscroll = function() {
		scrollHeight = document.documentElement.scrollTop;
	
		if (scrollHeight >= introH) {
			header.classList.add(headerFixClass);
		} else {
			header.classList.remove(headerFixClass);
		}
	}
}