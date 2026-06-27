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
  document.getElementById("painel").style.display = "block";
}

function fecharPainel(){
  document.getElementById("painel").style.display = "none";
}function mostrarCuriosidade(){
  const popup = document.getElementById("popupCuriosidade");
  const som = document.getElementById("somClique");

  if(som){
    som.currentTime = 0;
    som.play();
  }

  popup.classList.add("ativo");
}

function fecharCuriosidade(){
  document.getElementById("popupCuriosidade").classList.remove("ativo");
}const informacoes = {

  flor: {
    titulo: "🌸 Flor",
    texto: "A flor do maracujá é uma das mais bonitas da natureza. Ela possui estruturas masculinas e femininas e depende principalmente das mamangavas para a polinização."
  },

  polinizacao: {
    titulo: "🐝 Polinização",
    texto: "A polinização acontece quando as abelhas transportam o pólen entre as flores, permitindo a formação dos frutos."
  },

  beneficios: {
    titulo: "🧪 Benefícios",
    texto: "O maracujá é rico em vitamina C, fibras, antioxidantes e ajuda no fortalecimento do sistema imunológico."
  },

  curiosidades: {
    titulo: "🍹 Curiosidades",
    texto: "O Brasil é um dos maiores produtores de maracujá do mundo. A fruta é utilizada em sucos, doces, sorvetes e medicamentos."
  }

};

function mostrarInfo(tipo){

    document.getElementById("titulo").innerHTML =
    informacoes[tipo].titulo;

    document.getElementById("texto").innerHTML =
    informacoes[tipo].texto;

    document.getElementById("painel").style.display = "block";

}

function fecharPainel(){

    document.getElementById("painel").style.display = "none";

}