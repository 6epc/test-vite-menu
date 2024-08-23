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

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('hamburger')) {
    toogleActiveBodyClass();
  } else if (event.target.classList.contains('backdrop')) {
    removeActiveBodyClass()
  } else if (event.target.classList.contains('dropdown')) {
    toogleMobileMenu(event.target)
  }
});