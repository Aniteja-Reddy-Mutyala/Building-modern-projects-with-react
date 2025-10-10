import { useDispatch } from "react-redux"
import { markTodoAsCompleted ,deleteTodo } from "./thunks";
import styled from "styled-components";
const CardContainer=styled.div`
${props=>props.important?'background-color:yellow;':'background-color:white;'}
border-radius:10px;
box-shadow:0 2px 5px rgba(0,0,0.1,0.5);
padding:15px;
color:black`;

export default function TodoListItem({todo}){
    const dipsatch=useDispatch();
    return(
        <CardContainer importan={false}>
        <h3>{todo.text}</h3>
        {todo.isCompleted && <p>Completed</p>}
        {todo.isCompleted?
        <button onClick={()=>dipsatch(deleteTodo(todo.id))}>Delete Item</button>
    :<button onClick={()=>dipsatch(markTodoAsCompleted(todo.id))}>Mark as complete </button>}
        </CardContainer>
    )

}