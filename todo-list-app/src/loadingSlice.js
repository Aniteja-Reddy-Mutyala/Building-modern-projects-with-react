import { createSlice } from "@reduxjs/toolkit";
export const loadingsSlice=createSlice({
    name:"loading",
    initialState:{
      value:{
        completed:true,
        successful:false,
      }
    
    },
    reducers:
    {
        loadingStarted:(state,action)=>{
            state.value.completed=false
        },
        loadingCompleted:(state,action)=>{
           state.value.completed=true
           state.value.successful=true
        },
        loadingFailed:(state,action)=>{
            state.value.completed=true
            state.value.successful=false

        }
    }
})
export const{loadingStarted,loadingCompleted,loadingFailed}=loadingsSlice.actions