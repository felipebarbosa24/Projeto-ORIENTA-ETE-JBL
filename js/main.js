

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('#study-container .col-12');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('.plan-card h2').textContent.toLowerCase();
            if (title.includes(filter)) {
                card.style.display = 'block'; // mostra o card
            } else {
                card.style.display = 'none'; // esconde o card
            }
        });
    });
});


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
    var $headerCarousel = $(".header-carousel");
    $headerCarousel.owlCarousel({
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 600,       // tempo da transição em ms
        slideTransition: 'linear', // transição de slide contínua
        dots: true,
        loop: true,
        nav : true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // Função que ajusta os handlers e os ícones dos botões do header-carousel
    function setupHeaderNav() {
        // busca os botões gerados pelo Owl
        var $navPrev = $headerCarousel.find('.owl-prev');
        var $navNext = $headerCarousel.find('.owl-next');

        if ($navPrev.length === 0 || $navNext.length === 0) return;

        // determina qual botão está mais à esquerda na tela
        var prevLeft = ($navPrev.offset() && $navPrev.offset().left) ? $navPrev.offset().left : Infinity;
        var nextLeft = ($navNext.offset() && $navNext.offset().left) ? $navNext.offset().left : Infinity;

        var $leftBtn = prevLeft < nextLeft ? $navPrev : $navNext;
        var $rightBtn = prevLeft < nextLeft ? $navNext : $navPrev;

        // remove event handlers antigos (os ligados pelo Owl)
        try {
            $navPrev.off('click touchstart');
            $navNext.off('click touchstart');
        } catch (e) {
            // ignore se algo falhar no off
        }

        // adiciona handlers claros: clique no botão da esquerda => prev, clique na direita => next
        $leftBtn.on('click.headerNav', function (e) {
            e.preventDefault();
            $headerCarousel.trigger('prev.owl.carousel');
        });
        $rightBtn.on('click.headerNav', function (e) {
            e.preventDefault();
            $headerCarousel.trigger('next.owl.carousel');
        });

        // atualiza os ícones visuais para combinar com a posição
        $leftBtn.html('<i class="bi bi-arrow-left"></i>');
        $rightBtn.html('<i class="bi bi-arrow-right"></i>');
    }

    // chama quando o carousel for inicializado/refrescado
    $headerCarousel.on('initialized.owl.carousel refreshed.owl.carousel', function () {
        // pequeno timeout para garantir que o DOM e estilos foram aplicados
        setTimeout(setupHeaderNav, 20);
    });

    // tentativa imediata (caso já esteja inicializado)
    setTimeout(setupHeaderNav, 50);

    // reajusta após redimensionamento (debounce)
    var resizeTimer;
    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            setupHeaderNav();
        }, 150);
    });


    // testimonial carousel (mantive com comportamento padrão)
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>'
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

    //Enem Score Universitie Information Start

document.addEventListener("DOMContentLoaded", () => {
  // ---- Modal Universidades ----
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
  const closeModal = document.getElementById("modal-enem-close");

  document.querySelectorAll(".enem-score-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const universidade = btn.getAttribute("data-university");
      modalTitle.textContent = universidade;

      const notas = universidadesNotas[universidade];
      if (notas) {
        let tableHTML = "<table class='table table-striped'><thead><tr>";
        notas[0].forEach(header => {
          tableHTML += `<th>${header}</th>`;
        });
        tableHTML += "</tr></thead><tbody>";
        for (let i = 1; i < notas.length; i++) {
          tableHTML += "<tr>";
          notas[i].forEach(cell => {
            tableHTML += `<td>${cell}</td>`;
          });
          tableHTML += "</tr>";
        }
        tableHTML += "</tbody></table>";
        modalTable.innerHTML = tableHTML;
      }

      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
    //Enem Score Universitie Information End

})(jQuery);

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

const showPopup = document.querySelector(".show-popup");
const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close-popup-btn");

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
}

const accordions = document.querySelectorAll('.accordion-study');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})

  const div1 = document.getElementById('div1-res');
  const div2 = document.getElementById('div2-res');

  document.getElementById('showDiv1-res').addEventListener('click', () => {
    div1.classList.add('active');
    div2.classList.remove('active');
  });

  document.getElementById('showDiv2-res').addEventListener('click', () => {
    div1.classList.remove('active');
    div2.classList.add('active');
  });