let inp = document.getElementById('inp')
let inp2 = document.getElementById('inp2')
let inp3 = document.getElementById('inp3')
let inp4 = document.getElementById('inp4')
let div = document.getElementById('div')
let div2 = document.getElementById('div2')
let color = document.getElementById('color')
let height = document.getElementById('height')
let widht = document.getElementById('width')

inp.addEventListener('input', () => {
  div.style.borderTopLeftRadius = inp.value + "%"
})
inp2.addEventListener('input', () => {
  div.style.borderTopRightRadius = inp2.value + "%"
})
inp3.addEventListener('input', () => {
  div.style.borderBottomLeftRadius = inp3.value + "%"
})
inp4.addEventListener('input', () => {
  div.style.borderBottomRightRadius = inp4.value + "%"
})
color.addEventListener('input', () => {
  div.style.background = color.value
})
height.addEventListener('input', () => {
  div.style.height = height.value + "%" 
})
widht.addEventListener('input', () => {
  div.style.width = widht.value + "%"
})

