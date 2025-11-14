//Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
});

// Ativar itens do Orçamento
const parametros = new URLSearchParams(location.search);

parametros.forEach((parametro) => {
  const elemento = document.getElementById(parametro);
  console.log(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", (e) => {
    const pergunta = e.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
  });
});

//Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", (e) => {
    const img = e.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  });
});

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
