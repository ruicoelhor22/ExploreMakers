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


function openPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}


let reservasTemp = JSON.parse(localStorage.getItem('reservasTemp'))
let reservas = JSON.parse(localStorage.getItem('reservas'))


function pagar() {
  // Find the element to move
  var elementToMove = reservasTemp[reservasTemp.length - 1]; // Assuming you want to move the first element
  console.log(elementToMove)

  // Move the element to reservas
  if (! reservas.includes(elementToMove)) {
    reservas.push(elementToMove)
  }
  

  // Remove the element from reservasTemp
  localStorage.removeItem('reservasTemp');
  localStorage.setItem('reservas', JSON.stringify(reservas));
  window.location.href = "perfil.html";

  console.log("Element moved successfully.");
}

// Attach the function to the button click event
let pagarButton1 = document.getElementById("pagarBtn1");
let pagarButton2 = document.getElementById("pagarBtn2");

pagarButton1.addEventListener("click", pagar);
pagarButton2.addEventListener("click", pagar);


