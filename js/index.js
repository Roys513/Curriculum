// Array de frases motivadoras
const recomendaciones = [
    {
    id:1,
    frase: 'Persona responsable, con iniciativa y enormemente eficiente en las tareas que se le asignan"',
    author: "Sonopluss Canarias S.L."
    },
    {
    id:2,
    frase: 'Su actitud colaborativa, su capacidad para resolver problemas bajo presión y su entusiasmo por cada proyecto lo convierten en un integrante valioso en cualquier equipo"',
    author: "Eventalia Group"
    }
];

// Función para obtener una frase aleatoria
function obtenerNumeroAleatorio() {
    const indice = Math.floor(Math.random() * recomendaciones.length);
    return indice;
}

function obtenerRecomendacion(){
    let numero = obtenerNumeroAleatorio();
    return recomendaciones[numero];
}

function actualizarFrase(){
    let textoFrase = document.getElementById("fraseReview");
    let textoAutor = document.querySelector(".frase__author");
    let recomendacion = obtenerRecomendacion();

    textoFrase.textContent = recomendacion.frase;
    textoAutor.textContent = recomendacion.author;
}


//Simular carga asincrónica con setTimeout
setTimeout(() => {
    actualizarFrase();
}, 2000);
