let link = document.querySelector('.nav--link');

function navToggle(nav_class,btn_class,elem_open_class,nav_link){
	let button = document.querySelector(btn_class);
	let nav = document.querySelector(nav_class);

	if (button.classList.contains(elem_open_class)) {
		button.classList.remove(elem_open_class);
		nav.classList.remove(elem_open_class);
		link.classList.remove(elem_open_class);
	}	else {
		button.classList.add(elem_open_class);
		nav.classList.add(elem_open_class);
		link.classList.add(elem_open_class);
	}
};