var userEmail = document.querySelector("#userEmail");
var userPassword = document.querySelector("#userPassword");
var signInBtn = document.querySelector(".btn");
var alertMassage = document.querySelector('#alertMassage')
var togglePassword= document.querySelector('#togglePassword')

var allUsers = [];
// var lastUser;

if (localStorage.getItem("users") != null) {
  allUsers = JSON.parse(localStorage.getItem("users"));
}

signInBtn.addEventListener("click", login);

function login() {
  if (checkInputsEmpty() == true) {
    Swal.fire({
      icon: "error",
      title: "All inputs are required!",
    });
  } else {
    if (checkEmailPassword()== true) {
      window.location.href = "home.html";
      clearForm();
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Email or Password not Correct",
          });
    }
  }
}

function checkInputsEmpty() {
  if (userEmail.value == "" || userPassword.value == "") return true;
  else return false;
}

function checkEmailPassword() {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == userEmail.value && allUsers[i].password == userPassword.value) {
            localStorage.setItem('userName',allUsers[i].userName)
            return true;
        }
    }
}


// function checkEmail() {
//   for (var i = 0; i < allUsers.length; i++) {
//     if (allUsers[i].email == userEmail.value) {
//       emailErrorMessage.classList.add("d-none");
//       emailErrorMessage.classList.remove("d-block");
//       localStorage.setItem("userName", allUsers[i].userName);
//       return true;
//     } else {
//       emailErrorMessage.classList.add("d-block");
//       emailErrorMessage.classList.remove("d-none");
//       emailErrorMessage.innerHTML = "This email isn't correct, try again";
//       return false;
//     }
//   }
//   checkPassword();
// }

// function checkPassword() {
//   for (var i = 0; i < allUsers.length; i++) {
//     if (allUsers[i].password == userPassword.value) {
//       emailErrorMessage.classList.add("d-none");
//       emailErrorMessage.classList.remove("d-block");
//       return true;
//     } else {
//       userPassword.classList.add("d-block");
//       userPassword.classList.remove("d-none");
//       userPassword.innerHTML = "This password isn't correct, try again";
//       return false;
//     }
//   }
// }

function clearForm() {
  userEmail.value = "";
  userPassword.value = "";
  userEmail.classList.remove("is-invalid", "is-valid");
  userPassword.classList.remove("is-invalid", "is-valid");
}

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