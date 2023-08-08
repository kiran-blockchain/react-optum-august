import { createSlice } from '@reduxjs/toolkit'
 const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:100
    },
    reducers:{
        //action method
        increment:(state,data)=>{
            return {...state,count:state.count+1}
        },
        decrement:(state,data)=>{
            return {...state,count:state.count-1}
        }
    }
});

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;
