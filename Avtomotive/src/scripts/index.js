import navToggle from './modules/navToggle';
import '../css/styles.css';

window.addEventListener('DOMContentLoaded', () => {
    navToggle({
        navSelector: '.navigation',
        toglerSelector: '.nav--toggle',
        contentSelector: '.content',
        contentOPenClass: 'content--active',
        navOpenClass: 'navigation--open',
    });
});