import React,{useEffect} from 'react'
import {v4 as uuidv4} from "uuid"

const Form = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) => {
  
  const updateTodo=(title,id,completed)=>{
    const newTodo=todos.map((todo)=>
      todo.id===id ? {title,id,completed}:todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(()=>{
    if(editTodo){
      setInput(editTodo.title);
    }else{
      setInput("")
    }
  },[setInput,editTodo])
  const onInputChange=(e)=>{
        setInput(e.target.value);
    };
    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(!editTodo){
          setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
        setInput('');
        }
        else{
          updateTodo(input,editTodo.id,editTodo.completed)
        }
    };
  return (
    <form onSubmit={onFormSubmit} style={{display:"flex"}}>
        <textarea type="text" 
        placeholder='Enter a Todo' 
        className='todo_input'
        value={input}
        required
        onChange={onInputChange}
        >
          </textarea>

    
    <button className='button_add'
     type="submit" >
      {editTodo ? "OK" : "Add"}

      </button>
    </form>
  )
}

export default Form