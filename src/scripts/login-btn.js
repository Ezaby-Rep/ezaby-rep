const loginBtn = document.getElementById("login-btn");
const tasksBtn = document.getElementById("tasks-btn");
const notesBtn = document.getElementById("notes-btn");
const session = sessionStorage.getItem('mrp-login');

document.addEventListener('DOMContentLoaded', () => {
  if (!session) {
    loginBtn.style.display = 'flex';
    tasksBtn.style.display = 'none'
    notesBtn.style.display = 'none'

  } else {
    loginBtn.style.display = 'none';
    tasksBtn.style.display = 'flex'
    notesBtn.style.display = 'flex'
  }
});