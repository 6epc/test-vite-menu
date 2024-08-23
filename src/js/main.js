import '../scss/style.scss';

function toogleActiveBodyClass() {
  document.body.classList.toggle('activeMenu');
}

function removeActiveBodyClass() {
  document.body.classList.remove('activeMenu')
}

function toogleMobileMenu(el) {
  el.classList.toggle('active');
}

const btnMenu = document.getElementById('hamburger')

document.body.addEventListener('click', function(event) {
  if (btnMenu.contains(event.target)) {
    toogleActiveBodyClass();
  } else if (event.target.classList.contains('backdrop')) {
    removeActiveBodyClass()
  } else if (event.target.classList.contains('dropdown')) {
    toogleMobileMenu(event.target)
  }
});