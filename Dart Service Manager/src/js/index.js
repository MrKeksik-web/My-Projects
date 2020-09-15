import accordion from './modules/accordion';
import headerFixing from './modules/headFixed';
import navToggle from './modules/navToggle';
import scroll from './modules/scroll';
import slider from './modules/slider';
import teamHeight from './modules/teamHeight';
import team from './modules/team';
import '../styles/styles.css';

window.addEventListener('DOMContentLoaded', () => {
    accordion({
        parentSelector: '.accordion',
        itemClass: 'accordion--item',
        activeClass: 'active',
    });

    headerFixing({
        fixedClass:'head--fixed',
        elementClass:'head--static',
    });

    navToggle({
        toglerSelector: '.nav--toggle',
        navSelector: '.nav',
        linkSelector: '.nav--link',
        activeClass: 'nav--toggle--open',
    });

    scroll({
        navSelector: '.nav',
        openClass: 'nav--toggle--open',
        navToggleSelector: '.nav--toggle',
    });

    slider({
        buttonDownSelector: '.arrow--down',
        buttonUpSelector: '.arrow--up',
        sliderItemSelector: '.reviews--item',
        animationClass: 'fade',
        activeClass: 'active', 
    });
    
    teamHeight();

    team();
});