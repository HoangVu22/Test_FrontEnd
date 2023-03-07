const navBar = document.querySelector(".nav_bar")
const iconMenu = document.querySelector(".icon-menu")
const closeNav = document.querySelector(".close")

iconMenu.onclick = ()=>{
    navBar.style.display = "block"
}
closeNav.onclick= ()=>{
    navBar.style.display = "none";
}

window.onresize = function(){
    window.innerWidth > 768 ? (navBar.style.display = "block") : (navBar.style.display = "none")
}