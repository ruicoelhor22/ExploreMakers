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

botaoLogin.addEventListener('click', (event) => {
  if (email.value === 'admin@admin.com' && password.value === 'admin') {
    window.location.href='https://ruicoelhor22.github.io/ExploreMakers_BO/';
  }
})


botaoLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem('visitantes'));
  const filtro = users.filter(post => post.email === email.value);
  if (filtro.lenght !== 0) {
    if (password.value === filtro[0].password) {
      localStorage.setItem("userLogado", JSON.stringify(filtro[0]));
      window.location.href = 'perfil.html';
    } else {
      alert('Senha Invalida');
    } 
  } else {
    alert("Email não existe");
  }
})

function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  const user = {
    email: data.email,
    password: '',
    nome: data.nome
  }
  let users = JSON.parse(localStorage.getItem('visitantes'));
  if (users) {
    const userFind = users.find(post => post.email === user.email);
    if (!userFind) {
      users.push(user);
      localStorage.setItem('visitantes', JSON.stringify(users));
    }
  } else {
    localStorage.setItem('visitantes', JSON.stringify([user]));
  }
  localStorage.setItem('userLogado', JSON.stringify(user));
  window.location.href = 'index.html';
}

window.onload = function () {

  google.accounts.id.initialize({
    client_id: "469107567117-fcd1tbc4qn4o3pb8h4ji4qi7k7k7q3t0.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("googlebtn"),
    { theme: "outline", size: "large" }  // customization attributes
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
}