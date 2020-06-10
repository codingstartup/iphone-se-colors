window.addEventListener('scroll', (e) => {
  let noStickyOffset = document.documentElement.clientHeight * 2
  let scrolled = document.documentElement.scrollTop / noStickyOffset
  
  let $white = document.querySelector('.white')
  let $red = document.querySelector('.red')
  
  $white.style.clipPath = `inset(${((0.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`
  $red.style.clipPath = `inset(${((1 - scrolled) / 0.5) * 100}% 0px 0px 0px)`
  
  if (scrolled >= 1) {
    document.querySelector('.sticky-container').classList.add('no-sticky')
  } else {
    document.querySelector('.sticky-container').classList.remove('no-sticky')
  }
})