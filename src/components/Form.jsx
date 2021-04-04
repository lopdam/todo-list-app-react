
import React from 'react';

const Form=({setInputText,todos,setTodos,inputText,filter,setFilter})=>{

    const inputTextHandler=(e)=>{
        //console.log(e.target.value);

        setInputText(e.target.value);
    }

    const submitTodoHandler=(e)=>{
        e.preventDefault();

        if(inputText!==""){
            let newTodo={text: inputText, completed: false,id: Math.random()*1000};
            setTodos([...todos,newTodo]);
            setInputText('');
        }
        
    }

    const filterHandler=(e)=>{
        setFilter(e.target.value);
    }

    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit"> 
            <i className="fa fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo" value={filter} onChange={filterHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>

            </select>
        
        </div>

        </form>

    );
}

export default Form;