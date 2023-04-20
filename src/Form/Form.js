import React, {useState} from 'react';
import Title from "../Title/Title";

const Form = ({onSave}) => {

  const [form, setForm] = useState({
    date: new Date().toISOString().substring(0,10),
    title:'',
  })
  const onSubmit = (e) => {
    e.preventDefault()

    if(form.title !== ''){
      onSave(form)

      setForm(prevState => {
        return{
          ...prevState,
          title: '',
        }
      })
    }
  }
  const onChange = (e) => {
    const {name, value} = e.target
    setForm((prev) => {
      return{
        ...prev,
        [name]:value,
      }
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <Title/>
      <input onChange={onChange} value={form.title} name='title' type="text"/>
      <input onChange={onChange} value={form.date} name='date'  type="date"/>
      <button>Add todo</button>
    </form>
  );
};

export default Form;