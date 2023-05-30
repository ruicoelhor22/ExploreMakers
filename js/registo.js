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


let visitante = JSON.parse(localStorage.getItem("visitantes")) || [];
document.getElementById("registar").addEventListener("click", (event) =>{

    event.preventDefault();
   
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let contacto = document.getElementById('contacto').value;
    let password = document.getElementById('password').value;
    let pais = document.getElementById('pais').value;
    let profissao = document.getElementById('profissao').value;
    /*let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;*/
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(!emailValido){
        alert('Por favor, introduza um email válido');
        return;
    }

    if(!nome){
        alert('Por favor, preencha o campo de nome');
        return;
    }

    // Verificar se o utilizador já existe
    if(visitante.some(v => v.email === email)){
        alert('Já se registou um visitante com esse email');
        return;
    }

      

    if (password.length < 6 || !/\d/.test(password)) {
        alert("A senha deve ter pelo menos 6 caracteres e conter pelo menos 1 número.");
        return;
      }
      

    

    let novo = { "nome": nome, "email": email, "contacto": contacto, "password": password, "pais": pais, "profissao": profissao}
    visitante.push(novo); 
    localStorage.setItem("visitantes", JSON.stringify(visitante));
    alert('A sua conta foi criada');
    window.location.href = "login.html";
})  
console.log(document.getElementById("registar"))


// Registar evento de clique no botão de registo 
