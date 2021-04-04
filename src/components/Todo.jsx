import React from 'react';

const Todo=({todo,setTodos,todos})=>{

    const deleteHandler=(e)=>{
        setTodos(todos.filter((item)=>item.id!==todo.id));
    };

    const completeHandler=(e)=>{
        
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                item.completed=!todo.completed;
            }
            return item;
        }));
    }

    let classTodo=(!todo.completed)?"todo":"todo completed";

    return(
    <div className={classTodo}>
    <li className="todo-item">
    {todo.text}
    </li>
    <button onClick={completeHandler} className="complete-btn">
    <i  className="fa fa-check"></i>
    </button>
    <button onClick={deleteHandler} className="trash-btn">
    <i  className="fa fa-trash"></i>
    </button>
    </div>
    );
}


export default Todo;