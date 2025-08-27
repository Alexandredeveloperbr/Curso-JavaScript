const buttonMenu = document.querySelector('#openMenu');
const buttonTheme = document.querySelector('#changeTheme');
const submenu = document.querySelector('.submenu');
const body = document.querySelector('body');

buttonTheme.addEventListener('click', function (e) {
    behavior(e, body, 'blue');
});

buttonMenu.addEventListener('click', function (e) {
    behavior(e, submenu, 'open');
});

function behavior(e, element, classe) {
    e.preventDefault();
    element.classList.toggle(classe);
}
