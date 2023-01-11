import React, { useState } from 'react';
import ToDoList from './ToDoList';
import NewToDo from './NewToDo';

function App() {
  const [toDos, setToDos] = useState([
    { id: 1, title: 'Ir ao supermercado as 9h:00 am', completed: false },
    { id: 2, title: 'Comprar Um Tesla', completed: false },
  ]);

  const addToDo = (toDo) => {
    setToDos([...toDos, { id: Date.now(), ...toDo }]);
  };
  
  const updateToDo = (id) => {
    setToDos(toDos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }
  
  const deleteToDo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <NewToDo onAddToDo={addToDo} />
      <ToDoList toDos={toDos} onDelete={deleteToDo} onUpdate={updateToDo} />
    </div>
  );
}

export default App;
