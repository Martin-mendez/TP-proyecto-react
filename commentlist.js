import React from 'react';

function CommentList({ comments }) {
  return (
    <div>
      <h2>Comentarios</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.text}
            {comment.image && (
              <img
                src={comment.image}
                alt="Comentario"
                style={{ width: '400px', height: '250px' }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
