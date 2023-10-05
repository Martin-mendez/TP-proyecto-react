import React, { useState } from "react";
import "./App.css";

const PublicacionPost = () => {
  const [autor, setAutor] = useState("");
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState(null);

  const handleAutorChange = (e) => {
    setAutor(e.target.value);
  };

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleContenidoChange = (e) => {
    setContenido(e.target.value);
  };

  const handleImagenChange = (e) => {
    // Aquí puedes manejar la carga de la imagen, por ejemplo, utilizando FileReader o una biblioteca de carga de archivos
    const selectedImage = e.target.files[0];
    setImagen(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos del post (autor, título, contenido y la imagen) a tu servidor o realizar cualquier acción necesaria.
    // Puedes usar la variable "imagen" para cargar la imagen al servidor.

    // Por ejemplo, puedes crear un objeto con los datos del post y mostrarlos en la consola:
    const post = {
      autor,
      titulo,
      contenido,
      imagen,
    };
    console.log("Datos del post:", post);

    // Luego, puedes redirigir al usuario a la página de inicio (o a cualquier otra página) utilizando window.location.href
    window.location.href = "/"; // Cambia "/" por la ruta a la que deseas redirigir al usuario
  };

  return (
    <div>
      <h2>Publicar un Nuevo Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Autor:</label>
          <input type="text" value={autor} onChange={handleAutorChange} />
        </div>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={handleTituloChange} />
        </div>  
        <div>
          <label>Contenido:</label>
          <textarea value={contenido} onChange={handleContenidoChange} />
        </div>
        <div>
          <label>Imagen:</label>
          <input type="file" accept="image/*" onChange={handleImagenChange} />
        </div>
        <button type="submit">Publicar</button>
      </form>
      {/* Agrega un botón de "Home" que redirige a la página de inicio */}
      <button onClick={() => (window.location.href = "/")}>Home</button>
    </div>
  );
};

export default PublicacionPost;
