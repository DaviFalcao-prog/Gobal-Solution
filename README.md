-------GlobalSolution-------



# HydroShield 🌊🚨

Plataforma web **100 % em HTML, CSS e JavaScript puro** desenvolvida para a *Global Solution* (FIAP) com o objetivo de **conscientizar, monitorar e alertar** sobre enchentes no Brasil.

> “Antecipe o problema. Proteja o futuro.”

---

## 🆘 Contextualização do Problema

* Entre **1991 e 2022**, o Brasil registrou **+21 mil inundações**, afetando 110 milhões de pessoas (Atlas Brasileiro de Desastres Naturais).
* O país gasta em média **R\$ 8 bilhões por ano** com danos diretos; eventos recentes no RS ultrapassaram **R\$ 20 bi**.
* Faltam políticas de prevenção, mapeamento de risco atualizado e alertas eficientes.

**HydroShield** mostra, de forma interativa, como tecnologias como **IoT**, **IA preditiva** e **sensoriamento remoto** podem reduzir mortes e prejuízos.

---

## 🎯 Objetivo do Projeto

1. **Landing Page informativa** com 6 seções concisas (problema, tecnologias, objetivos, público-alvo, benefícios, benefício ao usuário).
2. **Funcionalidades WebDev** exigidas pela disciplina:

   * Slideshow com 3 imagens
   * Menu hambúrguer responsivo
   * Quiz interativo com 10 perguntas
   * Seletor de cores (3 temas)
   * Validação de formulário (contato/alertas)
3. Código **modular, comentado** e **versionado** em branches.

---

## ⚙️ Funcionalidades Principais

| Recurso                   | Descrição rápida                                             |
| ------------------------- | ------------------------------------------------------------ |
| 🚀 **Slideshow**          | Destaques visuais sobre IA, sensores IoT e impacto social    |
| 🎨 **Seletor de temas**   | Ícones no navbar alternam a cor de fundo (`CSS variables`)   |
| ☰ **Menu hambúrguer**     | Abre/fecha via JS; acessível em telas < 1000 px              |
| ❓ **Quiz (quiz.html)**    | 10 questões de múltipla escolha + placar final               |
| 📝 **Formulário contato** | Campos obrigatórios validados em JS (`required` + checagem)  |
| 🌐 **Responsive Design**  | Flexbox em toda a estrutura, imagens com `object-fit: cover` |
| ♿ **Acessibilidade**      | Alt em todas as imagens, contraste, navegação por teclado    |

---

## 🗂️ Estrutura de Pastas

```
.
├── index.html         # Landing page principal
├── quiz.html          # Quiz sobre enchentes
├── app.js             # Scripts gerais (menu, slideshow, cores)
├── quiz.js            # Lógica do quiz
├── assets/
│   ├── style.css      # Estilos globais
│   ├── quiz.css       # Estilos do quiz
│   ├── font/          # Fonte Caveat (variable)
│   └── image/         # Ícones, slides, favicon
└── equipe.txt         # Nomes e RMs
```

---

## 🚀 Como Executar Localmente

```bash
# clone o repositório
git clone https://github.com/Global-Solution-ESPY-2025/Front-End.git
cd Front-End

# opção 1: abrir index.html (duplo clique)
# opção 2: servir localmente
npx serve .
# depois acesse http://localhost:3000
```

> 📌 Não necessita de dependências; basta um navegador moderno.

---

## ✅ Checklist de Requisitos Atendidos

* [x] 6 seções concisas (≤ 20 palavras/parágrafo)
* [x] Navbar com scroll suave e destaque da seção atual
* [x] Flexbox em toda a página
* [x] Variáveis CSS + reset global
* [x] Slideshow 3 imagens
* [x] Menu hambúrguer responsivo
* [x] Quiz 10 perguntas com pontuação
* [x] Seletor de cor de fundo (3 temas)
* [x] Formulário com validação
* [x] Imagens com `alt` descritivo
* [x] 15+ commits e branches organizados
* [x] `equipe.txt` com RMs + link do repositório

---

## 👥 Créditos / Equipe

| Nome                       | RM     | Função                |
| -------------------------- | ------ | --------------------- |
| **Davi Melo Muniz Falcão** | 561818 | Front-End, WebDev, UI |
| **Mateus Saavedra**        | 563266 | Conteúdo, Imagens, UX |

---

### Licença

Projeto acadêmico – uso livre para fins educativos. Cite a equipe HydroShield se reutilizar partes significativas do código ou design.
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

