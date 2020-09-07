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

		if (index == slides.length - 1) {
			index = -1;
		}

		index +=1;

		slides[index].classList.remove(animationClass);
		slides.forEach((slide) => {
			slide.classList.remove(activeClass);

		});

		slides[index].classList.add(activeClass);
		slides[index].classList.add(animationClass);
	});

	buttonDown.addEventListener("click", () => {

		if (index == 0) {
			index = slides.length;
		}

		index -=1;

		slides[index].classList.remove(animationClass);
		slides.forEach((slide) => {
			slide.classList.remove(activeClass);

		});

		slides[index].classList.add(activeClass);
		slides[index].classList.add(animationClass);
	});
}