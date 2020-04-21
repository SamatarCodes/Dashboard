const profileImage = document.querySelector('.profile-image');
const dropdown = document.querySelector('#profile-menu');
const contentSection = document.querySelector('.content-dashboard');

document.addEventListener('click', (e) => {
  // if element that was clicked on contained inside of dropdown
  console.log(e.target);
  // if profile image is clicked
  if (e.target === profileImage) {
    console.log('image');
    // then show the dropdown menu
    dropdown.classList.toggle('show');
  } else {
    // else close the dropdown menu if clicked outside
    console.log(e.target);
    dropdown.classList.add('hide');
    dropdown.classList.remove('show');
  }
});
