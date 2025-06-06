//Configurando resultado Quiz
const formulario = document.querySelector('.questions');
const resultado = document.getElementById('resultado');
const correcao = {
    p1: 'c',
    p2: 'a',
    p3: 'c',
    p4: 'b',
    p5: 'a',
    p6: 'b',
    p7: 'b',
    p8: 'b',
    p9: 'b',
    p10: 'a'
}

  
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    


    // Calcula a pontuação
    let pontos = 0;

    for (let i = 1; i <= 10; i++) {
        const resposta = formulario.querySelector(`input[name="p${i}"]:checked`);
        if(!resposta){
          alert("Por favor, responda todas as perguntas antes de enviar o formulário.");
          return;
       }
        if (resposta && resposta.value === correcao[`p${i}`]) {
            pontos++;
        }
      }
      resultado.style.display = 'block';
      resultado.textContent = `Você acertou ${pontos} de 10 questões.`;
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

//configurando seleção de cor do fundo
const seletor = document.getElementById('colorPicker');
seletor.addEventListener("change", function() {
  let corSelecionada = seletor.value;
  const body = document.querySelector('body');
  body.style.backgroundColor = corSelecionada;
});
