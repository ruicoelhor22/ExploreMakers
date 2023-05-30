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


const email = document.getElementById('email');
const password = document.getElementById('password');
const botaoLogin = document.getElementById('loginbtn');

//teste


botaoLogin.addEventListener('click', (event) =>{
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('visitantes'));
    const filtro = users.filter(post => post.email == email.value);
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");
    let tipoTour = urlParams.get("tipoTour");
    console.log(tipoTour)
    
    if(filtro.lenght !== 0){
        if(password.value === filtro[0].password){
            localStorage.setItem("userLogado", JSON.stringify(filtro[0]));
            window.location.href = 'marcacaodata.html?cidade=' + cidade + "&tipoTour=" + tipoTour;
        }else{
            alert('Senha Invalida');
        }
    }else{
        alert("Email não existe");
    }
})


