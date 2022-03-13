// ----- selectors -----
const menu = document.querySelector('.menu-icons')
const menuOpen = document.querySelector('.fa-bars')
const menuClose = document.querySelector('.fa-xmark')
const links = document.querySelector('.links')
const nav = document.querySelector('.navbar')
const footerDate = document.querySelector('.footer-year')

// ----- event listeners -----
menu.addEventListener('click', () => {
  menuOpen.classList.toggle('hide-icon')
  menuClose.classList.toggle('hide-icon')
  links.classList.toggle('links-show')
})

// nav scroll add/remove transparency at the of page
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop >= 80 ||
    document.documentElement.scrollTop >= 80
  ) {
    nav.classList.remove('transparent')
  } else {
    nav.classList.add('transparent')
  }
}

// footer date year
const year = new Date().getFullYear()
footerDate.append(year)
