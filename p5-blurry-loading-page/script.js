const loadIndex = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

const scale = (num, in_min, in_max, out_min, out_max) => (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

function blurring() {
  load++

  if (load > 99) clearInterval(int)

  loadIndex.innerText = `${load}%`
  loadIndex.style.opacity = Math.abs(load - 100) / 100
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
