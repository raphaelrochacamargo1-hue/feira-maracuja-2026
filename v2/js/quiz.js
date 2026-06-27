const perguntas = [
  {
    pergunta: "Qual inseto é muito importante para a polinização do maracujá?",
    respostas: ["Mamangava", "Mosquito", "Borboleta comum", "Formiga"],
    correta: 0
  },
  {
    pergunta: "O maracujá é muito usado principalmente em:",
    respostas: ["Sucos e sobremesas", "Pizzas", "Combustível", "Sabonete"],
    correta: 0
  },
  {
    pergunta: "A flor do maracujá precisa da polinização para:",
    respostas: ["Formar o fruto", "Mudar de cor", "Virar folha", "Secar mais rápido"],
    correta: 0
  },
  {
    pergunta: "O maracujá pode ter em sua composição:",
    respostas: ["Vitaminas, fibras e antioxidantes", "Metal e plástico", "Areia e cimento", "Petróleo"],
    correta: 0
  }
];

let indice = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const resultadoEl = document.getElementById("resultado");
const proximaBtn = document.getElementById("proxima");
const progresso = document.getElementById("progresso");

function carregarPergunta(){
  resultadoEl.textContent = "";
  proximaBtn.style.display = "none";

  const atual = perguntas[indice];
  const porcentagem = ((indice) / perguntas.length) * 100;
progresso.style.width = porcentagem + "%";

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
    resultadoEl.textContent = "✅ Correto! Muito bem.";
    pontos++;
  }else{
    botao.classList.add("errada");
    botoes[atual.correta].classList.add("correta");
    resultadoEl.textContent = "❌ Quase! A resposta correta está em verde.";
  }

  proximaBtn.style.display = "inline-block";
}

proximaBtn.onclick = () => {
  indice++;

  if(indice < perguntas.length){
    carregarPergunta();
  }else{
    perguntaEl.textContent = "🏆 Resultado Final";
    progresso.style.width = "100%";
    respostasEl.innerHTML = "";
    resultadoEl.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;

    proximaBtn.textContent = "Gerar Certificado";
    proximaBtn.style.display = "inline-block";

    proximaBtn.onclick = () => {
      window.location.href = "certificado.html";
    };
  }
};

carregarPergunta();