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
let respondeu = false;

const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const resultadoEl = document.getElementById("resultado");
const proximaBtn = document.getElementById("proxima");
const progresso = document.getElementById("progresso");
const contadorQuiz = document.getElementById("contadorQuiz");

function carregarPergunta(){
  respondeu = false;

  resultadoEl.textContent = "";
  proximaBtn.style.display = "none";
  proximaBtn.textContent = "Próxima";

  const atual = perguntas[indice];

  perguntaEl.textContent = atual.pergunta;
  respostasEl.innerHTML = "";

  contadorQuiz.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;

  const porcentagem = (indice / perguntas.length) * 100;
  progresso.style.width = porcentagem + "%";

  atual.respostas.forEach((resposta, i) => {
    const botao = document.createElement("button");

    botao.textContent = resposta;
    botao.classList.add("resposta");

    botao.onclick = () => verificarResposta(botao, i);

    respostasEl.appendChild(botao);
  });
}

function verificarResposta(botao, escolha){
  if(respondeu){
    return;
  }

  respondeu = true;

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
    resultadoEl.textContent = "❌ Quase! A resposta correta está marcada em verde.";
  }

  proximaBtn.style.display = "inline-block";
}

proximaBtn.onclick = () => {
  indice++;

  if(indice < perguntas.length){
    carregarPergunta();
  }else{
    mostrarResultadoFinal();
  }
};

function mostrarResultadoFinal(){
  progresso.style.width = "100%";

  perguntaEl.textContent = "🏆 Resultado Final";
  contadorQuiz.textContent = "Quiz concluído";
  respostasEl.innerHTML = "";

  let mensagem = "";

  if(pontos === perguntas.length){
    mensagem = "Excelente! Você domina o assunto. 🍈";
  }else if(pontos >= perguntas.length / 2){
    mensagem = "Muito bom! Você aprendeu bastante. 👏";
  }else{
    mensagem = "Você pode revisar e tentar novamente. 📚";
  }

  resultadoEl.innerHTML = `
    Você acertou <strong>${pontos}</strong> de <strong>${perguntas.length}</strong> perguntas.<br>
    ${mensagem}
  `;

  localStorage.setItem("pontuacaoQuiz", pontos);
  localStorage.setItem("totalPerguntas", perguntas.length);
  localStorage.setItem("fezQuiz", "sim");

  proximaBtn.textContent = "Gerar Certificado";
  proximaBtn.style.display = "inline-block";

  proximaBtn.onclick = () => {
    window.location.href = "certificado.html";
  };
}

carregarPergunta();