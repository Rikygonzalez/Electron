const $ = selector => document.querySelector(selector);

const $count = $('#count')
const $button = $('button')

$button.addEventListener('click', () => {
  const count = +$count.innerHTML
  $count.innerHTML = count + 1
})

window.electronAPI.onUpdateTheme((event, theme) => {
  const root = document.documentElement
  console.log({theme});
  root.style.setProperty('--schema', theme)
  console.log(event, theme);
})
