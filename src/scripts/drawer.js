const burger = document.querySelector('.burger')
const drawer = document.querySelector('aside')
const asideText = document.querySelector('aside ul')

burger.addEventListener('click', () => {
  if (drawer.classList.contains('open-drawer')) {
    asideText.classList.add('remove-txt')
    drawer.classList.add('close-drawer')
    drawer.classList.remove('open-drawer')
  } else {
    drawer.classList.add('open-drawer')
    drawer.classList.remove('close-drawer')
    asideText.classList.remove('remove-txt')
  }
})