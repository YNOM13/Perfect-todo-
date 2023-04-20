import React from 'react';
import Todo from "../Todo/Todo";

const Todos = ({todos, onDelete}) => {
  return (
    <>
      {todos.map(i=><Todo key={i.id} todo={i} onDelete={onDelete}/>)}
    </>
  );
};

export default Todos;