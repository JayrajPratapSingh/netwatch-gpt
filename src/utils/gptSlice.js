import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        toggleGptBtn:false,
    },
    reducers:{
        setToggleGptBtn:(state, action)=>{
            state.toggleGptBtn = !state.toggleGptBtn;
        }
    }
})
export const {setToggleGptBtn} = gptSlice.actions
export default gptSlice.reducer;