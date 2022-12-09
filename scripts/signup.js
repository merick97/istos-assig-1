window.onload = function() {
    init();
}

function init() {
    addListeners();
}

function addListeners() {
    let vPassword = document.getElementById("vpass");
    let birthDate = document.getElementById("bdate");
    let mail = document.getElementById("email");

    vPassword.addEventListener('change',checkPassword);
    vPassword.addEventListener('input',checkPassword);

    birthDate.addEventListener('change',checkAge);

    mail.addEventListener('change',checkMail);
}

//Reports to the user if the passwords he inserted are different
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

//Reports to the user if mail  has at least 1 character before @, at least 2 characters after @ and at least 2 characters after the .
function checkMail(ev) {
    let mail = ev.target;
    mail.setCustomValidity("");

    if( !/(.+)@(.+){2,}\.(.+){2,}/.test(mail.value) ){
        mail.setCustomValidity("Invalid mail");
        mail.reportValidity();
    } 
}


