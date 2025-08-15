export function footer() {
    const seccion = document.createElement('section');
    seccion.innerHTML = "Esto es un footer"
    seccion.style.border = "2px solid black"
    seccion.style.backgroundColor = "blue"
    seccion.style.position = 'fixed'; // Fija el footer en la parte inferior
    seccion.style.bottom = '0'; // Lo coloca en la parte inferior
    seccion.style.left = '0'; // Alineado a la izquierda
    seccion.style.right = '0'; // Alineado a la derecha
    seccion.style.background = '#ccc'; // Color de fondo
    seccion.style.padding = '10px'; // Espaciado interno

    return seccion




}