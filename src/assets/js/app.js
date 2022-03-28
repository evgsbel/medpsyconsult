// fixed header
$(() => {

  function stickySidebar() {
    var scrollDistance = $(document).scrollTop(),
      headerHeight = $('.header').outerHeight(true),
      // sidebarHeight = $('aside').outerHeight(true),
      footerOffsetTop = $('.js-stop-header').offset().top,
      $header = $('header');

    if (scrollDistance >= headerHeight) {
      $header.addClass('header_fixed');
      $header.removeClass('header_hide');
    } else {
      $header.removeClass('header_fixed');
    }

    if (scrollDistance + headerHeight >= footerOffsetTop - 100) {
      $header.removeClass('header_fixed');
      $header.addClass('header_hide');
    }

  }

  stickySidebar();

  $(document).scroll(function () {
    stickySidebar();
  });

});

// mobile menu
$(() => {
  const btnMenu = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-nav');
  const body = document.querySelector('body');
  // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  const toggleMenu = function () {
    menu.classList.toggle('is-open');
    // menu.style.height = heroHeight + headerHeight + 'px'
    btnMenu.classList.toggle('is-active');
    body.classList.toggle('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  const closeBtn = document.querySelector('.close');
  const closeMenu = function () {
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
  };

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
});

// ancors
$(() => {
  const anchors = document.querySelectorAll('.nav a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})

// Hero slider
$(() => {
  const swiper = new Swiper('.hero__slider', {
    // Optional parameters
    speed: 400,
    spaceBetween: 75,
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: '.hero-slider__pagination',
      clickable: true,
    },
  });
});

//masked inputs
$(() => {
  Inputmask({"mask": "+7 (999) 999-99-99"}).mask('.phone-mask');
});

// map
$(() => {
  ymaps.ready(function () {
    // Указывается идентификатор HTML-элемента.
    var myMap = new ymaps.Map("map", {
        center: [55.746917, 37.563250],
        zoom: 14,
        controls: [],
        behaviors: []
      },
      {suppressMapOpenBlock: true}
    );

    var myPlacemark = new ymaps.Placemark([55.747115, 37.539087], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'assets/img/map-icon.png',
      iconImageSize: [65, 65],
    });

    myMap.geoObjects.add(myPlacemark);

  });
});
