

AOS.init({
    easing: 'ease-out-back',
    duration: 1000,
    // disable: 'mobile'
    disable: function () {
        var maxWidth = 1280;
        return window.innerWidth < maxWidth;
    }
});



window.onscroll = function () {
    // show or hide the back-top-top button
    var backToTo = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 0) {
        backToTo.style.display = "block";
    } else {
        backToTo.style.display = "none";
    }
};


$(".owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
});



// setTimout is not necessary
setTimeout(function() {
  
  $('.recaptcha').each(function() {
    grecaptcha.render(this.id, {
      'sitekey': '6LdVkwkUAAAAACeeETRX--v9Js0vWyjQOTIZxxeB',
      "theme":"light"
    });
  });
  
}, 2000);


"use strict";
jQuery, jQuery(document).ready(function(o) {
    0 < o(".offset-side-bar").length && o(".offset-side-bar").on("click", function(e) {
        e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive")
    }), 0 < o(".close-side-widget").length && o(".close-side-widget").on("click", function(e) {
        e.preventDefault(), o(".cart-group").removeClass("isActive")
    }), 0 < o(".navSidebar-button").length && o(".navSidebar-button").on("click", function(e) {
        e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive")
    }), 0 < o(".close-side-widget").length && o(".close-side-widget").on("click", function(e) {
        e.preventDefault(), o(".info-group").removeClass("isActive")
    }), o(".closeicon, .side-overlay ").on("click", function(e) {
        o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive")
    }), o(".xs-sidebar-widget").on("click", function(e) {
        e.stopPropagation()
    }), 0 < o(".xs-modal-popup").length && o(".xs-modal-popup").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !1,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup"
            }
        }
    })
});



$("#videoModal").on('hidden.bs.modal', function (e) {
    $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
});


$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $('.sticky-header').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 10) {
    $('.sticky-header').removeClass('navbar-fixed');
  }
});


