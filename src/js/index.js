const popup = document.querySelector('.popup');

const btnClickMe = document.querySelector('.btn');
const btnClosePopup = document.querySelector('.popup .fa-times-circle');
const btnSubmit = document.querySelector('.submit');

const inputPassword = document.querySelector('.password');
const InputEmail = document.querySelector('.email');
const checkbox = document.querySelector('#checkbox');

let FLAGemail = true;
let FLAGpassword = true;
let FLAGcheckbox = true;

InputEmail.addEventListener("input", function () {
    const emailReq =
        /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    (!emailReq.test(this.value) ? FLAGemail = true : FLAGemail = false)
    console.log(FLAGemail)
})

inputPassword.addEventListener("input", function () {
    // I assume that the password must contain at least 5 characters.
    if (this.value.length >= 5) {
        FLAGpassword = false;
    } else {
        FLAGpassword = true;
    }
});

checkbox.addEventListener('input', function () {
    if (checkbox.checked == true) {
        FLAGcheckbox = false
    } else {
        FLAGcheckbox = true
    }
})

const submit = function () {
    if ((FLAGemail === false) && (FLAGpassword === false) && (FLAGcheckbox === false)) {
        btnSubmit.style.backgroundColor = '#fc888e';
        console.log('All correct');
    } else {
        alert('Enter the email and password correctly and confirm the agreement to term & conditions.')
    }
}

btnClickMe.addEventListener('click', function () {
    popup.style.display = 'flex';
})

btnClosePopup.addEventListener('click', function () {
    popup.style.display = 'none';
})

btnSubmit.addEventListener('click', submit);