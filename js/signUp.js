var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPassword = document.querySelector("#userPassword");
var signUpBtn = document.querySelector(".btn");
var nameErrorMessage = document.querySelector(".nameErrorMessage");
var emailErrorMessage = document.querySelector(".emailErrorMessage");
var passwordErrorMessage = document.querySelector(".passwordErrorMessage");

var allUsers = [];
// var lastUser=[];

if (localStorage.getItem("users") != null) {
  allUsers = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  var checkEmail = true;
  if (
    nameValidation() == true &&
    emailValidation() == true &&
    passwordValidation() == true
  ) {
    var user = {
      userName: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };

    for (var i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email != user.email) {
        checkEmail = true;
      } else {
        checkEmail = false;
        break;
      }
    }

    if (checkEmail == true) {
      allUsers.push(user);
      localStorage.setItem("users", JSON.stringify(allUsers));
      clearForm();
      window.location.href = "sign-in.html";
    } else {
      userEmail.classList.add("is-invalid");
      emailErrorMessage.classList.add("d-block");
      userEmail.classList.remove("is-valid");
      emailErrorMessage.classList.remove("d-none");
      emailErrorMessage.innerHTML = "This email is used";
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "All inputs are required!",
    });
  }
}

signUpBtn.addEventListener("click", signUp);

function clearForm() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
  userName.classList.remove("is-invalid", "is-valid");
  userEmail.classList.remove("is-invalid", "is-valid");
  userPassword.classList.remove("is-invalid", "is-valid");
}

function nameValidation() {
  var regexName = /^([A-Z][a-z]{2,7} ?)+$/;
  if (regexName.test(userName.value) == true) {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    nameErrorMessage.classList.remove("d-block");
    nameErrorMessage.classList.add("d-none");
    return true;
  } else {
    userName.classList.remove("is-valid");
    userName.classList.add("is-invalid");
    nameErrorMessage.classList.remove("d-none");
    nameErrorMessage.classList.add("d-block");
    return false;
  }
}

function emailValidation() {
  var regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (regexEmail.test(userEmail.value) == true) {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    emailErrorMessage.classList.remove("d-block");
    emailErrorMessage.classList.add("d-none");
    return true;
  } else {
    userEmail.classList.remove("is-valid");
    userEmail.classList.add("is-invalid");
    emailErrorMessage.classList.remove("d-none");
    emailErrorMessage.classList.add("d-block");
    return false;
  }
}

function passwordValidation() {
  var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regexPassword.test(userPassword.value) == true) {
    userPassword.classList.remove("is-invalid");
    userPassword.classList.add("is-valid");
    passwordErrorMessage.classList.remove("d-block");
    passwordErrorMessage.classList.add("d-none");
    return true;
  } else {
    userPassword.classList.remove("is-valid");
    userPassword.classList.add("is-invalid");
    passwordErrorMessage.classList.remove("d-none");
    passwordErrorMessage.classList.add("d-block");
    return false;
  }
}

userName.addEventListener("input", nameValidation);
userEmail.addEventListener("input", emailValidation);
userPassword.addEventListener("input", passwordValidation);

function togglePasswordVisibility() {
  var toggleBtn = document.getElementById("togglePassword");

  if (userPassword.type === "password" ) {
    userPassword.type = "text";
    toggleBtn.innerHTML = '<i class="fa-solid fa-eye" style="color: #000000"></i>';

  } else {
    userPassword.type = "password";
    toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash" style="color: #000000"></i>';

  }
}

togglePassword.addEventListener('click',togglePasswordVisibility)