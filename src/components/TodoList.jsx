
import React from 'react';

//Components
import Todo from './Todo'




const TodoList=({todos,setTodos,filter})=>{


    

    return(

        <div className="todo-container">

        <ul className="todo-list">
        
        {todos.map((todo)=>{

            if(filter==="completed"){

                if(todo.completed===false){
                    return null;
                }
               return(<Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>);
            }
            else if(filter==="uncompleted"){
                    if(todo.completed!==false){
                    return null;
                }
                 return(<Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>);
            }

           return(<Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>);

        })}
        </ul>
        
        </div>
 
    );
}

export default TodoList;


