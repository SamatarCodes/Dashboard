const profileImage = document.querySelector('.profile-image');
const dropdown = document.querySelector('#profile-menu');
const menuButton = document.querySelector(' button #menu-button');
const searchField = document.querySelector('#search');
const sideBar = document.querySelector('#sidebar-menu');

document.addEventListener('click', (e) => {
  // if profile image is clicked
  if (e.target === profileImage) {
    // then show the dropdown menu
    dropdown.classList.toggle('show');
  } else {
    // else close the dropdown menu if clicked outside
    dropdown.classList.add('hide');
    dropdown.classList.remove('show');
  }

  if (e.target === menuButton) {
    sideBar.classList.toggle('show');

    console.log(e.target);
  }
});
