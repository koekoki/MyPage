
const target = document.querySelectorAll('[data-fly]');
const animationClass = 'animate';

function animeScroll(){
    
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop){
            element.classList.add(animationClass);  
        }
        else{
            element.classList.remove(animationClass);
        }
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})

$(".icon-menu").click(function(){
  document.getElementById("quadrado").style.opacity = "1";
  document.getElementById("minhaLogo").src = "assets/fotos/LogoMinhaWhite.png";
  document.getElementById("html").style.overflowY = "hidden";
})

$(".icon-x, #fechar").click(function(){
  document.getElementById("quadrado").style.opacity = "0";
  document.getElementById("minhaLogo").src = "assets/fotos/LogoMinha.png";
  document.getElementById("html").style.overflowY = "visible";
})




    $( "#home .circulo" ).hover( function(){
        $(".circulo4, .circulo2, .circulo5, .circulo7").addClass(' hover');
    }, function(){
        $(".circulo4, .circulo2, .circulo5, .circulo7").removeClass(' hover');
    })

    $( "#home .circulo" ).hover( function(){
      $(".circulo3, .circulo6").addClass(' hover-mais');
  }, function(){
      $(".circulo3, .circulo6").removeClass(' hover-mais');
  })


/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    
})
}

/* mudar o header da página quando der scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
},
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
    1140:{
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true,
})


scrollReveal.reveal(
  `#home .image, #home .text,
  #sobre .image, #sobre .text,
  #projetos header, #contato p, #contato .links,
  #home .avatar, #sobre .title-2,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
