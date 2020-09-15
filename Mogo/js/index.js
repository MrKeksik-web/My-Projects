import navToggle from './modules/navToggle';
import accordionOnResize from './modules/accordionOnResize';
import headerFixed from './modules/HeaderFixed';

window.addEventListener('DOMContentLoaded', () => {
    accordionOnResize();

    navToggle({
        openClass: 'nav-toggle--open',
        navSelector: '.nav',
        toglerSelector: 'button',
    });

    headerFixed({
        headerFixClass: 'header-fixed',
        headerSelector: '.header',
    });
});