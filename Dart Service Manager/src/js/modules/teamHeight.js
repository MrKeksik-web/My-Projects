export default function teamHeight() {
	let team = document.querySelector('.team');
	let guyItem = document.querySelector('.guy--icons--item');
	let infoItem = document.querySelector('.guy--informations--item');

	let guyIcons = document.querySelector('.guy--icons');
	let guyInfo = document.querySelector('.guy--informations');

	let h1 = parseInt(getComputedStyle(guyItem,null).marginTop);
	let h2 = parseInt(getComputedStyle(guyItem,null).marginBottom);
	let h3 = parseInt(getComputedStyle(infoItem,null).marginBottom);

	guyIcons.style.height = h1 + h2 + guyItem.clientHeight + 'px';
	guyInfo.style.height = infoItem.clientHeight + h3 + 'px';
	console.log(guyInfo.style.height);

	team.style.height = guyItem.clientHeight + infoItem.clientHeight + h1 + h2 + h3 + 'px';
}