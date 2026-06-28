const dados = {
  flor: {
    titulo: "🌸 Flor do Maracujá",
    texto: "A flor do maracujá é essencial para formar o fruto. Ela precisa ser polinizada para gerar o maracujá."
  },

  polinizacao: {
    titulo: "🐝 Polinização",
    texto: "A polinização pode ser feita por insetos, principalmente abelhas grandes chamadas mamangavas."
  },

  beneficios: {
    titulo: "🧪 Benefícios",
    texto: "O maracujá possui vitaminas, fibras e antioxidantes, podendo fazer parte de uma alimentação equilibrada."
  },

  curiosidades: {
    titulo: "🍹 Curiosidades",
    texto: "O maracujá é muito usado em sucos, doces, mousses e produtos naturais. O Brasil é um grande produtor da fruta."
  }
};

function mostrarInfo(tipo){
  document.getElementById("titulo").textContent = dados[tipo].titulo;
  document.getElementById("texto").textContent = dados[tipo].texto;
  document.getElementById("painel").classList.add("ativo");

  const menu = document.getElementById("menuAR");

  if(menu){
    menu.classList.remove("ativo");
  }
}

function fecharPainel(){
  document.getElementById("painel").classList.remove("ativo");
}function alternarMenuAR(){
  const menu = document.getElementById("menuAR");

  if(menu){
    menu.classList.toggle("ativo");
  }
}