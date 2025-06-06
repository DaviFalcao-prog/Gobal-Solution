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
