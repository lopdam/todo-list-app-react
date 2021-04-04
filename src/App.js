import React,{useState} from 'react';
import './App.scss';

//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';



  function App(){

    const [inputText, setInputText]= useState("");
    const [todos, setTodos] = useState([]);
    const [filter,setFilter]=useState("all");

    return (
    <div className="App">
      <header>
      <h1>
        Todo List App
      </h1>
      </header>
      <Form filter={filter} setFilter={setFilter} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} filter={filter}/>
    </div>
  );
  
}



export default App;
