const navOffcanvas = document.getElementById('offcanvasNavbar')
const bsOffcanvas = new bootstrap.Offcanvas(navOffcanvas)

const links = document.querySelectorAll('.nav-link')

const closeOffcanvas = () => {
  bsOffcanvas.hide()
}

links.forEach((link) => {
  link.addEventListener('click', (ev) => {
    closeOffcanvas()
    // document.getElementById('myId').scrollIntoView({ behavior: 'smooth' })
  })
})
