// ===============================
// Splash Screen
// ===============================

window.addEventListener("load", () => {

    const splash = document.getElementById("splash");

    if (splash) {

        setTimeout(() => {

            splash.style.opacity = "0";

            setTimeout(() => {

                splash.style.display = "none";

            }, 800);

        }, 1800);

    }

});

// ===============================
// Iniciar Experiência
// ===============================

function iniciarExperiencia() {

    const audio = document.getElementById("audioBoasVindas");

    // Se não encontrar o áudio, entra normalmente
    if (!audio) {
        window.location.href = "pages/camera.html";
        return;
    }

    audio.currentTime = 0;

    audio.play().then(() => {

        audio.onended = function () {
            window.location.href = "pages/camera.html";
        };

    }).catch(() => {

        // Se o navegador bloquear o áudio,
        // entra normalmente após 1 segundo.
        setTimeout(() => {
            window.location.href = "pages/camera.html";
        }, 1000);

    });

}// ===============================
// Passaporte Digital
// ===============================

function atualizarPassaporte(){
  const etapas = [
    { chave: "aprendeu", id: "seloAprender" },
    { chave: "viuAR", id: "seloAR" },
    { chave: "fezQuiz", id: "seloQuiz" },
    { chave: "gerouCertificado", id: "seloCertificado" }
  ];

  let concluidas = 0;

  etapas.forEach(etapa => {
    const elemento = document.getElementById(etapa.id);

    if(!elemento){
      return;
    }

    elemento.classList.remove("concluido");

    if(localStorage.getItem(etapa.chave) === "sim"){
      elemento.classList.add("concluido");
      concluidas++;
    }
  });

  const porcentagem = Math.round((concluidas / etapas.length) * 100);

  const barra = document.getElementById("barraExperiencia");
  const textoPorcentagem = document.getElementById("porcentagemExperiencia");
  const texto = document.getElementById("textoProgresso");
  const conquista = document.getElementById("conquistaFinal");

  if(barra){
    barra.style.width = porcentagem + "%";
  }

  if(textoPorcentagem){
    textoPorcentagem.textContent = porcentagem + "% concluído";
  }

  if(conquista){
    conquista.classList.remove("ativo");
  }

  if(texto){
    if(concluidas === 0){
      texto.textContent = "Comece sua jornada pelo maracujá.";
    }else if(concluidas < 4){
      texto.textContent = `Você concluiu ${concluidas} de 4 etapas. Continue a experiência!`;
    }else{
      texto.textContent = "Experiência completa! Você finalizou o Maracujá Experience. 🍈";

      if(conquista){
        conquista.classList.add("ativo");
      }
    }
  }
}

function marcarEtapa(etapa){
  localStorage.setItem(etapa, "sim");
}

atualizarPassaporte();// ===============================
// Botão Continuar Experiência
// ===============================

function pegarProximaEtapa(){
  if(localStorage.getItem("aprendeu") !== "sim"){
    return {
      texto: "📚 Começar por Aprender",
      url: "pages/aprender.html"
    };
  }

  if(localStorage.getItem("viuAR") !== "sim"){
    return {
      texto: "📷 Continuar para AR",
      url: "pages/camera.html"
    };
  }

  if(localStorage.getItem("fezQuiz") !== "sim"){
    return {
      texto: "🧠 Fazer Quiz",
      url: "pages/quiz.html"
    };
  }

  if(localStorage.getItem("gerouCertificado") !== "sim"){
    return {
      texto: "🏆 Gerar Certificado",
      url: "pages/certificado.html"
    };
  }

  return {
    texto: "🔄 Reiniciar Experiência",
    url: "reiniciar"
  };
}

function configurarBotaoContinuar(){
  const botao = document.getElementById("botaoContinuar");

  if(!botao){
    return;
  }

  const proxima = pegarProximaEtapa();
  botao.textContent = proxima.texto;
}

function continuarExperiencia(){
  const proxima = pegarProximaEtapa();

  if(proxima.url === "reiniciar"){
    localStorage.removeItem("aprendeu");
    localStorage.removeItem("viuAR");
    localStorage.removeItem("fezQuiz");
    localStorage.removeItem("gerouCertificado");
    localStorage.removeItem("pontuacaoQuiz");
    localStorage.removeItem("totalPerguntas");

    window.location.reload();
    return;
  }

  window.location.href = proxima.url;
}

configurarBotaoContinuar();// ===============================
// Ranking da Feira
// ===============================

function carregarRanking(){
  const lista = document.getElementById("listaRanking");

  if(!lista){
    return;
  }

  const ranking = JSON.parse(localStorage.getItem("rankingMaracuja")) || [];

  if(ranking.length === 0){
    lista.innerHTML = "<li>Nenhum participante ainda.</li>";
    return;
  }

  ranking.sort((a, b) => b.pontos - a.pontos);

  lista.innerHTML = "";

  ranking.slice(0, 5).forEach(participante => {
    const item = document.createElement("li");
    item.textContent = `${participante.nome} — ${participante.pontos}/${participante.total}`;
    lista.appendChild(item);
  });
}

carregarRanking();// ===============================
// Modo Feira
// ===============================

function abrirModoFeira(){
  const modal = document.getElementById("modalFeira");

  if(modal){
    modal.classList.add("ativo");
  }
}

function fecharModoFeira(){
  const modal = document.getElementById("modalFeira");

  if(modal){
    modal.classList.remove("ativo");
  }
}// ===============================
// Sobre o Projeto
// ===============================

function abrirSobreProjeto(){
  const modal = document.getElementById("modalSobreProjeto");

  if(modal){
    modal.classList.add("ativo");
  }
}

function fecharSobreProjeto(){
  const modal = document.getElementById("modalSobreProjeto");

  if(modal){
    modal.classList.remove("ativo");
  }
}