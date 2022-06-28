const navOffcanvas = document.getElementById('offcanvasNavbar')
const bsOffcanvas = new bootstrap.Offcanvas(navOffcanvas)

const links = document.querySelectorAll('.nav-link')

const closeOffcanvas = () => {
  bsOffcanvas.hide()
}

links.forEach((link) => {
  link.addEventListener('click', () => {
    closeOffcanvas()
    // document.getElementById('myId').scrollIntoView({ behavior: 'smooth' })
  })
})

const dropdown = document.querySelector('.filter_dropdown')
const subMenus = dropdown.querySelectorAll('.filter-menu-submenu')
const button = dropdown.querySelector('.filter_button')

button.addEventListener('click', () => {
  dropdown.classList.toggle('opened')
})
subMenus.forEach((submenu) => {
  submenu.querySelector('label').addEventListener('click', () => {
    submenu.classList.toggle('opened')
  })
})
const dropdownMini = document.querySelector('.dropdown-mini')
dropdownMini
    .querySelector('.dropdown-mini-name')
    .addEventListener('click', () => {
      dropdownMini.classList.toggle('opened')
    })

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().some((el) => {
    return [dropdown, dropdownMini].includes(el)
  })

  if (!withinBoundaries) {
    dropdown.classList.remove('opened')
    dropdownMini.classList.remove('opened')
  }
})
