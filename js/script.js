document.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    document.querySelector('.navigation').classList.add('active');
  } else {
    document.querySelector('.navigation').classList.remove('active')
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
