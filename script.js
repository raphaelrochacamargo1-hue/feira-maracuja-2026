const perguntas = [
  {
    pergunta: "Qual animal ajuda muito na polinização do maracujá?",
    respostas: ["Mamangava", "Peixe", "Galinha", "Cachorro"],
    correta: 0
  },
  {
    pergunta: "O maracujá é mais conhecido por ser usado em:",
    respostas: ["Salgadinhos", "Sucos e sobremesas", "Combustível", "Pão francês"],
    correta: 1
  },
  {
    pergunta: "O maracujá é uma fruta:",
    respostas: ["Tropical", "Polar", "Desértica sem água", "Marinha"],
    correta: 0
  }
];

let indice = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const resultadoEl = document.getElementById("resultado");
const proximaBtn = document.getElementById("proxima");

function carregarPergunta(){
  resultadoEl.textContent = "";
  proximaBtn.style.display = "none";

  const atual = perguntas[indice];
  perguntaEl.textContent = atual.pergunta;
  respostasEl.innerHTML = "";

  atual.respostas.forEach((resposta, i) => {
    const botao = document.createElement("button");
    botao.textContent = resposta;
    botao.classList.add("resposta");

    botao.onclick = () => verificarResposta(botao, i);

    respostasEl.appendChild(botao);
  });
}

function verificarResposta(botao, escolha){
  const atual = perguntas[indice];
  const botoes = document.querySelectorAll(".resposta");

  botoes.forEach(b => b.disabled = true);

  if(escolha === atual.correta){
    botao.classList.add("correta");
    resultadoEl.textContent = "✅ Resposta correta!";
    pontos++;
  }else{
    botao.classList.add("errada");
    botoes[atual.correta].classList.add("correta");
    resultadoEl.textContent = "❌ Resposta errada!";
  }

  proximaBtn.style.display = "inline-block";
}

proximaBtn.onclick = () => {
  indice++;

  if(indice < perguntas.length){
    carregarPergunta();
  }else{
    perguntaEl.textContent = "Resultado final";
    respostasEl.innerHTML = "";
    resultadoEl.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
    proximaBtn.style.display = "none";
  }
};

carregarPergunta();