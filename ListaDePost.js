import React from "react";

const ListaDePosts = ({ posts }) => {
  // Renderiza la lista de posts aquí
  return (
    <div>
      <h2>Mis Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.titulo}</h3>
            <p>{post.contenido}</p>
            {/* Aquí puedes mostrar la imagen si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDePosts;
