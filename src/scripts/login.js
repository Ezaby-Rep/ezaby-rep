const passInput = document.querySelector('input[type=password]');
const invalidPass = document.getElementById('invalid-pass')
const spinner = document.getElementById('spinner');

passInput.addEventListener('input', (e) => {
  if (e.target.value === 'islam2023') {
    invalidPass.style.visibility = 'hidden';
    spinner.style.visibility = 'visible';
    sessionStorage.setItem('mrp-login', true);
    setTimeout(() => window.location.replace('/tasks/فرش%20الفروع%20الجديدة'), 3000)
  } else {
    invalidPass.style.visibility = 'visible';
  }
})



