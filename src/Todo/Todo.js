import React from 'react';

const Todo = ({onDelete,todo:{title, date, id}}) => {
  return (
    <fieldset style={{display:'flex', justifyContent:'space-between', margin:'10px'}}>
      <div>{date}</div>
      <div>{title}</div>
      <button onClick={()=>onDelete(id)}>&times;</button>
    </fieldset>
  );
};

export default Todo;