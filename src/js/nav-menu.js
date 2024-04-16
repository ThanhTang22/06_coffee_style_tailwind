const menuToggle = document.getElementById('header-menu-toggle');
const menuHidden = document.querySelector('.content-hidden');

menuToggle.addEventListener("click", ToggleOnOff);

function ToggleOnOff(){
    menuHidden.classList.toggle('content-visible');
}