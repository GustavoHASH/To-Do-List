import React from 'react';
import ToDo from './ToDo';

function ToDoList({ toDos, onDelete, onUpdate }) {
  return (
    <div>
      {toDos.map((todo) => (
        <ToDo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default ToDoList;
