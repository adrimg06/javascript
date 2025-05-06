const citas = [
    { texto: "El verdadero viaje comienza cuando sales de tu zona de confort.", autor: "Elvis" },
    { texto: "La perseverancia convierte lo imposible en posible.", autor: "Miguel" },
    { texto: "Cada día es una nueva oportunidad para cambiar tu vida.", autor: "Jose Daniel" },
    { texto: "No sueñes tu vida, vive tu sueño.", autor: "Esteban" },
    { texto: "El conocimiento es la clave que abre todas las puertas.", autor: "Malde" }
];

function mostrarCita() {
    const indice = Math.floor(Math.random() * citas.length);
    document.getElementById("quote").innerHTML = `"${citas[indice].texto}"`;
    document.getElementById("author").innerHTML = `- ${citas[indice].autor}`;
}