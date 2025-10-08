import NewTodoForm from "./src/NewTodoForm";
import TodoListItem from "./src/TodoListItem";

export default function TodoList({completedTodos,incompletedTodos,onCompletedClicked,onDeleteClicked,onCreateClicked}){
    return(
        <>
        <h1>My Todos</h1>
        <NewTodoForm onCreateClicked={onCreateClicked}/>
        <h3>Completed: </h3>
        {completedTodos.map((todo,index)=>(
            <TodoListItem todo={todo} key={index}  onDeleteClicked={onDeleteClicked}/>
        ))}
        <h3>Incompleted: </h3>
        {incompletedTodos.map((todo,index)=>(
            <TodoListItem todo={todo} key={index} onCompletedClicked={onCompletedClicked}/>
        ))}
        </>
    )
}