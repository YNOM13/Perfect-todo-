import './App.css';
import Form from "./Form/Form";
import {useCallback, useEffect, useState} from "react";
import Todos from "./Todos/Todos";

function App() {
  const [todos, setTodos] = useState([])
  const [todoss, setTodoss] = useState([])


  const onSave = useCallback(({date, title})=> {
    setTodos((prevState)=>{
      return[...prevState,{
        date,
        title,
        id:Date.now(),
      }]
    })
  },[])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(data =>{
        setTodos(data.map(i=>{
        return{
          ...i,
          date:new Date().toISOString().substring(0,10),
        }}))
      })
  },[])

  const onDelete = useCallback((itemId) => {
    setTodos(prevState => prevState.filter(i => i.id !== itemId))
  },[])

  return (
    <div className="App">
      <Form onSave = {onSave}/>
      <Todos todos={todos} onDelete = {onDelete}/>
    </div>
  );
}

export default App;
