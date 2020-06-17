const popup = document.querySelector('.popup');

const btnClickMe = document.querySelector('.btn');
const btnClosePopup = document.querySelector('.popup .fa-times-circle');

btnClickMe.addEventListener('click', function () {
    popup.style.display = 'flex';
})

btnClosePopup.addEventListener('click', function () {
    popup.style.display = 'none';
})