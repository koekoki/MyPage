
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



///bolinhas////
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
  spaceBetween: 30,
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
  footer .brand, footer .social, #skills .title-2, #skills .white
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


///dark mode /////



const checkbox = document.getElementById('checkbox');
const hamburguer = document.getElementById('hamburguer');
const logo = document.getElementById("minhaLogo");
const menu = document.querySelector("nav")

if (menu.classList.contains('menu'))
$('.hamburguer').css({'backgound-color':'black'})

checkbox.addEventListener('change', () => { 
  document.body.classList.toggle('dark');
  var largura = window.innerWidth;
  if (checkbox.checked){
    
  logo.src = "assets/fotos/LogoMinhaWhite.png";
  

  
  if (largura > 800){
    $("#contato .container").css({'background-color':'hsl(var(--hue), 37%, 15%)'});
    }

  $("#projetos .card").hover(function(){
    $("#projetos .card:hover").css({'background':'hsl(var(--hue), 37%, 15%)'});
  }, function(){
    $("#projetos .card").css({'background':'transparent'});
  })
  $("#contato form textarea").css({'background':'hsl(var(--hue), 32%, 17%)'});
 
  }
  else{
    if (menu.classList.contains('show'))
    logo.src = "assets/fotos/LogoMinhaWhite.png";
    else
    logo.src = "assets/fotos/LogoMinha.png"
    if (largura < 900)
    logo.src = "assets/fotos/LogoMinha.png"
    $("#projetos .card").hover(function(){
      $("#projetos .card:hover").css({'background':'white'});
    }, function(){
      $("#projetos .card").css({'background':'transparent'});
    })
    $("#contato .container").css({'background-color':'transparent'});
    $("#contato form textarea").css({'background':'white'});
  }
})

///menu hamburguer/////

hamburguer.addEventListener('change', () => { 
  if (hamburguer.checked){
    var largura = window.innerWidth;
    document.getElementById("html").style.overflowY = "hidden";
    document.getElementById("quadrado").style.opacity = "1";

    if (largura > 800){
    logo.src = "assets/fotos/LogoMinhaWhite.png";
    }
 
  }
  else {
    document.getElementById("html").style.overflowY = "visible";
    document.getElementById("quadrado").style.opacity = "0";
    if (!checkbox.checked){
      logo.src = "assets/fotos/LogoMinha.png";
    }   
  }
})

function remover(){
  document.getElementById("html").style.overflowY = "visible";
  document.getElementById("quadrado").style.opacity = "0";
  $('#hamburguer').prop('checked', false);
  if (!checkbox.checked)
  logo.src = "assets/fotos/LogoMinha.png";
}





