var logoutUser=document.querySelector('#logoutUser');
var welcomEMessage = document.querySelector('#welcomEMessage');
var spinnerWrapperEL = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
  spinnerWrapperEL.style.opacity = "0";
  
});

setTimeout(() => {
  spinnerWrapperEL.style.display = "none";
}, 2500);



function displayName() {
  if (localStorage.getItem('userName')!=null) {
    welcomEMessage.innerHTML=`Welcome, ${localStorage.getItem('userName')}`
  } 
}
window.onload=function () {
  displayName()
}

function logOut() {
  window.location.href='../index.html'
  localStorage.removeItem('userName');
};
logoutUser.addEventListener('click' , logOut)