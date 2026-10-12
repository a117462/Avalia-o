function aoCarregarPagina() {
    alert("Bem-vindo à Dance Academy!");
    contarVisita();
}

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
    document.getElementById("contador").innerHTML = "Visitas: " + visitas;
}

const frases = [
    "A dança é a linguagem escondida da alma.",
    "Dançar é sonhar com os pés.",
    "A arte transforma vidas.",
    "Não tente dançar melhor do que os outros. Tente apenas dançar melhor do que você mesmo.",
    "A música é a inspiração, a dança é a expressão."
];

function gerarFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    document.getElementById("frase-motivacional").innerHTML = '"' + frases[indiceAleatorio] + '"';
}