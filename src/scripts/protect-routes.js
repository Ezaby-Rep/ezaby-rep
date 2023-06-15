// const session = sessionStorage.getItem('mrp-login');
// if (!session) window.location.replace('/')

const loggedIn = localStorage.getItem('loginStatus')
const parsedLoggedIn = JSON.parse(loggedIn)
const now = new Date().getTime();
console.log(parsedLoggedIn)
if (!loggedIn || parsedLoggedIn.exp < now) window.location.replace('/')
