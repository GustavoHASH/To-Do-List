import React from 'react';

function ToDo({ id, title, completed, onDelete, onUpdate }) {
  return (
    <div>
      <input type="checkbox" checked={completed} onClick={() => onUpdate(id)} />
      <span>{title}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default ToDo;
