document.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    document.querySelector('nav').classList.add('active')

  } else {
    document.querySelector('nav').classList.remove('active')
  }
})

new Glider(document.querySelector('.glider'), {
  slidesToShow: 5,
  slidesToScroll: 1,
  duration: 3,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
});
