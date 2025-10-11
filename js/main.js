

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('#study-container .col-12');

    searchInput.addEventListener('input', function () {
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
        nav: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        navText: [
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
        nav: true,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>'
        ],
        responsiveClass: true,
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
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
})(jQuery);


// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 5,
    time: 2000
});

//Enem Score Universitie Information Start

function initEnemModal() {
  const universidadesNotas = {
    "Universidade Federal De Pernambuco (UFPE)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Medicina", "Ampla Concorrência", 790],
      ["Engenharia Civil", "Ampla Concorrência", 720],
      ["Sistemas de Informação", "Ampla Concorrência", 802],
      ["Ciência da Computação", "Ampla Concorrência", 801],
      ["Artes Visuais", "Ampla Concorrência", 752],
      ["Engenharia Biomédica", "Ampla Concorrência", 749],
      ["Matemática", "Ampla Concorrência", 737],
      ["Psicologia", "Ampla Concorrência", 736],
      ["História", "Ampla Concorrência", 733],
      ["Biomedicina", "Ampla Concorrência", 732],
      ["Enfermagem", "Ampla Concorrência", 731],
      ["Engenharia de Controle e Automação", "Ampla Concorrência", 729],
      ["Engenharia Naval", "Ampla Concorrência", 726],
      ["Engenharia de Energia", "Ampla Concorrência", 724],
      ["Física", "Ampla Concorrência", 721],
      ["Jornalismo", "Ampla Concorrência", 720],
      ["Comunicação Social", "Ampla Concorrência", 720],
      ["Fisioterapia", "Ampla Concorrência", 718],
      ["Publicidade e Propaganda", "Ampla Concorrência", 717],
      ["Design", "Ampla Concorrência", 716],
      ["Nutrição", "Ampla Concorrência", 714],
      ["Cinema e Audiovisual", "Ampla Concorrência", 711],
      ["Odontologia", "Ampla Concorrência", 751],
      ["Turismo", "Ampla Concorrência", 508],
      ["Direito", "Ampla Concorrência", 700]
    ],
    "Universidade Federal Rural De Pernambuco (UFRPE)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Medicina Veterinária", "Ampla Concorrência", 740],
      ["Engenharia Agronômica", "Ampla Concorrência", 680],
      ["Ciência da Computação", "Ampla Concorrência", 739],
      ["Engenharia de Computação", "Ampla Concorrência", 696],
      ["Sistema de Informação", "Ampla Concorrência", 693],
      ["Administração", "Ampla Concorrência", 659],
      ["Ciências Biológicas", "Ampla Concorrência", 654],
      ["Computação", "Ampla Concorrência", 650],
      ["Ciências Econômicas", "Ampla Concorrência", 651],
      ["Gastronomia", "Ampla Concorrência", 646],
      ["História", "Ampla Concorrência", 643],
      ["Letras - Português e Inglês", "Ampla Concorrência", 643],
      ["Matemática", "Ampla Concorrência", 643],
      ["Engenharia Civil", "Ampla Concorrência", 630],
      ["Pedagogia", "Ampla Concorrência", 629],
      ["Engenharia Elétrica", "Ampla Concorrência", 620],
      ["Agronomia", "Ampla Concorrência", 619],
      ["Física", "Ampla Concorrência", 618],
      ["Zootecnia", "Ampla Concorrência", 650]
    ],
    "Universidade Federal Do Vale Do São Francisco (UNIVASF)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Engenharia Civil", "Ampla Concorrência", 640],
      ["Enfermagem", "Ampla Concorrência", 610],
      ["Engenharia de Computação", "Ampla Concorrência", 847],
      ["Farmácia", "Ampla Concorrência", 754],
      ["Psicologia", "Ampla Concorrência", 768],
      ["Medicina Veterinária", "Ampla Concorrência", 743],
      ["Engenharia Mecânica", "Ampla Concorrência", 743],
      ["Engenharia Agronômica", "Ampla Concorrência", 723],
      ["Engenharia de Produção", "Ampla Concorrência", 718],
      ["Administração", "Ampla Concorrência", 703],
      ["ABI - Educação Física", "Ampla Concorrência", 699],
      ["Artes Visuais", "Ampla Concorrência", 683],
      ["Zootecnica", "Ampla Concorrência", 641],
      ["Geologia", "Ampla Concorrência", 626],
      ["Ciências Sociais", "Ampla Concorrência", 624],
      ["Ciências Biológicas", "Ampla Concorrência", 619],
      ["Geologia", "Ampla Concorrência", 617],
      ["História", "Ampla Concorrência", 606],
      ["Ciências da Natureza", "Ampla Concorrência", 603],
      ["Medicina", "Ampla Concorrência", 860]
      
    ],
      "Universidade De Pernambuco (UPE)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Medicina", "Ampla Concorrência", 860],
      ["Odontologia", "Ampla Concorrência", 796],
      ["Direito", "Ampla Concorrência", 806],
      ["Psicologia", "Ampla Concorrência", 712],
      ["Enfermagem", "Ampla Concorrência", 698],
      ["Engenharia de Software", "Ampla Concorrência", 710]
    ],
    "Universidade Federal Do Ceará (UFC)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Ciência da Computação", "Ampla Concorrência", 767],
      ["Medicina", "Ampla Concorrência", 804],
      ["Direito", "Ampla Concorrência", 775],
      ["Filosofia", "Ampla Concorrência", 764],
      ["Engenharia de Computação", "Ampla Concorrência", 759],
      ["Administração", "Ampla Concorrência", 690]
    ],
    "Universidade Federal Da Bahia (UFBA)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Educação Física", "Ampla Concorrência", 672],
      ["Medicina", "Ampla Concorrência", 938],
      ["Psicologia", "Ampla Concorrência", 846]
    ],
    "Universidade Federal Do Rio Grande Do Norte (UFRN)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Direito", "Ampla Concorrência", 830],
      ["Medicina", "Ampla Concorrência", 927],
      ["Sistemas de Informação", "Ampla Concorrência", 799]
    ],
      "Universidade Federal Do Maranhão (UFMA)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Odontologia", "Ampla Concorrência", 735],
      ["Direito", "Ampla Concorrência", 726],
      ["Medicina", "Ampla Concorrência", 840]
    ],
    "Universidade Federal Do Piauí (UFPI)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Engenharia Civil", "Ampla Concorrência", 718],
      ["Medicina", "Ampla Concorrência", 805],
      ["Arquitetura e Urbanismo", "Ampla Concorrência", 707]
    ],
    "Universidade Federal De Sergipe (UFS)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Medicina", "Ampla Concorrência", 798],
      ["Ciência da Computação", "Ampla Concorrência", 759],
      ["Direito", "Ampla Concorrência", 772]
    ],
    "Universidade De São Paulo (USP)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Biomedicina", "Ampla Concorrência", 799],
      ["Direito", "Ampla Concorrência", 780],
      ["Engenharia Química", "Ampla Concorrência", 772]
    ],
    "Universidade Federal Do Rio De Janeiro (UFRJ)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Medicina", "Ampla Concorrência", 831],
      ["Odontologia", "Ampla Concorrência", 803],
      ["Engenharia de Computação e Informação", "Ampla Concorrência", 813]
    ],
    "Universidade Federal De Minas Gerais (UFMG)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Engenharia Aeroespacial", "Ampla Concorrência", 790],
      ["Ciência da Computação", "Ampla Concorrência", 789],
      ["Medicina", "Ampla Concorrência", 812]
    ],
    "Universidade De Brasília (UnB)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Ciências Naturais", "Ampla Concorrência", 541],
      ["Engenharia Mecânica", "Ampla Concorrência", 770],
      ["Medicina", "Ampla Concorrência", 819]
    ],
    "Universidade Federal De Santa Catarina (UFSC)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Ciência da Computação", "Ampla Concorrência", 809],
      ["Medicina", "Ampla Concorrência", 823],
      ["Engenharia Aeroespacial", "Ampla Concorrência", 796]
    ],
    "Universidade Federal Do Rio Grande Do Sul (UFRGS)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Teatro", "Ampla Concorrência", 793],
      ["Medicina", "Ampla Concorrência", 793],
      ["Biotecnologia", "Ampla Concorrência", 769]
    ],
    "Universidade Federal Do Paraná (UFPR)": [
      ["Curso", "Modalidade", "Nota de Corte"],
      ["Publicidade e Propaganda", "Ampla Concorrência", 778],
      ["Direito", "Ampla Concorrência", 774],
      ["Medicina", "Ampla Concorrência", 814]
    ]
  };

  const modal = document.getElementById("modal-enem");
  const modalTitle = document.getElementById("modal-university-title");
  const modalTable = document.getElementById("modal-table-container");
  const closeModal = document.querySelector(".modal-enem-close");

  if (!modal || !modalTitle || !modalTable || !closeModal) return;

  document.querySelectorAll(".universities").forEach(li => {
    li.addEventListener("click", () => {
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

  closeModal.onclick = () => modal.style.display = "none";
  window.onclick = event => {
    if (event.target === modal) modal.style.display = "none";
  };
}

initEnemModal();
//Enem Score Universitie Information End

//Class Schedule Search Start

function searchclass() {
  const raw = document.getElementById('searchbar').value || '';

  const normalize = (str) =>
    str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .replace(/[^0-9A-Z\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const expansions = {
    'ETE': 'ESCOLA TECNICA ESTADUAL',
    'ET': 'ESCOLA TECNICA'
  };

  const stopwords = new Set(['DE','DA','DO','DOS','DAS','E','O','A','EM','NA','NO','COM','POR','PELA','PELO']);

  // prepara input
  let input = normalize(raw);

  for (const key in expansions) {
    input = input.replace(new RegExp('\\b' + escapeRegExp(key) + '\\b', 'g'), expansions[key]);
  }

  let tokens = input.split(' ').filter(Boolean)
    .filter(t => t.length > 1 && !stopwords.has(t));

  const tables = document.querySelectorAll('.table-container-schedule');

  if (tokens.length === 0) {
    tables.forEach(t => t.style.display = '');
    return;
  }

  tables.forEach(table => {
    const headingEl = table.querySelector('.heading-schedule');
    if (!headingEl) {
      table.style.display = 'none';
      return;
    }

    let heading = normalize(headingEl.textContent || headingEl.innerText);

    for (const key in expansions) {
      heading = heading.replace(new RegExp('\\b' + escapeRegExp(key) + '\\b', 'g'), expansions[key]);
    }

    const matched = tokens.every(tok => heading.indexOf(tok) !== -1);

    table.style.display = matched ? '' : 'none';
  });
}

//Class Schedule Search End

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