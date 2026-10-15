// Executa a troca de frase IMEDIATAMENTE antes de tudo
function carregarFraseInicial() {
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

    const elementoFrase = document.getElementById("frase-motivacional");
    if (elementoFrase) {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        elementoFrase.textContent = '"' + frases[indiceAleatorio] + '"';
    }
}

// Corre o código assim que o HTML estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    carregarFraseInicial(); // Muda a frase no refresh
    contarVisita();
    
    // Troca automaticamente a cada 5 segundos
    setInterval(carregarFraseInicial, 5000);
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

function gerarFrase() {
    carregarFraseInicial();
}
