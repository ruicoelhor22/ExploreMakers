(function ($) {
    "use strict";
  
    // Dropdown on mouse hover
    $(document).ready(function () {
      function toggleNavbarMethod() {
        if ($(window).width() > 992) {
          $('.navbar .dropdown').on('mouseover', function () {
            $('.dropdown-toggle', this).trigger('click');
          }).on('mouseout', function () {
            $('.dropdown-toggle', this).trigger('click').blur();
          });
        } else {
          $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
      }
      toggleNavbarMethod();
      $(window).resize(toggleNavbarMethod);
    });
  
  
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
  
  
    // Date and time picker
    $('.date').datetimepicker({
      format: 'L'
    });
    $('.time').datetimepicker({
      format: 'LT'
    });
  
  
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      margin: 30,
      dots: true,
      loop: true,
      center: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  
  })(jQuery);




let tuk1hBotao = document.getElementById("tuk1h")
tuk1hBotao.addEventListener("click", function(event) {
  
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "../login1.html?cidade=" + cidade + "&tipoTour=tuk1h";


});

let tuk2hBotao = document.getElementById("tuk2h")
tuk2hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "login1.html?cidade=" + cidade + "&tipoTour=tuk2h";

});

let tuk3hBotao = document.getElementById("tuk3h")
tuk3hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "login1.html?cidade=" + cidade + "&tipoTour=tuk3h";

});

let pe1hBotao = document.getElementById("pe1h")
pe1hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "login1.html?cidade=" + cidade + "&tipoTour=pe1h";

});

let pe2hBotao = document.getElementById("pe2h")
pe2hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "login1.html?cidade=" + cidade + "&tipoTour=pe2h";

});

let pe3hBotao = document.getElementById("pe3h")
pe3hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "login1.html?cidade=" + cidade + "&tipoTour=pe3h";

});

