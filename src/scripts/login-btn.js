const loginBtn = document.getElementById("login-btn");
const session = sessionStorage.getItem('mrp-login');

document.addEventListener('DOMContentLoaded', () => {
  if (!session) {
    loginBtn.style.display = 'inline-block';
  } else {
    loginBtn.style.display = 'none';
  }
});