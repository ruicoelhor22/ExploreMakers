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


let avaliacoesLista = JSON.parse(localStorage.getItem("avaliacoes"));

avaliacoesLista.forEach(avaliacao => {
  let html = `
    <div class="col-md-4">
      <div class="text-center pb-4">
        <img class="img-fluid mx-auto" src="${avaliacao.imagem1}" style="width: 100px; height: 100px;">
        <div class="testimonial-text bg-white p-4 mt-n5">
          <p class="mt-5">${avaliacao.descricao}</p>
          <h5 class="text-truncate">${avaliacao.nome}</h5>
          <span>${avaliacao.profissao}</span>
        </div>
      </div>
    </div>
  `;

  document.querySelector("#listaAvaliacoes .row").innerHTML += html;
});





/*function criarDepoimentoElement(avaliacao) {
    const depoimentoElement = document.createElement('div');
    depoimentoElement.classList.add('owl-item');

    const conteudoDepoimento = `
        <div class="text-center pb-4">
            <img class="img-fluid mx-auto" src="${avaliacao.imagem1}" style="width: 100px; height: 100px;">
            <div class="testimonial-text bg-white p-4 mt-n5">
                <p class="mt-5">${avaliacao.descricao}</p>
                <h5 class="text-truncate">${avaliacao.nome}</h5>
                <span>${avaliacao.profissao}</span>
            </div>
        </div>
    `;

    depoimentoElement.innerHTML = conteudoDepoimento;
    return depoimentoElement;
}

// Selecionar o elemento do carrossel
const carrosselElement = document.getElementById('listaAvaliacoes');

// Adicionar cada depoimento ao carrossel
avaliacoes.forEach(avaliacao => {
    const depoimentoElement = criarDepoimentoElement(avaliacao);
    carrosselElement.appendChild(depoimentoElement);
});*/
/*
// Atribuir eventos de clique aos elementos <a> existentes
avaliacoesLista.forEach(cidade => {
  let cidadeLink = document.querySelector(`.cidade-${cidade.nome}`);
  
  cidadeLink.addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href = 'cidades.html?cidade=' + cidade.nome;
    // Ou você pode redirecionar para uma página diferente com base na cidade clicada
    // window.location.href = `pagina-cidade.html?cidade=${cidade.nome}`;
  });
});*/