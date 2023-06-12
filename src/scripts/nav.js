document.addEventListener('DOMContentLoaded', () => {
  const session = sessionStorage.getItem('mrp-login');
  const burger = document.querySelector('.burger');
  const logIn = document.getElementById('login-icon');
  const loggedIn = localStorage.getItem('loginStatus')

  // if (!session) {
  //   if (burger) burger.style.display = 'none';
  //   if (logIn) logIn.style.display = 'inline-block';
  // } else {
  //   if (burger) burger.classList.add('flex')
  //   if (logIn) logIn.style.display = 'none';
  // }

  const now = new Date().getTime();
  const parsedLoggedIn = JSON.parse(loggedIn)
  if (loggedIn && parsedLoggedIn.exp > now) {
    if (burger) burger.classList.add('flex')
    if (logIn) logIn.style.display = 'none';
  } else {
    if (burger) burger.style.display = 'none';
    if (logIn) logIn.style.display = 'inline-block';
  }
});