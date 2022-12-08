// Mobile responsive navigation bar

// Name toggle and menu items for mobile responsive design
const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')

// Function to toggle menu items
function toggleMenuItems() {
    // If menu has active class, remove it
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');

        // Change toggle visual to hamburger button
        toggle.innerHTML = `<a href='#'><i class="fa-solid fa-bars"></i></a>`;
    } else {
        // Otherwise, add that class to it
        menu.classList.add('active');

        // Change toggle visual to x
        toggle.innerHTML = `<a href='#'><i class="fa-solid fa-xmark"></i></a>`;
    }

}

toggle.addEventListener('click', toggleMenuItems)
