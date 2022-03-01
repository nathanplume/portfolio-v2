// ----- selectors -----
const menu = document.querySelector('.menu-icons')
const menuOpen = document.querySelector('.fa-bars')
const menuClose = document.querySelector('.fa-xmark')
const links = document.querySelector('.links')

// ----- event listeners -----
menu.addEventListener('click', () => {
  menuOpen.classList.toggle('hide-icon')
  menuClose.classList.toggle('hide-icon')
  links.classList.toggle('links-show')
})
