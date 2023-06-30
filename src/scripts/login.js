const passInput = document.querySelector('input[type=password]');
const invalidPass = document.getElementById('invalid-pass')
const spinner = document.getElementById('spinner');

passInput.addEventListener('input', (e) => {
  // if (localStorage.getItem('loginStatus')) {
  //   setTimeout(() => window.location.replace('/tasks/طلبيات الفروع'), 3000);
  //   return;
  // }
  if (e.target.value === 'islam2023') {
    invalidPass.style.visibility = 'hidden';
    spinner.style.visibility = 'visible';
    const now = new Date().getTime()
    const mrpLogin = {
      loggedIn: true,
      exp: now + 2592000000 //1 month
    }
    localStorage.setItem("loginStatus", JSON.stringify(mrpLogin));
    setTimeout(() => window.location.replace('posts/notes'), 2000)
  } else {
    invalidPass.style.visibility = 'visible';
  }
})



