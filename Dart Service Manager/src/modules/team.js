export default function team(){
	let team = document.querySelector('.guy--icons');

	let index;

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

			guys.forEach((item, i) => {
				item.classList.remove('active');
				item.classList.toggle('slider');
				info[i].classList.remove('active');
			});

			if (element == guys[guys.length - 1]) {
				index = element.getAttribute('index');

				teamNow.removeChild(guysItem[0]);
				teamNow.append(guysItem[0]);

				info[index].classList.add('active');
			}

			if (element == guys[0]) {
				index = element.getAttribute('index');

				teamNow.removeChild(guysItem[guys.length - 1]);
				teamNow.prepend(guysItem[guys.length - 1]);

				info[index].classList.add('active');
			}

			teamNow.children[1].firstElementChild.classList.add('active');

			setTimeout(() => {
				guys.forEach((item) => {
					item.classList.toggle('slider');
				});
			}, 1000);
		});
	} else {

		let right = document.querySelector('.arrow--right');
		let left = document.querySelector('.arrow--left');

		let indexMin = 1;

		right.addEventListener("click",() => {
			console.log(10);

			let teamNow = document.querySelector('.guy--icons');
			let guys  = document.querySelectorAll('.guy--icon');
			let info = document.querySelectorAll('.guy--informations--item')

			indexMin -=1;

			if (indexMin < 0) {
				indexMin = 2;
			}

			for (let i = 0; i < 3; i++) {
				teamNow.children[i].classList.remove('active');
				guys[i].classList.remove('active');
				info[i].classList.remove('active');
			}

			teamNow.children[indexMin].classList.add('active');
			guys[indexMin].classList.add('active');
			info[indexMin].classList.add('active');
		});

		left.addEventListener("click",() => {
			let teamNow = document.querySelector('.guy--icons');
			let guys  = document.querySelectorAll('.guy--icon');
			let info = document.querySelectorAll('.guy--informations--item')

			indexMin +=1;

			if (indexMin > 2) {
				indexMin = 0;
			}

			for (let i = 0; i < 3; i++) {
				teamNow.children[i].classList.remove('active');
				guys[i].classList.remove('active');
				info[i].classList.remove('active');
			}

			teamNow.children[indexMin].classList.add('active');
			guys[indexMin].classList.add('active');
			info[indexMin].classList.add('active');
		});

	}
}