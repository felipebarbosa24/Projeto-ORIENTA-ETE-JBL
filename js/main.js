(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    // Initiate the wowjs
    new WOW().init();
    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm').css('top', '0px');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm').css('top', '-100px');
        }
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-right"></i>',
            '<i class="bi bi-arrow-left"></i>'
        ],
    });

//Enem Score Universitie Information Start

const universidadesNotas = {
    "Universidade Federal De Pernambuco (UFPE)": [
        ["Curso", "Modalidade", "Nota de Corte"],
        ["Medicina", "Ampla Concorrência", 790],
        ["Engenharia Civil", "Ampla Concorrência", 720],
        ["Direito", "Ampla Concorrência", 700]
    ],
    "Universidade Federal Rural De Pernambuco (UFRPE)": [
        ["Curso", "Modalidade", "Nota de Corte"],
        ["Medicina Veterinária", "Ampla Concorrência", 740],
        ["Engenharia Agronômica", "Ampla Concorrência", 680],
        ["Zootecnia", "Ampla Concorrência", 650]
    ],
    "Universidade Federal Do Vale Do São Francisco (UNIVASF)": [
        ["Curso", "Modalidade", "Nota de Corte"],
        ["Engenharia Civil", "Ampla Concorrência", 640],
        ["Enfermagem", "Ampla Concorrência", 610]
    ]
};


const modal = document.getElementById("modal-enem");
const modalTitle = document.getElementById("modal-university-title");
const modalTable = document.getElementById("modal-table-container");
const closeModal = document.querySelector(".modal-enem-close");


document.querySelectorAll(".universities").forEach(li => {
    li.addEventListener("click", function() {
        const uniName = li.textContent.trim();
        modalTitle.textContent = uniName;


        const notas = universidadesNotas[uniName];
        if (notas) {
            let tableHTML = "<table>";
            notas.forEach((row, i) => {
                tableHTML += "<tr>";
                row.forEach(cell => {
                    tableHTML += i === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`;
                });
                tableHTML += "</tr>";
            });
            tableHTML += "</table>";
            modalTable.innerHTML = tableHTML;
        } else {
            modalTable.innerHTML = "<p>Sem dados disponíveis</p>";
        }

        modal.style.display = "block";
    });
});


closeModal.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//Enem Scor Universitie Information End

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-arrow-right"></i>',
            '<i class="fa fa-arrow-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// Inicializa o carrossel Swiper para a seção "Nosso Time"
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30, // espaçamento entre slides
  autoplay: {
    delay: 5000, // troca automática a cada 5s
    disableOnInteraction: false, // continua após interação
  },
  speed: 800, // velocidade da transição
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // permite clicar nas bolinhas
  },
  navigation: {
    nextEl: ".swiper-button-next", // seta direita
    prevEl: ".swiper-button-prev", // seta esquerda
  },
  loop: false, // não repete infinito
  loopFillGroupWithBlank: false,
  breakpoints: {
    0: { // mobile
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: false
    },
    769: { // desktop
      slidesPerView: 2,
      slidesPerGroup: 2,
      centerInsufficientSlides: true // centraliza último slide se faltar
    }
  }
});

// Enem Score Page Search Start

function search(){
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase()
  let x = document.getElementsByClassName('universities')

  for(i = 0; i < x.length; i++){
    if(!x[i].innerHTML.toLowerCase().includes(input)){
      x[i].style.display = "none"
    }else{
      x[i].style.display = "list-item"
    }
  }
}


//Enem Score Page Search End

// Anima slides quando entram na tela
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // aplica classe visível
        observer.unobserve(entry.target); // anima apenas uma vez
      }
    });
  }, { threshold: 0.2 }); // só dispara quando 20% visível

  // Aplica o observador a todos os slides da seção
  document.querySelectorAll('#team-container .swiper-slide').forEach(slide => {
    slide.classList.add('animate-on-scroll'); // classe inicial
    observer.observe(slide);
  });
});

