import { useState } from "react";

import "./App.css";
import TodoList from "../TodoList";

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    {
      text: " take out garbage",
      isCompleted: true,
    },
    {
      text: "Make dinner",
      isCompleted: true,
    },
  ]);
  const [incompletedTodos, setIncompletedTodos] = useState([
    {
      text: "Paint the house",
      isCompleted: false,
    },
  ]);
  function markTodoAsComplete(text) {
    setIncompletedTodos(incompletedTodos.filter((t) => t.text !== text));
    setCompletedTodos([
      ...completedTodos,
     {... incompletedTodos.find((t) => t.text === text),isCompleted:true}
    ]);
  }
  function deleteTodo(text) {
    setCompletedTodos(completedTodos.filter((t) => t.text !== text));
   
  }
  function createTodo(text){
   setIncompletedTodos([...incompletedTodos,{text,isCompleted:false}])
  }
  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompletedTodos={incompletedTodos}
        onCompletedClicked={markTodoAsComplete}
        onDeleteClicked={deleteTodo}
        onCreateClicked={createTodo}
      />
    </>
  );
}

export default App;
