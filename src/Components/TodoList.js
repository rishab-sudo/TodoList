import React from 'react'

const TodoList = ({todos,setTodos,editTodo,setEditTodo}) => {

    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id))
        alert("Todo has been deleted");
    }
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return{...item,completed: !item.completed};
                }
            })
        )
    }
    const handleEdit=({id})=>{
      const findTodo = todos.find((todo)=>todo.id===id);
      setEditTodo(findTodo);
    } ;

  return (
    <div>
        {todos.map((todo)=>(
          <li className='list_item' key={todo.id}>
            <input
            type="text"
            value={todo.title}
            className={`list $ {todo.completed ? "complete" :""}`}
            onChange={(event)=> event.preventDefault()}
            />
          <div>
            <button className='button_complete task_button'onClick={()=>handleComplete(todo)}>
             <i className='fa fa-check-circle'></i>
            </button>
            <button className='button_edit task_button' onClick={()=>handleEdit(todo)}>
             <i className='fa fa-edit'></i>
            </button>
            <button className='button_delete task_button' onClick={()=>handleDelete(todo)}>
             <i className='fa fa-trash'></i>
            </button>
          </div>
          </li>  
        ))}
    </div>
  )
}

export default TodoList