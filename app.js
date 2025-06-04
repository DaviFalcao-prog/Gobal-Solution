const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href'); 
    const section = document.querySelector(id);
    if (!section) return;                  

    const y =
      section.offsetTop -
      (window.innerHeight / 2 - section.offsetHeight / 2);

    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});
