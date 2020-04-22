const profileImage = document.querySelector('.profile-image');
const dropdown = document.querySelector('#profile-menu');

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
});
