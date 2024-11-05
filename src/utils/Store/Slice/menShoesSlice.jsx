import { createSlice } from "@reduxjs/toolkit";

const menShoesSlice = createSlice({
    name:'menshoes',
    initialState:{
        item:[]
    },
    reducers:{
        addMenData:(state,action)=>{
            state.item=action.payload
        },
        removeMenData:(state,action)=>{
            state.item.pop
        }
    }
})

export const {addMenData,removeMenData}=menShoesSlice.actions
export default menShoesSlice.reducer;