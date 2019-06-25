document.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    document.querySelector('nav').classList.add('active')

  } else {
    document.querySelector('nav').classList.remove('active')
  }
})
