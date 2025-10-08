import { useSelector } from "react-redux";
import NewTodoForm from "./src/NewTodoForm";
import TodoListItem from "./src/TodoListItem";
export default function TodoList({onCreateClicked}){
    const todos=useSelector(state=>state.todos.value);

    return(
        <>
        <h1>My Todos</h1>
        <NewTodoForm onCreateClicked={onCreateClicked}/>
        <h3>Completed: </h3>
        {todos.map((todo,index)=>(
            <TodoListItem todo={todo} key={index}  />
        ))}
        <h3>Incompleted: </h3>
        {todos.map((todo,index)=>(
            <TodoListItem todo={todo} key={index} />
        ))}
        </>
    )
}