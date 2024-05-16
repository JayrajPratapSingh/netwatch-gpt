import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        TrailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        TrailerVideo:(state, action)=>{
            state.TrailerVideo = action.payload;
        }
    }
})
export const {addNowPlayingMovies, TrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer