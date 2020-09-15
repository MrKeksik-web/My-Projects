export default function slider({buttonUpSelector, buttonDownSelector, sliderItemSelector, animationClass, activeClass}){
	let buttonUp = document.querySelector(buttonUpSelector),
	    buttonDown = document.querySelector(buttonDownSelector),
	    slides = document.querySelectorAll(sliderItemSelector),
	    index = 0;

	slides[index].classList.remove(animationClass);

	slides.forEach((slide) => {
		slide.classList.remove(activeClass);
	});

	slides[index].classList.add(activeClass);
	slides[index].classList.add(animationClass);

	buttonUp.addEventListener("click", () => {
		index +=1;

		index = checkIndex(slides, index);

		addAnim(slides, index, animationClass, activeClass);
	});

	buttonDown.addEventListener("click", () => {
		index -=1;

		index = checkIndex(slides, index);
		
		addAnim(slides, index, animationClass, activeClass);
	});

	function checkIndex(slides, index){
		if (index >= slides.length) {
			return 0;
		}
		if (index <= -1) {
			return slides.length - 1;
		}
		return index;
	}

	function addAnim(slides, index, animationClass, activeClass){
		slides[index].classList.remove(animationClass);
		slides.forEach((slide) => {
			slide.classList.remove(activeClass);

		});

		slides[index].classList.add(activeClass);
		slides[index].classList.add(animationClass);
	}
}