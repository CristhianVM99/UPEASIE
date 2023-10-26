const RandomImage = (portada) => {
    /* IMAGENES ALEATORIAS */
    const indiceAleatorio = Math.floor(Math.random() * portada.length);
    const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
    return `${
        import.meta.env.VITE_APP_ROOT_API
    }/InstitucionUpea/Portada/${imagenSeleccionada}`;
};
export default RandomImage;
