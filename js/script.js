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
  responsive: [{
    // screens greater than >= 775px
    breakpoint: 300,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 1,
      slidesToScroll: 1,
      duration: 3,
    }
  }, {
    // screens greater than >= 1024px
    breakpoint: 500,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      duration: 3,
    }
  }, {
    // screens greater than >= 1024px
    breakpoint: 850,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      duration: 3,
    }
  }]
});
