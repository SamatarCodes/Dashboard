const dropdown = document.querySelector('#profile-menu');

document.querySelector('#profile').addEventListener('click', e => {

    dropdown.classList.toggle('show');
    //document.querySelector('#profile-menu').classList.toggle('hide');

})