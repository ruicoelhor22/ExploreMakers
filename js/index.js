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


let cidadesLista = JSON.parse(localStorage.getItem("cidades"));

cidadesLista.forEach(cidade => {
  let html = `<div class="col-md-4 mb-4"> 
    <div class="destination-item position-relative overflow-hidden mb-2"> 
    <img class="img-fluid" src="${cidade.imagem1}" alt=""> 
    <a class="destination-overlay text-white text-decoration-none cidade-${cidade.nome}">
    <h3 class="text-white">${cidade.nome}</h4>
    </a>
    </div>
    </div>`;

  document.getElementById("listaCidades").innerHTML += html;
});

// Atribuir eventos de clique aos elementos <a> existentes
cidadesLista.forEach(cidade => {
  let cidadeLink = document.querySelector(`.cidade-${cidade.nome}`);
  
  cidadeLink.addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href = 'cidades.html?cidade=' + cidade.nome;
    // Ou você pode redirecionar para uma página diferente com base na cidade clicada
    // window.location.href = `pagina-cidade.html?cidade=${cidade.nome}`;
  });
});