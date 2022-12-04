
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

// Toggle mobile menu
function toggleNavMenu() {

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');

        // add hamburger button
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        menu.classList.add('active');

        toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
}

// Event Listener for navbar menu toggle
toggle.addEventListener('click', toggleNavMenu, false);
