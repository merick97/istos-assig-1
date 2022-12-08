window.onload = function() {
    init();
}

function init() {
    addListeners();
}

function addListeners() {
    let vPassword = document.getElementById("vpass");
    let birthDate = document.getElementById("bdate");

    vPassword.addEventListener('change',checkPassword);
    vPassword.addEventListener('input',checkPassword);

    birthDate.addEventListener('change',checkAge);
}

function checkPassword(ev) {
    let vPassword = ev.target;
    vPassword.setCustomValidity("");
    let password = document.getElementById("pass");

    if (password.value != vPassword.value) {
        vPassword.setCustomValidity("Passwords do not match.");
        vPassword.reportValidity();
    }
}

//Reports to the user whether he is eligible(age>=14) to register
function checkAge(ev) {
    let birthDate = ev.target;
    birthDate.setCustomValidity("");
    //console.log(birthDate.valueAsDate);
    let today = new Date();

    let age = today.getFullYear() - birthDate.valueAsDate.getFullYear();
    let m = today.getMonth() - birthDate.valueAsDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.valueAsDate.getDate())) {
        age--;
    }
    
    if (age < 14) {
        birthDate.setCustomValidity("You must be over 14 years old.");
        birthDate.reportValidity();
    }
}


