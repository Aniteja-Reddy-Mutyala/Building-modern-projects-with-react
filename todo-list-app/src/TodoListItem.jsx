import { useDispatch } from "react-redux"
import { createTodo,markTodoAsCompleted,deleteTodo } from "./todosSlice";
export default function TodoListItem({todo}){
    const dipsatch=useDispatch();
    return(
        <>
        <h3>{todo.text}</h3>
        {todo.isCompleted && <p>Completed</p>}
        {todo.isCompleted?
        <button onClick={()=>dipsatch(deleteTodo(todo.text))}>Delete Item</button>
    :<button onClick={()=>dipsatch(markTodoAsCompleted(todo.text))}>Mark as complete </button>}
        </>
    )

}