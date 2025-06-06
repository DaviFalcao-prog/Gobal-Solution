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
// cache elements once
const burger   = document.getElementById('hamburger-menu');
const listaLink = document.getElementById('nav-links');

// toggle menu
burger.addEventListener('click', () => {
  listaLink.classList.toggle('open');     // show / hide links
  burger.classList.toggle('active');     // swap icons
});

// close menu when a link is clicked (mobile UX)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    listaLink.classList.remove('open');
    burger.classList.remove('active');
  });
});
