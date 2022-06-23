const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

const toggleMenu = () => {
<<<<<<< HEAD
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
=======
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
>>>>>>> e169972f4a9d07f9fde13d70fbfb373a9afb0725
};

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
<<<<<<< HEAD
    (menuItem) => {
        menuItem.addEventListener('click', toggleMenu);
    }
=======
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
>>>>>>> e169972f4a9d07f9fde13d70fbfb373a9afb0725
);