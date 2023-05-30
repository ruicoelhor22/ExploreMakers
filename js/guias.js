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



let guiasLista = JSON.parse(localStorage.getItem("guias"));

guiasLista.forEach(guia => {
  let html = `
  <div class="col-lg-4 col-md-6 mb-4">
              <div class="destination-item position-relative overflow-hidden mb-2">
                  <!---->
                  
                      <div class="team-item bg-white mb-4">
                          <div class="team-img position-relative overflow-hidden">
                              <img class="img-fluid w-100" src="img/preston.jpeg" alt="">
                              <div class="team-social">
                                  <a class="btn btn-outline-primary btn-square" href=""><i class="fab fa-twitter"></i></a>
                                  <a class="btn btn-outline-primary btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                  <a class="btn btn-outline-primary btn-square" href=""><i class="fab fa-instagram"></i></a>
                                  <a class="btn btn-outline-primary btn-square" href=""><i class="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                          <div class="text-center py-4">
                              <h5 class="text-truncate">${guia.nome}</h5>
                              <p class="m-0">${guia.linguagens}</p>
                          </div>
                      </div>
              </div>
          </div>
  `;

  console.log(guia.nome)
  document.querySelector("#listaGuias .row").innerHTML += html;
});




   