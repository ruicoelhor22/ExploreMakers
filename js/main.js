

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


/*----------------------*/
/* Back to top button */

/* Tentativa de log in*/
/*
function store() {

  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (email.value.length == 0) {
    alert('Please fill in email');

  } else if (password.value.length == 0) {
    alert('Please fill in password');

  } else if (email.value.length == 0 && password.value.length == 0) {
    alert('Please fill in email and password');

  } else {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    alert('Your account has been created');
  }
}

//checking
function check() {
  var storedName = localStorage.getItem('email');
  var storedPw = localStorage.getItem('password');

  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');
  var userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw) {
    alert('You are logged in.');
  } else {
    alert('Error on login');
  }
}*/

/* End login*/

/* local storage cidades*/
/*let cidadesLista = JSON.parse(localStorage.getItem("cidades"));

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
*/
/*Ir buscar id do tipo de tour */
/*let tipoTourBotao = document.getElementById("tipoTourBotao")

tipoTourBotao.addEventListener("click", function () {
  const urlParamsl = new URLSearchParams(window.location.search);
  let tipoTour = urlParamsl.get("tour")

  window.location.href = "marcacaodata.html?cidade=" + cidade.nome + "&tipoTour=" + tipoTour.nome;

  alert(tipoTour)
});*/


//





    //console.log(lista);
    //document.getElementById("maritmos").innerHTML = lista;
    //document.getElementById("maritmos").innerHTML
/* end local storage cidades */


  /*Codigo para popup dos pagamentoa*/

  function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
  }
  
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }
 
/*Fim codigo do popup dos pagamentos*/

/*Codigo para o email

  function enviarEmail(popupId) {
    // Obter o valor do campo de email preenchido pelo usuário
    var email = document.getElementById('email').value;

    // Obter os valores dos outros campos do formulário, se necessário
    var contacto = document.getElementById('contact').value;

    // Construir o corpo do email com os valores do formulário
    var corpoEmail = "Detalhes do cliente:\n\n" +
                     "Email: " + email + "\n" +
                     "Contacto: " + contacto;

    // Enviar o email usando o protocolo "mailto:" com o email do usuário como destinatário
    window.location.href = "mailto:" + email + "?subject=Pagamento&body=" + encodeURIComponent(corpoEmail);

    // Fechar o popup após enviar o email
    closePopup(popupId);
  } */

/*function enviarEmail() {
  // Obter o valor do campo de email preenchido pelo usuário
  var email = document.getElementById('email').value;

  // Obter o valor do campo de contato preenchido pelo usuário
  var contato = document.getElementById('contact').value;

  // Construir o corpo do email com os valores do formulário
  var corpoEmail = "Detalhes do cliente:\n\n" +
                   "Email: " + email + "\n" +
                   "Contato: " + contato;

  // Enviar o email usando o protocolo "mailto:" com o email do usuário como destinatário
  window.location.href = "mailto:" + email + "?subject=Pagamento&body=" + encodeURIComponent(corpoEmail);

  // Fechar o popup após enviar o email
  closePopup('popup1');
}*/

  /*Fim codigo email*/
