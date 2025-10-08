import { createSlice } from "@reduxjs/toolkit";
export const todosSlice=createSlice({
    name:"todos",
    initialState:{
        value:[{
            text:"Go to the store",
            isCompleted:true
        },{
            text:"new Todo",
            isCompleted:false
        }]
    },
    reducers:
    {
        createTodo:state=>{
            state.value=[...state.value,{
                text:"new Todo",
                isCompleted:false
            }]
        },
        markTodoAsCompleted:state =>{
            const text="new Todo"
            const todo=state.value.find(t=> t.text===text);
            todo.isCompleted=true;
        },
        deleteTodo:state =>{
            const text="new Todo"
            state.value=state.value.filter(t=>t.text!==text)
        }

    }
})
export const{createTodo,markTodoAsCompleted,deleteTodo}=todosSlice.actions