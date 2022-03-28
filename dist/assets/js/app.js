"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// fixed header
$(function () {
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
}); // mobile menu

$(function () {
  var btnMenu = document.querySelector('.burger');
  var menu = document.querySelector('.mobile-nav');
  var body = document.querySelector('body'); // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  var toggleMenu = function toggleMenu() {
    menu.classList.toggle('is-open'); // menu.style.height = heroHeight + headerHeight + 'px'

    btnMenu.classList.toggle('is-active');
    body.classList.toggle('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  var closeBtn = document.querySelector('.close');

  var closeMenu = function closeMenu() {
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
  };

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
}); // ancors

$(function () {
  var anchors = document.querySelectorAll('.nav a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}); // Hero slider

$(function () {
  var swiper = new Swiper('.hero__slider', {
    // Optional parameters
    speed: 400,
    spaceBetween: 75,
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: '.hero-slider__pagination',
      clickable: true
    }
  });
}); //masked inputs

$(function () {
  Inputmask({
    "mask": "+7 (999) 999-99-99"
  }).mask('.phone-mask');
}); // map

$(function () {
  ymaps.ready(function () {
    // Указывается идентификатор HTML-элемента.
    var myMap = new ymaps.Map("map", {
      center: [55.746917, 37.563250],
      zoom: 14,
      controls: [],
      behaviors: []
    }, {
      suppressMapOpenBlock: true
    });
    var myPlacemark = new ymaps.Placemark([55.747115, 37.539087], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'assets/img/map-icon.png',
      iconImageSize: [65, 65]
    });
    myMap.geoObjects.add(myPlacemark);
  });
});