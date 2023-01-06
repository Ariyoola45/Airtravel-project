const menu = document.querySelector('.mobile')
const navMenu = document.querySelector('.nav-menu')

const mobile = () =>{
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
   
}
const close = () => {
    navMenu.classList.toggle('active')
}
