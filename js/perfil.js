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



const userLg = JSON.parse(localStorage.getItem('userLogado'));

const nome = document.getElementById('nome');
nome.innerHTML = userLg.nome;

const email = document.getElementById('email');
email.innerHTML = userLg.email;

const contacto = document.getElementById('contacto');
contacto.innerHTML = userLg.contacto;

const pais = document.getElementById('pais');
pais.innerHTML = userLg.pais;

const profissao = document.getElementById('profissao');
profissao.innerHTML = userLg.profissao;

const logout = document.getElementById('logout');
logout.addEventListener('click', ()=> {
    localStorage.removeItem('userLogado');
    //localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
    window.location.href = 'index.html';
})


/*let avaliacao = JSON.parse(localStorage.getItem("avaliacoes")) || [];

function enviarAv(event){

    //event.preventDefault();
   
    let av = document.getElementById('av');
    //let av = localStorage.getItem('av');
    let nome = document.getElementById('nome');
    let profissao = document.getElementById('profissao');
    let foto = "img\mirna.jpg";

    

    let novaAv = { "descricao": av, "nome": nome, "profissao": profissao, "imagem1": foto}
    avaliacao.push(novaAv); 
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacao));
    alert('A sua avaliação foi registada');
    
}


// Registar evento de clique no botão de registo 
document.getElementById("enviarAv").addEventListener("click", enviarAv());*/

let avaliacao = JSON.parse(localStorage.getItem("avaliacoes")) || [];

function enviarAv(event) {
    event.preventDefault();
   
    let av = document.getElementById('av').value;
    //let nome = document.getElementById('nome').value;
    let nome = userLg.nome
    let profissao = userLg.profissao;
    let foto = "img/user.png";

    if (av.length < 5) {
        alert('A avaliação deve ter pelo menos 5 caracteres!');
        return;
    }

    let novaAv = {"nome": nome, "profissao": profissao, "descricao": av, "imagem1": foto }
    avaliacao.push(novaAv); 
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacao));
    alert('A sua avaliação foi registada');
}

// Register event listener for the click event
document.getElementById("enviarAv").addEventListener("click", enviarAv);


function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
  }
  
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }
 

let reservas1 = JSON.parse(localStorage.getItem("reservas"));
let cidadesLista = JSON.parse(localStorage.getItem("cidades"));
let user = JSON.parse(localStorage.getItem("userLogado"));
let reservas2 = reservas1.filter(post => post.events[0].emailvis === user.email);

reservas2.forEach(reserva => {
  let html = `
  <div class="row">
  <div class="col-md-12">
    <div class="card mb-4 mb-md-0">
      <div class="card-body">
        <p class="mb-2" style="font-size:x-large;"><span class="text-primary font-italic me-1"></span><strong>
            Reserva</strong></p>
        <div class="row">
          <div class="col-md-7">
            <div class="destination-item position-relative overflow-hidden mb-2">
            <img class="img-fluid" src="img/porto.jpg" alt="">
              <a class="destination-overlay text-white text-decoration-none" >
                <h3 class="text-white">${reserva.events[0].cidade}</h3>
              </a>
            </div>
          </div>
          <div class="col-md-5 d-flex align-items-center">
            <div class="">
              <p style="font-size:large;"><strong>Tipo de tour:</strong> ${reserva.events[0].tipo}</p>
              <p style="font-size:large;"><strong>Hora de inicio:</strong> ${reserva.events[0].horaInicio}</p>
              <p style="font-size:large;"><strong>Preço: </strong> ${reserva.events[0].preco} <strong> €.</strong></p>
              <p style="font-size:large;"><strong>Guia:</strong> Rui Fernandes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  console.log(reserva.tipo)

  document.querySelector("#reservas .row").innerHTML += html;
});
