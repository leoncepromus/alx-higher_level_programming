let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let submitError = document.getElementById('submit-error');

function validateName() {
  let myName = document.getElementById("contact-name").value;

  if (myName.length == 0 && !myName.match(/^[A-Za-z]+(?: [A-Za-z]+)?$/)) {
    nameError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    return false;
  }
 /*  if (!myName.match(/^[A-Za-z]+(?: [A-Za-z]+)?$/)) {
    nameError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    return false;
  } */

  nameError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  return true;
}

function validatePhone() {
  let myPhone = document.getElementById("contact-phone").value;

  if (myPhone.length == 0) {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    return false;
  }
  if (!myPhone.length !== 10) {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    return false;
  }
  if (!myPhone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    return false;
  }
  phoneError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  return true;
}

function validateEmail(){
    let myEmail = document.getElementById("contact-email").value;

    if(myEmail.length == 0)
    {
        emailError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        return false;
    }
    if(!myEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        return false;
    }
    emailError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  return true;
    
}

function validateMessage(){

    let myMessage = document.getElementById("contact-message").value;

    let myMessageRequired = 30;

    let leftChars = myMessageRequired - myMessage.length;

    if (leftChars > 0) {
        msgError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        return false;
    }
    msgError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  return true;
        
    }


    function validateForm(){

      if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = `Fix errors before submission`;
        setTimeout(function(){
            submitError.style.display = "none";
        },3000)
        return false;
    
    }
        
    }