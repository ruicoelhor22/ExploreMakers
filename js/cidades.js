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

window.onload = function carregarInformaco() {

  const urlParamsl = new URLSearchParams(window.location.search);
  let nomeCidade = urlParamsl.get("cidade")

  let cidades2 = JSON.parse(localStorage.getItem("cidades"));
  let cidade = cidades2.find(c => c.nome == nomeCidade)

  carregarInformacoCidade(cidade)
}

function carregarInformacoCidade(cidade) {

  let html =
    '<div class="container-fluid " style="background: url(' + cidade.imagem1 + '), no-repeat center center; background-size:cover; background-position: center top 40%; ">' +
    '<div class="container py-5">' +
    '<div class="d-flex flex-column align-items-center mt-5" style="min-height: 400px">' +
    '<div class="d-inline-flex text-white">' +

    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="container-fluid py-1">' +
    '<div class="container pt-5 pb-1">' +
    '<div class="text-center mb-1 pb-1">' +
    '<h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">' + cidade.nome1 + '</h6>' +
    '<h1 class="text-black">Explore <span class="text-primary"> ' + cidade.nome1 + '</span> como um especialista!</h1>' +
    '</div>' +
    '</div>' +
    '</div>' +

    '<hr style="width: 50%; height: 0.5rem; background-color: #187C3A; border: none; margin: 2rem auto;">' +

    '<div class="text-center px-5 py-1 textoguias">' +
    '<p>' + cidade.descricao + '</p>' +
    '</div>' +
    '<div class="container-fluid py-1">' +
    '<center>' +
    '<div class="d-flex justify-content-center">' +
    '<btn id="reservarBotao"href="" class="btn btn-primary py-md-3 px-md-5 mt-2" type="button">Reserva a tua visita</btn>' +
    '</div>' +
    '</center>' +

    '</div>' +


    '<div class="container-fluid " style="background: url(' + cidade.imagem2 + '), no-repeat center center; background-size:cover; background-position: center top 40%; margin-top: 7%;">' +
    '<div class="container py-5">' +
    '<div class="d-flex flex-column align-items-center mt-5" style="min-height: 400px">' +
    '<div class="d-inline-flex text-white">' +
    '<div class="column2 py-5">' +
    '<h2 class="text-md-left text-white ">Descubra os segredos ' + cidade.nome1 + '!' +
    '</h2>' +
    '</div>' +
    '<div class="column2 py-5">' +
    '<h2 class="text-right text-white  ml-5">Aprenda a sua história, cultura e tradições. </h2>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';

  document.getElementById("cidades").innerHTML += html;


  let reservarBotao = document.getElementById("reservarBotao")

  reservarBotao.addEventListener("click", function () {
    const urlParamsl = new URLSearchParams(window.location.search);
    let nomeCidade = urlParamsl.get("cidade")

    window.location.href = 'tipotour.html?cidade=' + nomeCidade;
    alert(nomeCidade)
  });
}

