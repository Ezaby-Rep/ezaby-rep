const loginBtn = document.getElementById("login-btn");
const tasksBtn = document.getElementById("tasks-btn");
const notesBtn = document.getElementById("notes-btn");
const session = sessionStorage.getItem('mrp-login');
const loggedIn = localStorage.getItem('loginStatus')

// document.addEventListener('DOMContentLoaded', () => {
//   if (!loggedIn) {
//     loginBtn.style.display = 'flex';
//     tasksBtn.style.display = 'none'
//     notesBtn.style.display = 'none'

//   } else {
//     loginBtn.style.display = 'none';
//     tasksBtn.style.display = 'flex'
//     notesBtn.style.display = 'flex'
//   }
// });
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date().getTime();
  const parsedLoggedIn = JSON.parse(loggedIn)
  if (parsedLoggedIn && parsedLoggedIn.exp > now) {
    loginBtn.style.display = 'none';
    tasksBtn.style.display = 'flex'
    notesBtn.style.display = 'flex'

  } else {
    loginBtn.style.display = 'flex';
    tasksBtn.style.display = 'none'
    notesBtn.style.display = 'none'
  }
});