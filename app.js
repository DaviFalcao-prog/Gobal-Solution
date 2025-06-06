const seletor = document.getElementById('colorPicker');

const navLinks = document.querySelectorAll('.navbar a');
const allSections = document.querySelectorAll('section');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href'); 
    const section = document.querySelector(id);
    if (!section) return;

    //centraliza a seção na tela
    const y =
      section.offsetTop -
      (window.innerHeight / 2 - section.offsetHeight / 2);

    window.scrollTo({ top: y});

    //Animação de Destaque das seções, achei que ficou legal então vou deixar comentado aqui.
    //section.classList.add('flash');
    //setTimeout(() => section.classList.remove('flash'), 1000);
  });
});
//Configurando menu hamburguer
const burger   = document.getElementById('hamburger-menu');
const listaLink = document.getElementById('nav-links');
const iconMenu = document.querySelector('.icone-menu');
const iconClose = document.querySelector('.icone-fechado');

//Abre o menu hamburguer ao clicar no icone
burger.addEventListener('click', function() {
  const isOpen = listaLink.classList.contains('open');
  iconClose.style.display = isOpen ? 'none' : 'block';
  iconMenu.style.display = isOpen ? 'block' : 'none';
  listaLink.classList.toggle('open');
  burger.classList.toggle('active');

});

//Fecha menu hamburguer ao clicar em um link
listaLink.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', () => {
    listaLink.classList.remove('open');
    burger.classList.remove('active');
  });
});


//Configurando sistema de SlideShow
const slides  = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('proximo');
const prevBtn = document.getElementById('anterior');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  currentIndex = index;
}

nextBtn.addEventListener('click', function() {
  showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', function() {
  showSlide(currentIndex - 1);
});
