import React, { useState } from 'react';

function NewToDo({ onAddToDo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddToDo({ title, completed: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new ToDo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewToDo;
