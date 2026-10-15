const frases = [
    "A dança é a linguagem escondida da alma.",
    "Dançar é sonhar com os pés.",
    "A arte transforma vidas.",
    "Não tente dançar melhor do que os outros. Tente apenas dançar melhor do que você mesmo.",
    "A música é a inspiração, a dança é a expressão.",
    "Os pés dançam o que o coração sente.",
    "A dança é a poesia do corpo em movimento.",
    "Quem dança, os seus males espanta.",
    "Cada passo de dança é um passo em direção à liberdade.",
    "Na dança não existem erros, apenas novos movimentos.",
    "Dançar é libertar a energia que habita dentro de si.",
    "O ritmo é a batida do coração transformada em som."
];

let ultimaFraseIndex = -1;

function trocarFraseComFade() {
    const elementoFrase = document.getElementById("frase-motivacional");
    if (!elementoFrase) return;

    // 1. Aplica a classe para fazer o Fade Out (desaparecer)
    elementoFrase.classList.add("fade-out");

    // 2. Espera 800ms (tempo da animação CSS) para trocar o texto e fazer o Fade In
    setTimeout(() => {
        let indiceAleatorio;
        do {
            indiceAleatorio = Math.floor(Math.random() * frases.length);
        } while (indiceAleatorio === ultimaFraseIndex && frases.length > 1);

        ultimaFraseIndex = indiceAleatorio;
        elementoFrase.textContent = '"' + frases[indiceAleatorio] + '"';

        // Remove a classe para reaparecer (Fade In)
        elementoFrase.classList.remove("fade-out");
    }, 800);
}

document.addEventListener("DOMContentLoaded", function () {
    contarVisita();
    
    // Mostra uma frase inicial imediatamente
    trocarFraseComFade();

    // Alterna a frase com o efeito de fade a cada 6 segundos
    setInterval(trocarFraseComFade, 6000);
});

function mostrarMensagem() {
    alert("Obrigado pela sua visita! Venha experimentar uma aula gratuita.");
}

let corAlternada = false;
function mudarCor() {
    if (!corAlternada) {
        document.body.style.backgroundColor = "#0f172a";
    } else {
        document.body.style.backgroundColor = "";
    }
    corAlternada = !corAlternada;
}

function modoEscuro() {
    document.body.classList.toggle("light-theme");
}

let visitas = parseInt(localStorage.getItem("contador_visitas")) || 0;

function contarVisita() {
    visitas++;
    localStorage.setItem("contador_visitas", visitas);
    const elementoContador = document.getElementById("contador");
    if (elementoContador) {
        elementoContador.textContent = "Visitas: " + visitas;
    }
}
