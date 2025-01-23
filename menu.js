const menu = document.getElementById("mobileMenu");
const hiddenMenu = document.getElementById("hiddenMenu");
let toggled = false;

menu.addEventListener('click', () => {
    if (!toggled) {
        menu.style.transform = 'rotate(45deg) translate(2px, 4px)';
        hiddenMenu.style.width = '50vw';
        hiddenMenu.style.opacity = '1';
    } else {
        menu.style.transform = 'none';
        hiddenMenu.style.width = '0vw';
        hiddenMenu.style.opacity = '0';
    }
    toggled = !toggled;
})