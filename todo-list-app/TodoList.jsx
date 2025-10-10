import { useSelector } from "react-redux";
import NewTodoForm from "./src/NewTodoForm";
import TodoListItem from "./src/TodoListItem";
import { getTodos,getTodosLoading } from "./src/selectors";
export default function TodoList(){
    const todosAreLoading=useSelector(getTodosLoading)
    const todos=useSelector(getTodos);

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