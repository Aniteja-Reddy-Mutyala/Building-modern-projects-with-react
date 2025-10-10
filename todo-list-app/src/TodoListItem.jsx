import { useDispatch } from "react-redux"
import { markTodoAsCompleted } from "./thunks";
import { deleteTodo } from "./thunks";
export default function TodoListItem({todo}){
    const dipsatch=useDispatch();
    return(
        <>
        <h3>{todo.text}</h3>
        {todo.isCompleted && <p>Completed</p>}
        {todo.isCompleted?
        <button onClick={()=>dipsatch(deleteTodo(todo.id))}>Delete Item</button>
    :<button onClick={()=>dipsatch(markTodoAsCompleted(todo.id))}>Mark as complete </button>}
        </>
    )

}