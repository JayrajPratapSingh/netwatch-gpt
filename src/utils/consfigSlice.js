import { createSlice } from "@reduxjs/toolkit";

const consfig = createSlice({
    name:"config",
    initialState: {
        lang:"en"
    },
    reducers: {
        setLang:(state, action)=>{
            state.lang = action.payload
        }
    }
})

export const {setLang} = consfig.actions;
export default consfig.reducer;