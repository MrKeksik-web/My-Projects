function showHide(element_class,index) {
	const ITEM_OPEN = 'accordion__item--open';

    let image = document.getElementsByClassName("accordion__image")[0];
    let elements = document.getElementsByClassName("accordion__scroll");

    for (let i = 0; i < 3; i ++) {
        elements[i].style.height = image.getBoundingClientRect().height - 248 + 'px';
    }

    if (document.getElementsByClassName(element_class)[index]) { 

        const accordionItem = document.getElementsByClassName(element_class)[index];

        if (accordionItem.classList.contains(ITEM_OPEN)) { 
            accordionItem.classList.remove(ITEM_OPEN); 
        }
        else {
        	const allItems = document.getElementsByClassName(element_class);
        	for (let i = 0; i < allItems.length; i++) {
        		const item = allItems.item(i);
        		item.classList.remove(ITEM_OPEN);
        	}
        	accordionItem.classList.add(ITEM_OPEN);
    	}
    }
    else alert("Элемент с class: " + element_id + " не найден!"); 
}