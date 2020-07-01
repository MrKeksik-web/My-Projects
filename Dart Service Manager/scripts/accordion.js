let accordionItemsAll = document.querySelectorAll('.accordion--item');

function showHide(elem_class,index) {

	let elem = document.querySelectorAll(elem_class)[index];
	let flag = true;

	if (elem.classList.contains('active')) {
		elem.classList.remove('active');
	} else {

		for (let i = 0; i < 5; i++) {
			if (accordionItemsAll[i].classList.contains('active')) {
				accordionItemsAll[i].classList.remove('active');
				flag = false;
			}
		}

		if (flag === false) {
			setTimeout(() => elem.classList.add('active'),500);
		} else elem.classList.add('active');
	}
}