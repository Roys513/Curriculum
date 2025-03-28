// Array de frases motivadoras
const frasesMotivadoras = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cree en ti mismo y todo será posible.",
    "El aprendizaje nunca termina, cada día es una nueva oportunidad.",
    "No cuentes los días, haz que los días cuenten.",
    "El único límite es el que tú te pongas."
];

// Objeto con información adicional sobre la motivación
const motivacion = {
    autor: "Anónimo",
    mensajePredeterminado: "Sigue adelante, el esfuerzo siempre vale la pena."
};

// Función para obtener una frase aleatoria
function obtenerFraseAleatoria() {
    const indice = Math.floor(Math.random() * frasesMotivadoras.length);
    return frasesMotivadoras[indice];
}

// Función para actualizar la frase en la página
function actualizarFrase() {
    const fraseElemento = document.getElementById("frase-motivadora");
    fraseElemento.textContent = obtenerFraseAleatoria();
}

// Simular carga asincrónica con setTimeout
setTimeout(() => {
    actualizarFrase();
}, 2000);

// Evento para cambiar la frase manualmente
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("cambiar-frase");
    boton.addEventListener("click", actualizarFrase);
});