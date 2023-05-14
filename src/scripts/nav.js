document.addEventListener('DOMContentLoaded', () => {
  const session = sessionStorage.getItem('mrp-login');
  const burger = document.querySelector('.burger');
  const logIn = document.getElementById('login-icon');
  if (!session) {
    burger.style.display = 'none';
    logIn.style.display = 'inline-block';
  } else {
    burger.classList.add('flex')
    logIn.style.display = 'none';
  }
});