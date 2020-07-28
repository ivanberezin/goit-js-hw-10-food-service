import itemsTemplate from '../templates/menu-items.hbs';
import menu from '../menu.json';

const menulink = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);

menulink.insertAdjacentHTML('beforeend', markup);
