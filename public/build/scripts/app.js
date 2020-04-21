const dropdown = document.querySelector('#profile-menu');
const contentSection = document.querySelector('.content-dashboard');

window.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === document.querySelector('.profile-image')) {
    console.log('image');
    dropdown.classList.toggle('show');
  } else {
    dropdown.classList.add('hide');
    dropdown.classList.remove('show');
  }
});
