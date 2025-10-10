import { useSelector } from "react-redux";
import NewTodoForm from "./src/NewTodoForm";
import TodoListItem from "./src/TodoListItem";
export default function TodoList(){
    const todosAreLoading=useSelector(state=>!state.loading.value.completed)
    const todos=useSelector(state=>state.todos.value);

    return(
        <>
        <h1>My Todos</h1>
        <NewTodoForm/>
        {todosAreLoading?
        <p>Loading...</p>:
        (
            <>
          <h3>Completed: </h3>
        {todos.map((todo)=>(
            <TodoListItem todo={todo} key={todo.id}  />
        ))}
        <h3>Incompleted: </h3>
        {todos.map((todo)=>(
            <TodoListItem todo={todo} key={todo.id} />
        ))}
        </>
        )}
        
        </>
    )
}