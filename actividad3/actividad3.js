function cambiaEstilo(nuevoEstilo) {
    const linkEstilo = document.getElementById('estilo');
    if (linkEstilo) {
        linkEstilo.href = `${nuevoEstilo}.css`;
    } else {
        console.error("No se encontró el elemento <link> con el ID 'estilo'.");
    }
}

function cambiaImagenBoton(idImagen, nuevaRuta) {
    const imagen = document.getElementById(idImagen);
    if (imagen) {
        imagen.src = nuevaRuta;
    } else {
        console.error(`No se encontró una imagen con el ID: ${idImagen}`);
    }
}