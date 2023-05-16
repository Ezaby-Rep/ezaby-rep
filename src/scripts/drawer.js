const burger = document.querySelector('.burger')
const drawer = document.querySelector('aside')
const asideText = document.querySelector('aside ul')

burger.addEventListener('click', () => {
  if (drawer.classList.contains('open-drawer')) {
    drawer.classList.add('close-drawer')
    drawer.classList.remove('open-drawer')
    asideText.classList.add('remove-txt')
  } else {
    drawer.classList.add('open-drawer')
    drawer.classList.remove('close-drawer')
    asideText.classList.remove('remove-txt')
  }
})