//Botão de seleção de plataforma para verificar quando o usuário clicar
const botao = document.querySelector(".btn-plataforma");

//Pegar o elemento que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Pegar o clique do usuário
botao.addEventListener("click", () => {

    elementoPlataformas.classList.toggle("ativo");
  
});

