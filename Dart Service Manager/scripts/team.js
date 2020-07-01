let team = document.querySelector('.guy--icons');

let indext;

if (screen.width > 690) {
	team.addEventListener("click",(elem) => {

		let element = elem.target;
		let teamNow = document.querySelector('.guy--icons');
		let guysItem = document.querySelectorAll('.guy--icons--item');
		let guys  = document.querySelectorAll('.guy--icon');
		let info = document.querySelectorAll('.guy--informations--item')

		if (element.classList == 'guy--icons--item' || element.classList == 'guy--icons') {
			return 0;
		}

		if (!element.classList.contains('guy--icon')) {
			while (element.parentNode) {
				if (element.parentNode.classList.contains('guy--icon')) {
					element = element.parentNode;
					break;
				}
			}
		}

		for (let i = 0; i < 3; i++) {
			guys[i].classList.remove('active');
			guys[i].classList.toggle('slider');
			info[i].classList.remove('active');
		}

		if (element == guys[2]) {
			indext = element.getAttribute('index');

			teamNow.removeChild(guysItem[0]);
			teamNow.append(guysItem[0]);

			info[indext].classList.add('active');
		}

		if (element == guys[0]) {
			indext = element.getAttribute('index');

			teamNow.removeChild(guysItem[2]);
			teamNow.prepend(guysItem[2]);

			info[indext].classList.add('active');
		}

		teamNow.children[1].firstElementChild.classList.add('active');

		setTimeout(function(){
			for (let i = 0; i < 3; i++) {
			guys[i].classList.toggle('slider');
		}
		},1000);



	});
} else {

	let right = document.querySelector('.arrow--right');
	let left = document.querySelector('.arrow--left');

	let indextMin = 1;

	right.addEventListener("click",() => {
		console.log(10);

		let teamNow = document.querySelector('.guy--icons');
		let guys  = document.querySelectorAll('.guy--icon');
		let info = document.querySelectorAll('.guy--informations--item')

		indextMin -=1;

		if (indextMin < 0) {
			indextMin = 2;
		}

		for (let i = 0; i < 3; i++) {
			teamNow.children[i].classList.remove('active');
			guys[i].classList.remove('active');
			info[i].classList.remove('active');
		}

		teamNow.children[indextMin].classList.add('active');
		guys[indextMin].classList.add('active');
		info[indextMin].classList.add('active');
	});

	left.addEventListener("click",() => {
		let teamNow = document.querySelector('.guy--icons');
		let guys  = document.querySelectorAll('.guy--icon');
		let info = document.querySelectorAll('.guy--informations--item')

		indextMin +=1;

		if (indextMin > 2) {
			indextMin = 0;
		}

		for (let i = 0; i < 3; i++) {
			teamNow.children[i].classList.remove('active');
			guys[i].classList.remove('active');
			info[i].classList.remove('active');
		}

		teamNow.children[indextMin].classList.add('active');
		guys[indextMin].classList.add('active');
		info[indextMin].classList.add('active');
	});

}