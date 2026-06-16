const barra = document.getElementById('barraContador');
const texto = document.getElementById('textoContador');
let tiempoRestante = 120;

const cuentaRegresiva = setInterval(() => {
    tiempoRestante--;

    
    if (tiempoRestante === 60) {
        texto.innerText = "Resta 1 minuto";
        barra.className = "fixed-top text-center py-3 fw-bold barra-naranja"; // Reemplaza todas las clases de golpe
    } 
    else if (tiempoRestante < 30 && tiempoRestante > 0) {
        texto.innerText = `Restan ${tiempoRestante} segundos`;
        barra.className = "fixed-top text-center py-3 fw-bold barra-rojo";
    } 
    else if (tiempoRestante === 0) {
        texto.innerText = "Tiempo agotado";
        barra.className = "fixed-top text-center py-3 fw-bold barra-negro";
        clearInterval(cuentaRegresiva);
    }
}, 1000);