async function obtenerMensaje() {
    try {
        const respuesta = await fetch('data.json');
        const datos = await respuesta.json();
        document.getElementById('mensajeeee').innerText = datos.message;
    } catch (error) {
        console.error('Error cargando el mensaje a2sdaaa :', error);
    }
}

obtenerMensaje();
