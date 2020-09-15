export default function accordion({parentSelector, itemClass, activeClass}){
	let accordion = document.querySelector(parentSelector),
		items = document.querySelectorAll(`.${itemClass}`);

	accordion.addEventListener('click', (event) => {
		let target = event.target;

		if(target && (target.classList.contains(itemClass) || target.parentNode.classList.contains(itemClass) || target.parentNode.classList.contains(itemClass) || target.parentNode.classList.contains(itemClass))) {

			while(!target.classList.contains(itemClass)){
				target = target.parentNode;
			}

			let flag = false;

			if(target.classList.contains(activeClass)){
				target.classList.remove(activeClass);
			} else {
				items.forEach(item => {
					if(item.classList.contains(activeClass)){
						item.classList.remove(activeClass);
						flag = true;
					}
				});

				setTimeout(() => target.classList.add(activeClass), flag ? 500 : 0);
			}
		}
	});
}