let buttonUp = document.querySelector('.arrow--up');
let buttonDown = document.querySelector('.arrow--down');
let slides = document.querySelectorAll('.reviews--item');
let index = 0;

for (let i = 0; i < slides.length; i++) {
	slides[i].classList.remove('active');
	slides[index].classList.remove('fade');
}

slides[index].classList.add('active');
slides[index].classList.add('fade');

buttonUp.addEventListener("click", () => {

	if (index == 2) {
		index = -1;
	}

	index +=1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active');
		slides[index].classList.remove('fade');
	}

	slides[index].classList.add('active');
	slides[index].classList.add('fade');
});

buttonDown.addEventListener("click", () => {

	if (index == 0) {
		index = 3;
	}

	index -=1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active');
		slides[index].classList.remove('fade');
	}

	slides[index].classList.add('active');
	slides[index].classList.add('fade');
});