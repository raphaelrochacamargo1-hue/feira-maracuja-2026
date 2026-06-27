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

    if (!audio) {
        window.location.href = "pages/camera.html";
        return;
    }

    audio.currentTime = 0;

    audio.play();

    audio.onended = function () {

        window.location.href = "pages/camera.html";

    };

}